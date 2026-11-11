/**
 * Data-driven travel stops (lat/lng) and trip copy for My Travel.
 * TRIPS group stops by tripId. A stop may appear in multiple trips; `place.tripIds` lists them
 * (order follows TRIPS object order). `place.tripId` is the first trip id (compat).
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
  ['punta-cana-dr', 18.5601, -68.3725, 'Punta Cana, Dominican Republic', 'DO'],
  ['la-romana-dr', 18.4273, -68.965, 'La Romana, Dominican Republic', 'DO'],
  ['miches-dr', 18.9836, -69.0466, 'Miches, Dominican Republic', 'DO'],
  ['caye-caulker-bz', 17.742, -88.024, 'Caye Caulker, Belize', 'BZ'],
  ['ambergris-caye-bz', 17.9214, -87.9611, 'Ambergris Caye (San Pedro), Belize', 'BZ'],
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
  ['scottsdale-az', 33.4942, -111.9261, 'Scottsdale, AZ'],
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
  ['jupiter-fl', 26.9342, -80.0942, 'Jupiter, FL'],
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
  ['mackinacisland-mi', 45.7778, -84.7266, 'Mackinac Island, MI'],
  ['crossvillage-mi', 45.6422, -85.0375, 'Cross Village, MI'],
  ['pellston-mi', 45.5728, -84.7865, 'Pellston, MI'],
  ['petoskey-mi', 45.3206, -84.9514, 'Petoskey, MI'],
  ['sedona-az', 34.8697, -111.7611, 'Sedona, AZ'],
  ['tucson-az', 32.22174, -110.92648, 'Tucson, AZ'],
  ['havasupai-az', 36.2344, -112.6865, 'Havasupai, AZ'],
  ['dallas-tx', 32.7767, -96.797, 'Dallas, TX'],
  ['fortworth-tx', 32.7555, -97.3308, 'Fort Worth, TX'],
  ['waco-tx', 31.5493, -97.1467, 'Waco, TX'],
  ['deweybeach-de', 38.6926, -75.0749, 'Dewey Beach, DE']
];

/**
 * Trips group one or more stops (place ids). Clicking any stop shows this trip’s details.
 * S3 / CloudFront: images at {tripId}/{filename}. Optional `photoIds` lists filenames for the gallery.
 */
const TRIPS = {
  'boston-2014': {
    stopIds: ['boston-ma', 'nyc-ny'],
    title: 'Boston 2014',
    dateRange: 'June 2014',
    summary: 'Boston Hackathon for work',
    highlights: ['Katz Deli - NYC', 'Beacon Hill - Boston', 'Cheers Bar - Boston']
  },
  'arizona-2015': {
    stopIds: ['sedona-az', 'flagstaff-az', 'scottsdale-az', 'phoenix-az', 'tucson-az'],
    title: 'Arizona 2015',
    dateRange: 'August 2015',
    summary: 'Arizona road trip to Flagstaff, Sedona, Scottsdale, Phoenix, and Tucson to visit my brother',
    highlights: ['Sedona Jeep Tour', 'Boulder Golf & Spa Scottsdale Resort', 'Taliesin West - Frank Lloyd Wright'],
    photoIds: [
      'az-boulders.JPG',
      'az-sedona-jeep.JPG',
      'az-sedona1.JPG',
      'az-sedona2.JPG',
      'az-sedona3.JPG',
      'az-sedona4.JPG',
      'az-taliest-west.JPG'
    ]
  },
  'utah-2016': {
    stopIds: ['saltlakecity-ut', 'parkcity-ut'],
    title: 'Utah 2016',
    dateRange: 'August 2016',
    summary: 'Work trip to Salt Lake City conference and Mountain Bike',
    highlights: ['Mountain Bike Park City'],
    photoIds: [
      'ut-bike.JPG'
    ]
  },
  'new-orleans-2017': {
    stopIds: ['neworleans-la', 'batonrouge-la'],
    title: 'New Orleans 2017',
    dateRange: '2017',
    summary: 'New Orleans for Mardi Gras and side trip to Baton Rouge',
    highlights: ['Mardi Gras', 'Crocodile Bayou Tour', 'Haunted History Tour', 'Nottoway Plantation'],
    photoIds: [
      'baton-rouge.jpeg',
      'nola-american-queen.jpeg',
      'nola-crocs.jpeg',
      'nola-float.jpeg',
      'nola-haunted1.jpeg',
      'nola-haunted2.jpeg',
      'nola-omni.jpeg',
      'nola-sanchez.jpeg',
      'nola-trees.jpeg',
      'nottoway1.jpeg',
      'nottoway2.jpeg',
      'plantation-trees.jpeg'
    ]
  },
  'florida-2017': {
    stopIds: ['orlando-fl', 'staugustine-fl', 'jupiter-fl'],
    title: 'Florida 2017',
    dateRange: '2017',
    summary: 'Road trip from Orlando to St. Augustine.',
    highlights: ['Jupiter Lighthouse'],
    photoIds: [
      'fl-jupiter-lighthouse.jpeg',
      'fl-trees1.jpeg',
      'fl-trees2.jpeg'
    ]
  },
  'arizona-2017': {
    stopIds: ['scottsdale-az', 'phoenix-az', 'lasvegas-nv'],
    title: 'Arizona and Vegas 2017',
    dateRange: '2017',
    summary: 'Road trip from Vegas to Phoenix to visit my brother',
    highlights: ['Joel Robuchon - Vegas', 'Camelback Hike - Phoenix', 'Grand Canyon', 'Meteor Crater'],
    photoIds: [
      'camelback-hike1.jpeg',
      'grand-canyon1.jpeg',
      'grand-canyon2.jpeg',
      'grand-canyon3.jpeg',
      'grand-canyon4.jpeg',
      'grand-canyon5.jpeg',
      'meteor-crater.jpeg',
      'camelback-hike2.jpeg',
      'vegas-restaurant1.jpeg',
      'vegas-restaurant2.jpeg'
    ]
  },
  'georgia-2018': {
    stopIds: ['atlanta-ga', 'helen-ga'],
    title: 'Georgia 2018',
    dateRange: '2018',
    summary: 'Georgia road trip from Atlanta to Helen',
    highlights: ['Coke Museum', 'Atlanta Aquarium', 'Helen', 'Zoo'],
    photoIds: [
      'helen-hike.jpeg',
      'atlanta.jpeg',
      'maddie.jpeg'
    ]
  },
  'california-2018': {
    stopIds: ['sanfrancisco-ca', 'napa-ca'],
    title: 'California 2018',
    dateRange: '2018',
    summary: 'California road trip to San Francisco and Napa',
    highlights: ['San Francisco', 'Napa', 'Sausalito', 'Muir Woods', 'Muir Beach'],
    photoIds: [
      'napa1.jpeg',
      'napa5.jpeg',
      'napa7.jpeg',
      'napa2.jpeg',
      'napa3.jpeg',
      'napa4.jpeg',
      'napa6.jpeg',
      'san-francisco1.jpeg',
      'san-francisco2.jpeg',
      'winchester.jpeg'
    ]
  },
  'france-2019': {
    stopIds: ['paris-fr'],
    title: 'France 2019',
    dateRange: 'February 2019',
    summary: 'Trip to Paris and surrounding countryside',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Versailles', 'Notre Dame', 'Sacre Coeur', 'Sainte Chapelle', 'Rodin Garden', 'Catacombes de Paris', 'Castle Tour'],
    photoIds: [
      'chateau-chenonceau2.jpeg',
      'chateau-chenonceau3.jpeg',
      'louvre3.jpeg',
      'notre-dame3.jpeg',
      'eifel3.jpeg',
      'arc-de-triomphe.jpeg',
      'catacomb1.jpeg',
      'catacomb2.jpeg',
      'catacomb3.jpeg',
      'champs-elysses.jpeg',
      'chateau-amboise1.jpeg',
      'chateau-amboise2.jpeg',
      'chateau-amboise3.jpeg',
      'chateau-amboise4.jpeg',
      'chateau-chambord1.jpeg',
      'chateau-chambord2.jpeg',
      'chateau-chambord3.jpeg',
      'chateau-chambord4.jpeg',
      'chateau-chenonceau1.jpeg',
      'chateau-chenonceau4.jpeg',
      'eifel1.jpeg',
      'eifel2.jpeg',
      'eifel4.jpeg',
      'louvre1.jpeg',
      'louvre2.jpeg',
      'louvre4.jpeg',
      'louvre5.jpeg',
      'moulin-rouge.jpeg',
      'notre-dame1.jpeg',
      'notre-dame2.jpeg',
      'notre-dame4.jpeg',
      'rodin-garden.jpeg',
      'sacre-couer.jpeg',
      'sainte-chapelle.jpeg',
      'versaille.jpeg'
    ]
  },
  // 'tennessee-2019': {
  // },
  // 'california-2019': {
  // },
  // 'netherlands-2019': {
  // },
  // 'utah-2021': {
  //},
  // 'long-island-2021': {
  // },
  // 'savannah-2021': {
  // },
  // 'houston-2022': {
  // },
  // 'north-carolina-2022': {
  // },
  // 'yellowstone-2022': {
  // },
  // 'denver-2022': {
  // },
  // 'california-2023': {
  // },
  // 'shenandoah-2023': {
  // },
  // 'nyc-2023': {
  // },
  // 'kentucky-2023': {
  // },
  // 'new-mexico/havasupai-2023': {
  // },
  // 'panama/costa-rica-2024': {
  // },
  // 'florida-2024': {
  // },
  // 'california-2024': {
  // },
  // 'montreal-2024': {
  // },
  // 'hawaii-2024': {
  // },
  // 'peru-2024': {
  // },
  'greece-2025': {
    stopIds: ['santorini-gr', 'milos-gr', 'athens-gr'],
    title: 'Greece 2025',
    dateRange: 'April 2025',
    summary: 'Island hopping in Greece between Santorini, Milos, and then mainland Athens',
    highlights: ['Oia - Santorini', 'Santo Wines - Santorini', 'Klima Fishing Village - Milos', 'Sarakiniko - Milos', 'Pollonia - Milos', 'Yialos Restaurant- Milos', 'Firiplakas - Milos', 'Tsigrados Beach - Milos', 'Kleftiko - Milos', 'Plaka - Milos', 'Medusa Restaurant - Milos', 'Acropolis - Athens'],
    photoIds: [
      'milos3.jpeg',
      'milos9.jpeg',
      'milos51.jpeg',
      'milos39.jpeg',
      'milos40.jpeg',
      'milos37.jpeg',
      'milos48.jpeg',
      'milos28.jpeg',
      'milos16.jpeg',
      'athens16.jpeg',
      'athens1.jpeg',
      'athens2.jpeg',
      'athens3.jpeg',
      'athens4.jpeg',
      'athens5.jpeg',
      'athens6.jpeg',
      'athens7.jpeg',
      'athens8.jpeg',
      'athens9.jpeg',
      'athens10.jpeg',
      'athens11.jpeg',
      'athens12.jpeg',
      'athens13.jpeg',
      'athens14.jpeg',
      'athens15.jpeg',
      'athens17.jpeg',
      'athens18.jpeg',
      'athens19.jpeg',
      'athens20.jpeg',
      'athens21.jpeg',
      'athens22.jpeg',
      'athens23.jpeg',
      'athens24.jpeg',
      'athens25.jpeg',
      'athens26.jpeg',
      'athens27.jpeg',
      'milos1.jpeg',
      'milos2.jpeg',
      'milos4.jpeg',
      'milos5.jpeg',
      'milos6.jpeg',
      'milos7.jpeg',
      'milos8.jpeg',
      'milos10.jpeg',
      'milos11.jpeg',
      'milos12.jpeg',
      'milos13.jpeg',
      'milos14.jpeg',
      'milos15.jpeg',
      'milos17.jpeg',
      'milos18.jpeg',
      'milos19.jpeg',
      'milos20.jpeg',
      'milos21.jpeg',
      'milos22.jpeg',
      'milos23.jpeg',
      'milos24.jpeg',
      'milos25.jpeg',
      'milos26.jpeg',
      'milos27.jpeg',
      'milos29.jpeg',
      'milos30.jpeg',
      'milos31.jpeg',
      'milos32.jpeg',
      'milos33.jpeg',
      'milos34.jpeg',
      'milos35.jpeg',
      'milos36.jpeg',
      'milos38.jpeg',
      'milos41.jpeg',
      'milos42.jpeg',
      'milos43.jpeg',
      'milos44.jpeg',
      'milos45.jpeg',
      'milos46.jpeg',
      'milos49.jpeg',
      'milos50.jpeg',
      'milos52.jpeg',
      'milos53.jpeg',
      'milos54.jpeg',
      'santorini1.jpeg',
      'santorini2.jpeg',
      'santorini3.jpeg',
      'santorini4.jpeg',
      'santorini5.jpeg',
      'santorini7.jpeg',
      'santorini8.jpeg',
      'santorini9.jpeg',
      'santorini10.jpeg',
      'santorini11.jpeg',
      'santorini12.jpeg',
      'santorini13.jpeg',
      'santorini14.jpeg',
      'santorini15.jpeg'
    ]
  },
  'puerto-rico-2024': {
    stopIds: ['rincon-pr', 'aguadilla-pr', 'mayaguez-pr', 'ponce-pr'],
    title: 'Puerto Rico 2024',
    dateRange: 'December 2024',
    summary: 'Solo Surfing Trip to Puerto Rico - Visiting the West Coast of Puerto Rico for the first time - falling in love with Rincon',
    highlights: ['Rincon', 'Aguadilla'],
    photoIds: [
      'rincon1.jpeg',
      'rincon2.jpeg',
      'rincon3.jpeg',
      'rincon4.jpeg',
      'rincon5.jpeg',
      'rincon6.jpeg',
      'rincon7.jpeg',
      'rincon8.jpeg',
      'rincon9.jpeg',
      'rincon10.jpeg',
      'rincon11.jpeg',
      'rincon12.jpeg',
      'rincon13.jpeg',
      'rincon14.jpeg',
      'rincon15.jpeg',
      'rincon16.jpeg',
      'rincon17.jpeg',
      'rincon18.jpeg',
      'rincon19.jpeg',
      'rincon20.jpeg',
      'rincon21.jpeg',
      'rincon22.jpeg',
      'rincon23.jpeg',
      'rincon24.jpeg',
      'rincon25.jpeg',
      'rincon26.jpeg',
      'rincon27.jpeg',
      'rincon28.jpeg',
      'rincon29.jpeg'
    ]
  },
  'michigan-2025': {
    stopIds: ['crossvillage-mi', 'petoskey-mi', 'pellston-mi', 'mackinacisland-mi'],
    title: 'Michigan 2025',
    dateRange: 'July 2025',
    summary: 'Visiting Michigan\'s Upper Peninsula and Mackinac Island',
    highlights: ['Tunnel of Trees', 'Macinac Island'],
    photoIds: [
      'cross-village1.jpeg',
      'cross-village2.jpeg',
      'cross-village3.jpeg',
      'cross-village4.jpeg',
      'mackinaw1.jpeg',
      'mackinaw2.jpeg',
      'mackinaw3.jpeg',
      'mackinaw4.jpeg'
    ]
  },
  'india-2025': {
    stopIds: [
      'bengaluru-in',
      'goa-in',
      'mumbai-in',
      'udupi-in',
      'mysuru-in',
      'mangaluru-in',
      'coorg-in',
      'doha-qa'
    ],
    title: 'India 2025',
    dateRange: 'September 2025',
    summary:
      'First India run — Karnataka coast and cities, Goa, and Mumbai. Temples, food, and meeting people.',
    highlights: ['Mysuru Palace Elephant Parade', 'Coorg Waterfalls', 'Nagarhole Tiger Reserve', 'Hotel Mumbai', 'Ganesha Festival', 'Doha Airport Layover'],
    photoIds: [
      'bengaluru-temple.jpeg',
      'bengaluru-farm.jpeg',
      'bengaluru-mansion.jpeg',
      'bengaluru_castle.jpeg',
      'dosa.jpeg',
      'mysuru_elephants.jpeg',
      'mysuru_market.jpeg',
      'coorg_waterfall.jpeg',
      'coorg_jeeps.jpeg',
      'toddy_stall.jpeg',
      'temple_shiva.jpeg',
      'temple_beach.jpeg',
      'goa_beach.jpeg',
      'hotel_mumbai.jpeg',
      'mumbai_hilton.jpeg',
      'mumbai_monkeys.jpeg',
      'mumbai_street.jpeg'
    ],
  },
  'mexico-2025': {
    stopIds: ['tulum-mx', 'chichen-itza-mx'],
    title: 'Mexico 2025',
    dateRange: 'October 2025',
    summary: 'All Inclusive in Tulum and quick trip to Chichen Itza',
    highlights: ['Chichen Itza', 'Suntun Cenote', 'Scuba Diving a Cenote'],
    photoIds: [
      'chichen-itza1.jpeg',
      'chichen-itza2.jpeg',
      'suytun-cenote1.jpeg',
      'suytun-cenote2.jpeg',
      'suytun-cenote3.jpeg',
      'suytun-cenote4.jpeg',
      'suytun-cenote5.jpeg',
      'tulum1.jpeg',
      'tulum2.jpeg',
      'tulum3.jpeg',
      'tulum4.jpeg',
      'tulum6.jpeg',
      'tulum7.jpeg',
      'tulum8.jpeg',
      'tulum9.jpeg',
      'tulum10.jpeg',
      'tulum11.jpeg',
      'tulum12.jpeg',
      'tulum13.jpeg'
    ]
  },
  'puerto-rico-2025': {
    stopIds: ['sanjuan-pr', 'rincon-pr', 'aguadilla-pr', 'mayaguez-pr', 'luquillo-pr'],
    title: 'Puerto Rico 2025',
    dateRange: 'November 2025',
    summary: 'Revisiting Rincon with a friend and meeting other friends in San Juan',
    highlights: ['El Yunque National Forest', 'Luquillo Beach', 'Old San Juan', 'Mayaguez Indios Baseball'],
    photoIds: [
      'mayaguez.jpeg',
      'rincon.jpeg',
      'rincon2.jpeg',
      'rincon3.jpeg',
      'rincon4.jpeg',
      'rincon5.jpeg',
      'rincon6.jpeg',
      'rincon7.jpeg',
      'rincon8.jpeg',
      'rincon9.jpeg',
      'rincon10.jpeg',
      'rincon11.jpeg',
      'rincon12.jpeg',
      'sanjuan1.jpeg',
      'sanjuan2.jpeg',
      'sanjuan3.jpeg',
      'sanjuan4.jpeg',
      'sanjuan5.jpeg',
      'sanjuan6.jpeg',
      'sanjuan7.jpeg',
      'sanjuan8.jpeg',
      'sanjuan9.jpeg',
      'sanjuan11.jpeg'
    ]
  },
  'dominican-republic-2025': {
    stopIds: ['punta-cana-dr', 'la-romana-dr', 'miches-dr'],
    title: 'Dominican Republic 2025',
    dateRange: 'December 2025',
    summary: 'Road Trip through Dominican Republic to Punta Cana, La Romana, and Miches',
    highlights: ['Scuba Diving Isla Catalina', 'Zemi Miches'],
    photoIds: [
      'miches2.jpeg',
      'miches5.jpeg',
      'laromana5.jpeg',
      'miches6.jpeg',
      'miches8.jpeg',
      'laromana1.jpeg',
      'laromana2.jpeg',
      'laromana3.jpeg',
      'laromana7.jpeg',
      'miches1.jpeg',
      'miches3.jpeg',
      'miches4.jpeg',
      'miches7.jpeg',
      'punta-cana.jpeg'
    ]
  },
  'buffalo-2025': {
    stopIds: ['buffalo-ny'],
    title: 'Buffalo 2025',
    dateRange: 'December 2025',
    summary: 'Trip to Buffalo, New York',
    photoIds: [
    ]
  },
  'mont-tremblant-2026': {
    stopIds: ['mont-tremblant-ca', 'montreal-ca'],
    title: 'Mont Tremblant 2026',
    dateRange: 'January 2026',
    summary: 'Skiing in Mont Tremblant and stopping inMontreal',
    photoIds: [
      'monttremblant1.jpeg',
      'monttremblant2.jpeg',
      'monttremblant3.jpeg',
      'monttremblant4.jpeg',
      'monttremblant5.jpeg',
      'monttremblant6.jpeg'
    ]
  },
  'puerto-rico-2026': {
    stopIds: ['rincon-pr', 'aguadilla-pr'],
    title: 'Puerto Rico 2026',
    dateRange: 'February 2026',
    summary: 'Revisiting Rincon and Aguadilla',
    highlights: ['Rincon', 'Aguadilla'],
    photoIds: [
      'rincon1.jpeg',
      'rincon2.jpeg',
      'rincon3.jpeg'
    ]
  },
  'vermont-2026': {
    stopIds: ['burlington-vt'],
    title: 'Vermont 2026',
    dateRange: 'March 2026',
    summary: 'Ski Trip to Vermont',
    highlights: ['Burlington', 'Jay Peak Waterpark'],
  },
  'belize-2026': {
    stopIds: ['caye-caulker-bz', 'ambergris-caye-bz'],
    title: 'Belize 2026',
    dateRange: 'April 2026',
    summary: 'Island trip to Belize visiting Caye Caulker and Ambergris Caye',
    photoIds: [
    ]
  },
  'texas-2026': {
    stopIds: ['dallas-tx', 'fortworth-tx', 'waco-tx'],
    title: 'Texas 2026',
    dateRange: 'May 2026',
    summary: 'Texas trip to Dallas, Fort Worth, and Waco',
    photoIds: [
    ]
  },
  'dewey-beach-2026': {
    stopIds: ['deweybeach-de'],
    title: 'Dewey Beach 2026',
    dateRange: 'July 2026',
    summary: 'Beach trip to Dewey Beach, Delaware',
    photoIds: [
    ]
  },
  'san-diego-2026': {
    stopIds: ['sandiego-ca'],
    title: 'San Diego 2026',
    dateRange: 'September 2026',
    summary: 'Trip to San Diego, California',
    photoIds: [
    ]
  },






  'europe-2020': {
    stopIds: ['ghent-be', 'bruges-be', 'antwerp-be'],
    title: 'Belgium',
    dateRange: '—',
    summary:
      'Ghent, Bruges, and Antwerp in one loop — canals, guildhalls, chocolate, and Flemish cities made for walking.',
    highlights: [
      'Ghent: Graslei and medieval core',
      'Bruges: storybook canals and cobbles',
      'Antwerp: cathedral, old town, port-city energy'
    ]
  },
  'quebec-ca': {
    stopIds: ['mont-tremblant-ca', 'montreal-ca'],
    title: 'Quebec, Canada',
    dateRange: '—',
    summary:
      'Mont-Tremblant’s mountain village and Montreal’s food and festival energy — Laurentian scenery plus city life.',
    highlights: ['Mountain trails / skiing', 'Montreal neighborhoods and dining']
  },
  'panama-pa': {
    stopIds: ['panama-city-pa', 'bocas-del-toro-pa'],
    title: 'Panama',
    dateRange: '—',
    summary: 'Canal-city skyline and Caribbean islands — city energy plus slow Bocas time.',
    highlights: ['Panama City', 'Bocas del Toro']
  },
  'costa-rica-cr': {
    stopIds: ['san-jose-cr', 'la-fortuna-cr', 'tamarindo-cr', 'santa-teresa-cr'],
    title: 'Costa Rica',
    dateRange: '—',
    summary:
      'Volcano country, cloud forests, and two coasts — wildlife, surf towns, and pura vida pace.',
    highlights: ['La Fortuna / Arenal', 'Pacific beaches']
  },
  'peru-pe': {
    stopIds: ['puerto-malabrigo-pe', 'cusco-pe', 'aguas-calientes-pe'],
    title: 'Peru',
    dateRange: '—',
    summary: 'Northern coast, highland Cusco, and the Sacred Valley approach to Machu Picchu.',
    highlights: ['Huanchaco / Trujillo coast', 'Cusco', 'Aguas Calientes / Machu Picchu']
  },
  'hawaii-us': {
    stopIds: ['maui-hi', 'honolulu-hi'],
    title: 'Hawaii',
    dateRange: '—',
    summary: 'Maui and Oʻahu — volcanoes, road trips, and city-beach mix.',
    highlights: ['Maui', 'Honolulu / Oʻahu']
  },
  'amsterdam-nl': {
    stopIds: ['amsterdam-nl'],
    title: 'Amsterdam, Netherlands',
    dateRange: '—',
    summary:
      'Canals, bikes, and museums. Easy city to explore on foot with great food along the way.',
    highlights: ['Canal ring walks', 'Dutch design and markets']
  },
  'london-gb': {
    stopIds: ['london-gb'],
    title: 'London, England',
    dateRange: '—',
    summary:
      'Museums, neighborhoods, and Thames-side walks — classic pubs and easy day trips out of the city.',
    highlights: null
  },
  'philadelphia-pa': {
    stopIds: ['philadelphia-pa'],
    title: 'Philadelphia, PA',
    dateRange: '—',
    summary:
      'History around every corner — Independence Hall, museums, and classic East Coast city energy.',
    highlights: ['Historic district', 'Museum row']
  },
};

/** All trip ids that include this stop id (TRIPS declaration order; no duplicates). */
const stopToTripIds = new Map();
for (const [tripId, trip] of Object.entries(TRIPS)) {
  for (const sid of trip.stopIds) {
    if (!stopToTripIds.has(sid)) stopToTripIds.set(sid, []);
    const list = stopToTripIds.get(sid);
    if (!list.includes(tripId)) list.push(tripId);
  }
}

function tripIdsForStop(stopId) {
  return stopToTripIds.get(stopId) ?? [];
}

function buildWorldPlaces() {
  return WORLD_ONLY.map(([id, lat, lng, title, iso2]) => {
    const tripIds = tripIdsForStop(id);
    return {
      id,
      lat,
      lng,
      title,
      countryCode: iso2,
      tripIds,
      tripId: tripIds[0] ?? id,
      worldMap: true,
      usMap: false
    };
  });
}

function buildUsPlaces() {
  return US_STOPS.map(([id, lat, lng, title]) => {
    const tripIds = tripIdsForStop(id);
    return {
      id,
      lat,
      lng,
      title,
      countryCode: 'US',
      tripIds,
      tripId: tripIds[0] ?? id,
      worldMap: id === 'philadelphia-pa',
      usMap: true
    };
  });
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
  'Belize',
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

/** Stop ids belonging to a trip. */
export function getStopIdsForTrip(tripId) {
  const t = TRIPS[tripId];
  if (t) return [...t.stopIds];
  return [tripId];
}

/** Trip ids for this map pin (multiple if the stop appears in more than one TRIPS entry). */
export function getTripIdsForPlace(place) {
  if (Array.isArray(place.tripIds) && place.tripIds.length > 0) return place.tripIds;
  if (place.tripId != null && place.tripId !== '') return [place.tripId];
  return [place.id];
}

/** Short label for trip switcher tabs (TRIPS title, or the id). */
export function getTripTitle(tripId) {
  const t = TRIPS[tripId];
  return t?.title ?? tripId;
}

/**
 * Resolved trip copy and gallery ids for a place. If `activeTripId` is set, it must be one of
 * `getTripIdsForPlace(place)`; otherwise the first trip id is used.
 */
export function getTrip(place, activeTripId) {
  const candidates = getTripIdsForPlace(place);
  const tripId =
    activeTripId && candidates.includes(activeTripId) ? activeTripId : candidates[0];
  const trip = TRIPS[tripId];
  if (trip) {
    const { stopIds, photoIds = [], ...detail } = trip;
    return {
      ...detail,
      tripId,
      photoIds: Array.isArray(photoIds) ? photoIds : [],
      selectedStopTitle: place.title,
      stopsOnTrip: stopIds.length
    };
  }
  return {
    tripId,
    title: place.title,
    dateRange: null,
    summary: `Notes from ${place.title}: add your favorite moments, restaurants, and photos here.`,
    highlights: null,
    photoIds: [],
    selectedStopTitle: place.title,
    stopsOnTrip: 1
  };
}

const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

/** Sortable yyyymm from a dateRange like 'September 2026' or '2017' (last year/month wins); null if undated. */
function dateRangeSortKey(dateRange) {
  const years = (dateRange ?? '').match(/\b(19|20)\d{2}\b/g);
  if (!years) return null;
  const months = dateRange.toLowerCase().match(new RegExp(`\\b(${MONTHS.join('|')})\\b`, 'g'));
  const month = months ? MONTHS.indexOf(months[months.length - 1]) + 1 : 0;
  return Number(years[years.length - 1]) * 100 + month;
}

/** Most recent dated trip that has photos (for the home page), or null. */
export function getRecentTripWithPhotos() {
  let best = null;
  for (const [tripId, trip] of Object.entries(TRIPS)) {
    if (!Array.isArray(trip.photoIds) || trip.photoIds.length === 0) continue;
    const key = dateRangeSortKey(trip.dateRange);
    if (key == null || (best && key <= best.key)) continue;
    best = { key, tripId, trip };
  }
  if (!best) return null;
  const { title, dateRange, summary, photoIds } = best.trip;
  return { tripId: best.tripId, title, dateRange, summary, photoIds };
}

/** Headline numbers for the home page travel card. */
export function getTravelStats() {
  return {
    trips: Object.keys(TRIPS).length,
    countries: visitedCountryNames.size,
    places: places.length
  };
}
