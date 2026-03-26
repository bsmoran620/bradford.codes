/**
 * Data-driven travel stops (lat/lng) and trip copy for My Travel.
 * worldMap: show pin on world view; usMap: show pin on US detail view.
 */

const WORLD_ONLY = [
  ['mont-tremblant-ca', 46.1184, -74.5962, 'Mont-Tremblant CA', 'CA'],
  ['montreal-ca', 45.5017, -73.5673, 'Montreal, Canada', 'CA'],
  ['ghent-be', 51.0543, 3.7174, 'Ghent, Belgium', 'BE'],
  ['bruges-be', 51.2093, 3.2247, 'Bruges, Belgium', 'BE'],
  ['antwerp-be', 51.2194, 4.4025, 'Antwerp, Belgium', 'BE'],
  ['paris-fr', 48.8566, 2.3522, 'Paris FR', 'FR'],
  ['amsterdam-nl', 52.3676, 4.9041, 'Amsterdam NL', 'NL'],
  ['london-gb', 51.5074, -0.1278, 'London, England', 'GB'],
  ['sanjuan-pr', 18.4655, -66.1057, 'San Juan Puerto Rico', 'PR'],
  ['santorini-gr', 36.3932, 25.4615, 'Santorini, Greece', 'GR'],
  ['milos-gr', 36.7282, 24.4279, 'Milos, Greece', 'GR'],
  ['athens-gr', 37.9838, 23.7275, 'Athens, Greece', 'GR'],
  ['panama-city-pa', 8.9824, -79.5199, 'Panama City, Panama', 'PA'],
  ['bocas-del-toro-pa', 9.3413, -82.2417, 'Bocas del Toro, Panama', 'PA'],
  ['san-jose-cr', 9.9281, -84.0907, 'San Jose, Costa Rica', 'CR'],
  ['la-fortuna-cr', 10.4719, -84.6447, 'La Fortuna, Costa Rica', 'CR'],
  ['tamarindo-cr', 10.2993, -85.8391, 'Tamarindo, Costa Rica', 'CR'],
  ['santa-teresa-cr', 9.6532, -85.1684, 'Santa Teresa, Costa Rica', 'CR'],
  ['tulum-mx', 20.2114, -87.4654, 'Tulum, Mexico', 'MX'],
  ['chichen-itza-mx', 20.6843, -88.5678, 'Chichen Itza, Mexico', 'MX'],
  ['puerto-malabrigo-pe', -8.0925, -79.1149, 'Puerto Malabrigo / Huanchaco (Trujillo), Peru', 'PE'],
  ['cusco-pe', -13.5319, -71.9675, 'Cusco, Peru', 'PE'],
  ['aguas-calientes-pe', -13.1547, -72.5254, 'Aguas Calientes, Peru', 'PE'],
  ['punta-cana-do', 18.5601, -68.3725, 'Punta Cana, Dominican Republic', 'DO'],
  ['la-romana-do', 18.4273, -68.965, 'La Romana, Dominican Republic', 'DO'],
  ['miches-do', 18.9836, -69.0466, 'Miches, Dominican Republic', 'DO'],
  ['bengaluru-in', 12.9716, 77.5946, 'Bengaluru, India', 'IN'],
  ['goa-in', 15.4909, 73.8278, 'Goa, India', 'IN'],
  ['mumbai-in', 19.076, 72.8777, 'Mumbai, India', 'IN'],
  ['udupi-in', 13.3409, 74.7421, 'Udupi, India', 'IN'],
  ['mysuru-in', 12.2958, 76.6394, 'Mysuru, India', 'IN'],
  ['mangaluru-in', 12.9141, 74.856, 'Mangaluru, India', 'IN'],
  ['coorg-in', 12.4244, 75.7382, 'Coorg (Madikeri), India', 'IN'],
  ['maui-hi', 20.7984, -156.3319, 'Maui, HI', 'US'],
  ['honolulu-hi', 21.3069, -157.8583, 'Honolulu, HI', 'US'],
  ['rincon-pr', 18.3402, -67.25, 'Rincon, Puerto Rico', 'PR'],
  ['aguadilla-pr', 18.4276, -67.1541, 'Aguadilla, Puerto Rico', 'PR'],
  ['mayaguez-pr', 18.2016, -67.1456, 'Mayaguez, Puerto Rico', 'PR'],
  ['ponce-pr', 18.0111, -66.6141, 'Ponce, Puerto Rico', 'PR'],
  ['luquillo-pr', 18.3725, -65.7166, 'Luquillo, Puerto Rico', 'PR'],
  ['doha-qa', 25.2854, 51.531, 'Doha, Qatar', 'QA']
];

const US_STOPS = [
  ['philadelphia-pa', 39.9526, -75.1652, 'Philadelphia PA'],
  ['baltimore-md', 39.2904, -76.6122, 'Baltimore MD'],
  ['statecollege-pa', 40.7934, -77.86, 'State College PA'],
  ['pittsburgh-pa', 40.4406, -79.9959, 'Pittsburgh PA'],
  ['oceancity-nj', 39.2776, -74.5746, 'Ocean City, Atlantic City NJ'],
  ['nyc-ny', 40.7128, -74.006, 'New York City NY'],
  ['longisland-ny', 40.7891, -73.135, 'Long Island NY'],
  ['orlando-fl', 28.5383, -81.3792, 'Orlando FL'],
  ['clearwater-fl', 27.9659, -82.8001, 'Clearwater FL'],
  ['keywest-fl', 24.5551, -81.78, 'Key West FL'],
  ['staugustine-fl', 29.8947, -81.3113, 'St. Augustine FL'],
  ['fortlauderdale-fl', 26.1224, -80.1373, 'Fort Lauderdale FL'],
  ['atlanta-ga', 33.749, -84.388, 'Atlanta GA'],
  ['savannah-ga', 32.0809, -81.0912, 'Savannah GA'],
  ['neworleans-la', 29.9511, -90.0715, 'New Orleans LA'],
  ['chicago-il', 41.8781, -87.6298, 'Chicago IL'],
  ['nashville-tn', 36.1627, -86.7816, 'Nashville TN'],
  ['lasvegas-nv', 36.1699, -115.1398, 'Las Vegas NV'],
  ['flagstaff-az', 35.1983, -111.6513, 'Flagstaff AZ'],
  ['phoenix-az', 33.4484, -112.074, 'Phoenix AZ'],
  ['sanfrancisco-ca', 37.7749, -122.4194, 'San Francisco, CA'],
  ['napa-ca', 38.2975, -122.2869, 'Napa, CA'],
  ['sonoma-ca', 38.2919, -122.458, 'Sonoma, CA'],
  ['laketahoe-ca', 39.0968, -120.0324, 'Lake Tahoe CA'],
  ['burlington-vt', 44.4759, -73.2121, 'Burlington VT'],
  ['laconia-nh', 43.5279, -71.4703, 'Laconia NH'],
  ['thousandislands-ny', 44.3362, -75.9242, 'Thousand Islands, Clayton, Alexandria Bay NY'],
  ['boston-ma', 42.3601, -71.0589, 'Boston MA'],
  ['bridgeport-ct', 41.1799, -73.1955, 'Bridgeport, CT'],
  ['orange-ct', 41.2784, -73.0257, 'Orange, CT'],
  ['newhaven-ct', 41.3083, -72.9279, 'New Haven, CT'],
  ['bearisland-nc', 35.6127, -82.7771, 'Bear Island NC'],
  ['hiltonhead-sc', 32.2163, -80.7526, 'Hilton Head SC'],
  ['houston-tx', 29.7604, -95.3698, 'Houston, Galveston TX'],
  ['denver-co', 39.7392, -104.9903, 'Denver, Colorado Springs CO'],
  ['saltlakecity-ut', 40.7608, -111.891, 'Salt Lake City, UT'],
  ['parkcity-ut', 40.6461, -111.498, 'Park City, UT'],
  ['jacksonhole-wy', 43.5828, -110.8229, 'Jackson Hole, WY'],
  ['islandpark-id', 44.6296, -111.3369, 'Island Park, Yellowstone ID'],
  ['bozeman-mt', 45.677, -111.0429, 'Bozeman MT'],
  ['wilmington-de', 39.7391, -75.5398, 'Wilmington DE'],
  ['losangeles-ca', 34.0522, -118.2437, 'Los Angeles, CA'],
  ['sanluisobispo-ca', 35.2828, -120.6596, 'San Luis Obispo, CA'],
  ['bigsur-ca', 36.2704, -121.8081, 'Big Sur, CA'],
  ['monterey-ca', 36.6002, -121.8947, 'Monterey, CA'],
  ['sandiego-ca', 32.7157, -117.1611, 'San Diego, CA'],
  ['joshuatree-ca', 34.1341, -116.315, 'Joshua Tree, CA'],
  ['reno-nv', 39.5296, -119.8138, 'Reno, NV'],
  ['albuquerque-nm', 35.0844, -106.6504, 'Albuquerque, NM'],
  ['santafe-nm', 35.687, -105.9378, 'Santa Fe, NM'],
  ['roswell-nm', 33.3943, -104.5239, 'Roswell, NM'],
  ['carlsbad-nm', 32.4207, -104.2288, 'Carlsbad, NM'],
  ['elpaso-tx', 31.7619, -106.485, 'El Paso, TX'],
  ['sanantonio-tx', 29.4241, -98.4936, 'San Antonio, TX'],
  ['batonrouge-la', 30.4515, -91.1871, 'Baton Rouge, LA'],
  ['miami-fl', 25.7617, -80.1918, 'Miami, FL'],
  ['westpalmbeach-fl', 26.7153, -80.0534, 'West Palm Beach, FL'],
  ['bainbridge-ga', 30.9038, -84.5755, 'Bainbridge, GA'],
  ['helen-ga', 34.701485, -83.731567, 'Helen, GA'],
  ['myrtlebeach-sc', 33.689, -78.887, 'Myrtle Beach, SC'],
  ['fayetteville-nc', 35.0526, -78.8784, 'Fayetteville, NC'],
  ['bunnlevel-nc', 35.3096063, -78.7802994, 'Bunnlevel, NC'],
  ['raleigh-nc', 35.7796, -78.6382, 'Raleigh, NC'],
  ['washington-dc', 38.9072, -77.0369, 'Washington, DC'],
  ['charlottesville-va', 38.0293, -78.4767, 'Charlottesville, VA'],
  ['shenandoah-va', 38.4863, -78.6193, 'Shenandoah, VA'],
  ['annapolis-md', 38.9784, -76.4922, 'Annapolis, MD'],
  ['cambridge-md', 38.5604, -76.0775, 'Cambridge, MD'],
  ['oceancity-md', 38.3365, -75.0849, 'Ocean City, MD'],
  ['asburypark-nj', 40.22039, -74.01208, 'Asbury Park, NJ'],
  ['montauk-ny', 41.03583, -71.95444, 'Montauk, NY'],
  ['coneyisland-ny', 40.575, -73.9825, 'Coney Island, NY'],
  ['fireisland-ny', 40.6476, -73.1459, 'Fire Island, NY'],
  ['newark-nj', 40.7356, -74.1722, 'Newark, NJ'],
  ['portsmouth-nh', 43.07704, -70.75766, 'Portsmouth, NH'],
  ['lakeplacid-ny', 44.2796, -73.982, 'Lake Placid, NY'],
  ['clayton-ny', 44.1753, -76.0711, 'Clayton, NY'],
  ['buffalo-ny', 42.8864, -78.8784, 'Buffalo, NY'],
  ['skaneateles-ny', 42.9413, -76.4237, 'Skaneateles, NY'],
  ['saratogasprings-ny', 43.0831, -73.7846, 'Saratoga Springs, NY'],
  ['louisville-ky', 38.25424, -85.75941, 'Louisville, KY'],
  ['cincinnati-oh', 39.1031182, -84.5120196, 'Cincinnati, OH'],
  ['columbus-oh', 39.96118, -82.99879, 'Columbus, OH'],
  ['traversacity-mi', 44.76306, -85.62063, 'Traverse City, MI'],
  ['mackinawcity-mi', 45.7778, -84.7266, 'Mackinaw City, MI'],
  ['crossvillage-mi', 45.6422, -85.0375, 'Cross Village, MI'],
  ['sedona-az', 34.8697, -111.7611, 'Sedona, AZ'],
  ['tucson-az', 32.22174, -110.92648, 'Tucson, AZ'],
  ['havasupai-az', 36.2344, -112.6865, 'Havasupai, AZ']
];

function buildWorldPlaces() {
  return WORLD_ONLY.map(([id, lat, lng, title, iso2]) => ({
    id,
    lat,
    lng,
    title,
    countryCode: iso2,
    tripId: id,
    worldMap: true,
    usMap: false
  }));
}

function buildUsPlaces() {
  return US_STOPS.map(([id, lat, lng, title]) => ({
    id,
    lat,
    lng,
    title,
    countryCode: 'US',
    tripId: id,
    worldMap: id === 'philadelphia-pa',
    usMap: true
  }));
}

export const places = [...buildWorldPlaces(), ...buildUsPlaces()];

export const visitedCountryNames = new Set([
  'United States of America',
  'Canada',
  'France',
  'Belgium',
  'Netherlands',
  'Puerto Rico',
  'Greece',
  'Panama',
  'Costa Rica',
  'Mexico',
  'Peru',
  // world-atlas uses "Dominican Rep."
  'Dominican Rep.',
  'India',
  'Qatar',
  'United Kingdom'
]);

/** US states that have at least one pin (choropleth on US view) */
export const visitedStateNames = new Set([
  'Pennsylvania',
  'Maryland',
  'New Jersey',
  'New York',
  'Florida',
  'Georgia',
  'Louisiana',
  'Illinois',
  'Tennessee',
  'Nevada',
  'Arizona',
  'Vermont',
  'New Hampshire',
  'Massachusetts',
  'Connecticut',
  'North Carolina',
  'South Carolina',
  'Texas',
  'Colorado',
  'Utah',
  'Wyoming',
  'Idaho',
  'Montana',
  'Delaware',
  'California',
  'New Mexico',
  'Virginia',
  'Kentucky',
  'Ohio',
  'Michigan',
  'District of Columbia'
]);

/** Indian states/UTs that have at least one pin (choropleth on India view) */
export const visitedIndianStateNames = new Set([
  'Karnataka',
  'Goa',
  'Maharashtra'
]);

/** Richer copy for selected stops; others use getTrip fallback */
const tripsById = {
  'paris-fr': {
    title: 'Paris, France',
    dateRange: 'Multiple visits',
    summary:
      'Art, cafés, and wandering the arrondissements. The Louvre and Montmartre never get old.',
    highlights: [
      'Sunset along the Seine',
      'Day trips by rail to nearby towns'
    ]
  },
  'amsterdam-nl': {
    title: 'Amsterdam, Netherlands',
    dateRange: '—',
    summary:
      'Canals, bikes, and museums. Easy city to explore on foot with great food along the way.',
    highlights: ['Canal ring walks', 'Dutch design and markets']
  },
  'ghent-be': {
    title: 'Ghent, Belgium',
    dateRange: '—',
    summary:
      'Canals, guildhalls, and a compact center — great on foot with strong food and beer culture.',
    highlights: ['Graslei / Korenlei', 'Medieval core']
  },
  'bruges-be': {
    title: 'Bruges, Belgium',
    dateRange: '—',
    summary:
      'Storybook canals and cobblestones — chocolate shops, bell towers, and slow strolls.',
    highlights: ['Historic center', 'Canals']
  },
  'antwerp-be': {
    title: 'Antwerp, Belgium',
    dateRange: '—',
    summary:
      'Port city energy with fashion, art, and diamonds — big squares and lively cafés.',
    highlights: ['Cathedral area', 'Old town']
  },
  'mont-tremblant-ca': {
    title: 'Mont-Tremblant, Quebec',
    dateRange: '—',
    summary:
      'Mountain town energy in every season — skiing in winter and hiking when the trails open up.',
    highlights: ['Laurentian scenery', 'Village strolls']
  },
  'sanjuan-pr': {
    title: 'San Juan, Puerto Rico',
    dateRange: '—',
    summary:
      'Old San Juan’s forts and colors, plus beaches nearby. Great mix of history and coast.',
    highlights: ['El Morro', 'Local food scene']
  },
  'philadelphia-pa': {
    title: 'Philadelphia, PA',
    dateRange: '—',
    summary:
      'History around every corner — Independence Hall, museums, and classic East Coast city energy.',
    highlights: ['Historic district', 'Museum row']
  },
  'chicago-il': {
    title: 'Chicago, IL',
    dateRange: '—',
    summary:
      'Architecture river tours, deep-dish debate, and lakefront miles in summer.',
    highlights: ['Skyline views', 'Neighborhood food']
  },
  'sanfrancisco-ca': {
    title: 'San Francisco, CA',
    dateRange: '—',
    summary:
      'City, fog, and neighborhoods — bridges, food, and easy day trips around the Bay.',
    highlights: ['Bay views', 'Neighborhood walks']
  }
};

export function getTrip(place) {
  const custom = tripsById[place.tripId];
  if (custom) {
    return { ...custom };
  }
  return {
    title: place.title,
    dateRange: null,
    summary: `Notes from ${place.title}: add your favorite moments, restaurants, and photos here.`,
    highlights: null
  };
}
