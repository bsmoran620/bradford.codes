import * as topojson from 'topojson-client';
import countriesTopology from 'world-atlas/countries-110m.json';
import statesTopology from 'us-atlas/states-10m.json';
import indiaStatesGeoJson from 'geojson-india/india.json';

const worldCountriesFull = topojson.feature(
  countriesTopology,
  countriesTopology.objects.countries
);

/** Raw world countries (all features). */
export const worldCountriesGeoJson = worldCountriesFull;

/**
 * world-atlas rings sometimes jump from lng -180 to +180 on one edge (Russia, Fiji).
 * Leaflet connects those vertices with a straight line across the map (horizontal band).
 * Shift longitudes ring-by-ring so consecutive points differ by at most 180° in lng.
 */
function unwrapLinearRing(ring) {
  if (ring.length === 0) return ring;
  const closed =
    ring.length > 1 &&
    ring[0][0] === ring[ring.length - 1][0] &&
    ring[0][1] === ring[ring.length - 1][1];
  const pts = closed ? ring.slice(0, -1) : ring.slice();
  const out = pts.map((p) => [p[0], p[1]]);
  for (let i = 1; i < out.length; i++) {
    let lng = out[i][0];
    const prevLng = out[i - 1][0];
    while (lng - prevLng > 180) lng -= 360;
    while (lng - prevLng < -180) lng += 360;
    out[i][0] = lng;
  }
  if (closed && out.length > 0) {
    out.push([out[0][0], out[0][1]]);
  }
  return out;
}

function unwrapGeometry(geom) {
  if (!geom || geom.type === 'GeometryCollection') return geom;
  if (geom.type === 'Polygon') {
    return {
      ...geom,
      coordinates: geom.coordinates.map(unwrapLinearRing)
    };
  }
  if (geom.type === 'MultiPolygon') {
    return {
      ...geom,
      coordinates: geom.coordinates.map((poly) => poly.map(unwrapLinearRing))
    };
  }
  return geom;
}

function unwrapFeature(f) {
  return { ...f, geometry: unwrapGeometry(f.geometry) };
}

/**
 * World map layer: omit Antarctica + French Southern Lands; unwrap antimeridian jumps
 * so Russia/Fiji (and similar) do not draw spurious chords across the viewport.
 */
export const worldCountriesGeoJsonForMap = {
  type: 'FeatureCollection',
  features: worldCountriesFull.features
    .filter((f) => {
      const name = f.properties?.name;
      return name !== 'Antarctica' && name !== 'Fr. S. Antarctic Lands';
    })
    .map(unwrapFeature)
};

// Minimal Europe subset for the places currently in the dataset.
// (Can be expanded later without changing map logic.)
const EUROPE_COUNTRY_NAMES = new Set([
  'Belgium',
  'France',
  'Greece',
  'Netherlands',
  'United Kingdom'
]);

export const europeCountriesGeoJsonForMap = {
  type: 'FeatureCollection',
  features: worldCountriesGeoJsonForMap.features.filter((f) =>
    EUROPE_COUNTRY_NAMES.has(f.properties?.name)
  )
};

/**
 * Latin America + Caribbean (world-atlas `properties.name` strings).
 * Used for Americas drill-down: clicking any of these on the world map opens the regional view.
 */
export const americasDrilldownCountryNames = new Set([
  'Argentina',
  'Bahamas',
  'Belize',
  'Bolivia',
  'Brazil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Dominican Rep.',
  'Ecuador',
  'El Salvador',
  'Falkland Is.',
  'Guatemala',
  'Guyana',
  'Haiti',
  'Honduras',
  'Jamaica',
  'Mexico',
  'Nicaragua',
  'Panama',
  'Paraguay',
  'Peru',
  'Puerto Rico',
  'Suriname',
  'Trinidad and Tobago',
  'Uruguay',
  'Venezuela'
]);

export const americasCountriesGeoJsonForMap = {
  type: 'FeatureCollection',
  features: worldCountriesGeoJsonForMap.features.filter((f) =>
    americasDrilldownCountryNames.has(f.properties?.name)
  )
};

export const usStatesGeoJson = topojson.feature(
  statesTopology,
  statesTopology.objects.states
);

/** India states/UTs (GeoJSON). Used for India-only map view. */
export { indiaStatesGeoJson };
