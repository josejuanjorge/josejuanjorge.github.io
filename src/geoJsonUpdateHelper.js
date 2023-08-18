const geojson = require('./data/counties.json');

const pResUnitList = [
  { name: 'Albany', p_res_unit_num:  3167},
{ name: 'Bronx', p_res_unit_num:  24199},
{ name: 'Broome', p_res_unit_num:  1255},
{ name: 'Cattaraugus', p_res_unit_num:  99},
{ name: 'Cayuga', p_res_unit_num:  744},
{ name: 'Chautauqua', p_res_unit_num:  999},
{ name: 'Chemung', p_res_unit_num:  484},
{ name: 'Chenango', p_res_unit_num:  188},
{ name: 'Clinton', p_res_unit_num:  284},
{ name: 'Columbia', p_res_unit_num:  426},
{ name: 'Cortland', p_res_unit_num:  260},
{ name: 'Delaware', p_res_unit_num:  158},
{ name: 'Dutchess', p_res_unit_num:  1533},
{ name: 'Erie', p_res_unit_num:  8169},
{ name: 'Essex', p_res_unit_num:  181},
{ name: 'Franklin', p_res_unit_num:  186},
{ name: 'Fulton', p_res_unit_num:  167},
{ name: 'Genesee', p_res_unit_num:  193},
{ name: 'Greene', p_res_unit_num:  100},
{ name: 'Hamilton', p_res_unit_num:  16},
{ name: 'Herkimer', p_res_unit_num:  405},
{ name: 'Jefferson', p_res_unit_num:  1029},
{ name: 'Kings', p_res_unit_num:  30246},
{ name: 'Lewis', p_res_unit_num:  120},
{ name: 'Livingston', p_res_unit_num:  279},
{ name: 'Madison', p_res_unit_num:  243},
{ name: 'Monroe', p_res_unit_num:  7739},
{ name: 'Montgomery', p_res_unit_num:  751},
{ name: 'Nassau', p_res_unit_num:  3372},
{ name: 'New York', p_res_unit_num:  47390},
{ name: 'Niagara', p_res_unit_num:  1330},
{ name: 'Oneida', p_res_unit_num:  2596},
{ name: 'Onondaga', p_res_unit_num:  4976},
{ name: 'Ontario', p_res_unit_num:  1091},
{ name: 'Orange', p_res_unit_num:  1581},
{ name: 'Orleans', p_res_unit_num:  126},
{ name: 'Oswego', p_res_unit_num:  504},
{ name: 'Otsego', p_res_unit_num:  82},
{ name: 'Putnam', p_res_unit_num:  64},
{ name: 'Queens', p_res_unit_num:  7168},
{ name: 'Rensselaer', p_res_unit_num:  1333},
{ name: 'Richmond', p_res_unit_num:  4007},
{ name: 'Rockland', p_res_unit_num:  2235},
{ name: 'Saratoga', p_res_unit_num:  986},
{ name: 'Schenectady', p_res_unit_num:  1253},
{ name: 'Schoharie', p_res_unit_num:  40},
{ name: 'Schuyler', p_res_unit_num:  80},
{ name: 'Seneca', p_res_unit_num:  86},
{ name: 'St Lawrence', p_res_unit_num:  349},
{ name: 'Steuben', p_res_unit_num:  767},
{ name: 'Suffolk', p_res_unit_num:  3845},
{ name: 'Sullivan', p_res_unit_num:  847},
{ name: 'Tioga', p_res_unit_num:  158},
{ name: 'Tompkins', p_res_unit_num:  380},
{ name: 'Ulster', p_res_unit_num:  932},
{ name: 'Warren', p_res_unit_num:  680},
{ name: 'Washington', p_res_unit_num:  82},
{ name: 'Wayne', p_res_unit_num:  542},
{ name: 'Westchester', p_res_unit_num:  11551},
{ name: 'Wyoming', p_res_unit_num:  36},
{ name: 'Yates', p_res_unit_num:  103},
];

// Update geojson properties with p_res_unit_num
const geometries = geojson.objects.cb_2015_new_york_county_20m.geometries;

geometries.forEach(geometry => {
  const name = geometry.properties.NAME;
  const matchingObject = pResUnitList.find(item => item.name === name);
  if (matchingObject) {
    geometry.properties.p_res_unit_num = matchingObject.p_res_unit_num;
  }
});

const fs = require('fs'); // Import the 'fs' module to work with files

// ... Code for importing geojson and pResUnitList ...

// ... Code for updating the geojson properties ...

// Define the path and filename for the output file
const outputPath = './data/counties_units.json';

// Convert the modified geojson object to a JSON string
const updatedGeojsonString = JSON.stringify(geojson, null, 2);

// Write the JSON string to the output file
fs.writeFile(outputPath, updatedGeojsonString, 'utf8', err => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File saved successfully:', outputPath);
  }
});