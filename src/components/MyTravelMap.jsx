import React, { useMemo } from 'react';
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import {
  worldCountriesGeoJsonForMap,
  europeCountriesGeoJsonForMap,
  americasCountriesGeoJsonForMap,
  americasDrilldownCountryNames,
  usStatesGeoJson,
  indiaStatesGeoJson
} from '../data/geoJson';
import {
  places,
  visitedCountryNames,
  visitedStateNames,
  visitedIndianStateNames
} from '../data/travelData';

/** Light blue water, soft land; no labels (keeps the map calm). */
const CARTO_VOYAGER_NOLABELS =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png';
const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

const US_BOUNDS = [
  [24.2, -126.5],
  [49.6, -65.2]
];

/** Rough bounds for India + island territories in the GeoJSON. */
const INDIA_BOUNDS = [
  [6.0, 68.0],
  [37.5, 97.8]
];

/** Rough bounds for Western/Central Europe (covers our current Europe pins). */
const EUROPE_BOUNDS = [
  [34.5, -12.5],
  [61.5, 30.5]
];

/** Rough bounds for Mexico through southern South America + Caribbean. */
const AMERICAS_BOUNDS = [
  [-56.5, -125.0],
  [33.5, -34.0]
];

/** Single world copy: no horizontal wrap / jump (avoids duplicate continents at low zoom). */
const WORLD_BOUNDS = [
  [-85, -180],
  [85, 180]
];

function worldStyle(feature) {
  const name = feature.properties.name;
  const visited = visitedCountryNames.has(name);
  return {
    fillColor: visited ? '#8fd18f' : '#e6e8ea',
    // Avoid drawing borders for every unvisited country (keeps map from looking "grid-like").
    weight: visited ? 0.45 : 0,
    color: visited ? '#9aa5ad' : 'transparent',
    fillOpacity: 0.9
  };
}

function usStateStyle(feature) {
  const name = feature.properties.name;
  const visited = visitedStateNames.has(name);
  return {
    fillColor: visited ? '#8fd18f' : '#e6e8ea',
    weight: visited ? 0.35 : 0,
    color: visited ? '#9aa5ad' : 'transparent',
    fillOpacity: 0.9
  };
}

function indiaStateStyle(feature) {
  const name = feature.properties.name;
  const visited = visitedIndianStateNames.has(name);
  return {
    fillColor: visited ? '#8fd18f' : '#e6e8ea',
    weight: visited ? 0.35 : 0,
    color: visited ? '#9aa5ad' : 'transparent',
    fillOpacity: 0.9
  };
}

export function MyTravelMap({
  mapMode,
  onEnterUs,
  onEnterIndia,
  onEnterEurope,
  onEnterAmericas,
  onBackToWorld,
  onSelectPlace
}) {
  const pinIcon = useMemo(
    () =>
      L.divIcon({
        className: 'travel-map-pin',
        html:
          '<div class="travel-map-pin-inner"><div class="travel-map-pin-head"></div><div class="travel-map-pin-stem"></div></div>',
        iconSize: [14, 24],
        iconAnchor: [7, 24]
      }),
    []
  );

  const worldPins = useMemo(
    // World view shows both world stops and all US subplaces.
    () => places.filter((p) => p.worldMap || p.usMap),
    []
  );
  const usPins = useMemo(() => places.filter((p) => p.usMap), []);
  const indiaPins = useMemo(
    () => places.filter((p) => p.worldMap && p.countryCode === 'IN'),
    []
  );
  const europePins = useMemo(
    () =>
      places.filter(
        (p) =>
          p.worldMap &&
          (p.countryCode === 'BE' ||
            p.countryCode === 'FR' ||
            p.countryCode === 'NL' ||
            p.countryCode === 'GB' ||
            p.countryCode === 'GR')
      ),
    []
  );
  const americasPins = useMemo(
    () =>
      places.filter(
        (p) =>
          p.worldMap &&
          (p.countryCode === 'MX' ||
            p.countryCode === 'PA' ||
            p.countryCode === 'CR' ||
            p.countryCode === 'PE' ||
            p.countryCode === 'DO' ||
            p.countryCode === 'PR')
      ),
    []
  );

  const onEachWorldCountry = (feature, layer) => {
    layer.on({
      click: (e) => {
        L.DomEvent.stopPropagation(e);
        const name = feature.properties.name;
        if (name === 'United States of America') {
          onEnterUs();
        } else if (name === 'India') {
          onEnterIndia();
        } else if (
          name === 'Belgium' ||
          name === 'France' ||
          name === 'Netherlands' ||
          name === 'United Kingdom' ||
          name === 'Greece'
        ) {
          onEnterEurope();
        } else if (americasDrilldownCountryNames.has(name)) {
          onEnterAmericas();
        }
      }
    });
  };

  const markers =
    mapMode === 'world'
      ? worldPins
      : mapMode === 'usa'
        ? usPins
        : mapMode === 'india'
          ? indiaPins
          : mapMode === 'europe'
            ? europePins
            : americasPins;

  return (
    <div className="my-travel-map-shell">
      <div className="my-travel-map-toolbar">
        {mapMode === 'world' ? (
          <span className="my-travel-map-badge">World Map</span>
        ) : (
          <button
            type="button"
            className="btn btn-sm btn-secondary my-travel-back-btn"
            onClick={onBackToWorld}
          >
            Back to World
          </button>
        )}
      </div>
      {mapMode === 'world' ? (
        <MapContainer
          key="world"
          className="my-travel-leaflet"
          center={[18, 10]}
          zoom={2}
          minZoom={2}
          maxZoom={12}
          scrollWheelZoom
          zoomControl={false}
          maxBounds={WORLD_BOUNDS}
          maxBoundsViscosity={0.85}
        >
          <TileLayer
            attribution={CARTO_ATTRIBUTION}
            url={CARTO_VOYAGER_NOLABELS}
            noWrap
          />
          <GeoJSON
            data={worldCountriesGeoJsonForMap}
            style={worldStyle}
            onEachFeature={onEachWorldCountry}
          />
          {markers.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={pinIcon}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  if (place.countryCode === 'IN') {
                    onEnterIndia();
                    onSelectPlace(place);
                    return;
                  }
                  if (
                    place.countryCode === 'BE' ||
                    place.countryCode === 'FR' ||
                    place.countryCode === 'NL' ||
                    place.countryCode === 'GB' ||
                    place.countryCode === 'GR'
                  ) {
                    onEnterEurope();
                    onSelectPlace(place);
                    return;
                  }
                  if (
                    place.countryCode === 'MX' ||
                    place.countryCode === 'PA' ||
                    place.countryCode === 'CR' ||
                    place.countryCode === 'PE' ||
                    place.countryCode === 'DO' ||
                    place.countryCode === 'PR'
                  ) {
                    onEnterAmericas();
                    onSelectPlace(place);
                    return;
                  }
                  if (place.usMap) {
                    onEnterUs();
                    onSelectPlace(place);
                    return;
                  }
                  onSelectPlace(place);
                }
              }}
            />
          ))}
        </MapContainer>
      ) : mapMode === 'usa' ? (
        <MapContainer
          key="usa"
          className="my-travel-leaflet"
          bounds={US_BOUNDS}
          boundsOptions={{ padding: [16, 16] }}
          minZoom={3}
          maxZoom={12}
          scrollWheelZoom
          zoomControl={false}
        >
          <TileLayer
            attribution={CARTO_ATTRIBUTION}
            url={CARTO_VOYAGER_NOLABELS}
            noWrap
          />
          <GeoJSON data={usStatesGeoJson} style={usStateStyle} />
          {markers.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={pinIcon}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  onSelectPlace(place);
                }
              }}
            />
          ))}
        </MapContainer>
      ) : mapMode === 'india' ? (
        <MapContainer
          key="india"
          className="my-travel-leaflet"
          bounds={INDIA_BOUNDS}
          boundsOptions={{ padding: [16, 16] }}
          minZoom={4}
          maxZoom={12}
          scrollWheelZoom
          zoomControl={false}
        >
          <TileLayer
            attribution={CARTO_ATTRIBUTION}
            url={CARTO_VOYAGER_NOLABELS}
            noWrap
          />
          <GeoJSON data={indiaStatesGeoJson} style={indiaStateStyle} />
          {markers.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={pinIcon}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  onSelectPlace(place);
                }
              }}
            />
          ))}
        </MapContainer>
      ) : mapMode === 'europe' ? (
        <MapContainer
          key="europe"
          className="my-travel-leaflet"
          bounds={EUROPE_BOUNDS}
          boundsOptions={{ padding: [16, 16] }}
          minZoom={3}
          maxZoom={12}
          scrollWheelZoom
          zoomControl={false}
        >
          <TileLayer
            attribution={CARTO_ATTRIBUTION}
            url={CARTO_VOYAGER_NOLABELS}
            noWrap
          />
          <GeoJSON data={europeCountriesGeoJsonForMap} style={worldStyle} />
          {markers.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={pinIcon}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  onSelectPlace(place);
                }
              }}
            />
          ))}
        </MapContainer>
      ) : (
        <MapContainer
          key="americas"
          className="my-travel-leaflet"
          bounds={AMERICAS_BOUNDS}
          boundsOptions={{ padding: [16, 16] }}
          minZoom={3}
          maxZoom={12}
          scrollWheelZoom
          zoomControl={false}
        >
          <TileLayer
            attribution={CARTO_ATTRIBUTION}
            url={CARTO_VOYAGER_NOLABELS}
            noWrap
          />
          <GeoJSON data={americasCountriesGeoJsonForMap} style={worldStyle} />
          {markers.map((place) => (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={pinIcon}
              eventHandlers={{
                click: (e) => {
                  L.DomEvent.stopPropagation(e);
                  onSelectPlace(place);
                }
              }}
            />
          ))}
        </MapContainer>
      )}
    </div>
  );
}
