//USE: filters the NYC zip codes and assign data to the zip codes with spending values === 0

const geojson = require('./data/ny_new_york_zip_codes_geo_spending.json');

const pResUnitList = [{zipCode: '10001', spending: 20456127.5566016},
{zipCode: '10002', spending: 7475055.52424835},
{zipCode: '10009', spending: 8167865.54844698},
{zipCode: '10010', spending: 10538005.104916},
{zipCode: '10011', spending: 1093910.56452415},
{zipCode: '10017', spending: 15642921.0726953},
{zipCode: '10018', spending: 30009613.1534458},
{zipCode: '10019', spending: 66218052.8391951},
{zipCode: '10023', spending: 9407630.85490768},
{zipCode: '10035', spending: 8496038.71780422},
{zipCode: '10036', spending: 13673882.0565519},
{zipCode: '10128', spending: 8423111.34683595},
{zipCode: '10304', spending: 13272781.5162263},
{zipCode: '10451', spending: 7001027.61295455},
{zipCode: '10452', spending: 17976596.9436802},
{zipCode: '10453', spending: 6709318.12908145},
{zipCode: '10455', spending: 12324725.6936387},
{zipCode: '10456', spending: 21258328.6372526},
{zipCode: '10457', spending: 6454072.33069248},
{zipCode: '10460', spending: 6490536.01617662},
{zipCode: '10468', spending: 4959061.22584281},
{zipCode: '10471', spending: 3135876.95163589},
{zipCode: '10475', spending: 3646368.54841383},
{zipCode: '10514', spending: 2333675.87098485},
{zipCode: '10550', spending: 17940133.258196},
{zipCode: '10562', spending: 3828686.97583452},
{zipCode: '10566', spending: 5542480.19358902},
{zipCode: '10589', spending: 2333675.87098485},
{zipCode: '10591', spending: 3901614.3468028},
{zipCode: '10601', spending: 10647396.1613684},
{zipCode: '10604', spending: 3464050.12099314},
{zipCode: '10701', spending: 32634998.5083038},
{zipCode: '10705', spending: 5141379.6532635},
{zipCode: '10707', spending: 4886133.85487453},
{zipCode: '10710', spending: 13272781.5162263},
{zipCode: '10801', spending: 16590976.8952829},
{zipCode: '10941', spending: 9188848.74200285},
{zipCode: '10954', spending: 729273.709682766},
{zipCode: '11101', spending: 10939105.6452415},
{zipCode: '11102', spending: 14767792.621076},
{zipCode: '11105', spending: 18049524.3146485},
{zipCode: '11201', spending: 42553120.9599894},
{zipCode: '11203', spending: 18304770.1130374},
{zipCode: '11206', spending: 8605429.77425664},
{zipCode: '11208', spending: 28769847.8469851},
{zipCode: '11210', spending: 13564491.0000994},
{zipCode: '11212', spending: 51997215.5003812},
{zipCode: '11213', spending: 4412105.94358073},
{zipCode: '11221', spending: 34604037.5244472},
{zipCode: '11222', spending: 5104915.96777936},
{zipCode: '11224', spending: 24503596.6453409},
{zipCode: '11225', spending: 9261776.11297113},
{zipCode: '11233', spending: 2917094.83873106},
{zipCode: '11238', spending: 13236317.8307422},
{zipCode: '11239', spending: 12543507.8065436},
{zipCode: '11249', spending: 27748864.6534292},
{zipCode: '11432', spending: 5068452.28229522},
{zipCode: '11433', spending: 3646368.54841383},
{zipCode: '11550', spending: 2698312.72582623},
{zipCode: '11691', spending: 2406603.24195313},
{zipCode: '11726', spending: 3281731.69357245},
{zipCode: '11772', spending: 6198826.53230351},
{zipCode: '11798', spending: 3427586.435509},
{zipCode: '11953', spending: 4485033.31454901},
{zipCode: '12020', spending: 2990022.20969934},
{zipCode: '12065', spending: 364636.854841383},
{zipCode: '12110', spending: 4412105.94358073},
{zipCode: '12144', spending: 3573441.17744555},
{zipCode: '12189', spending: 21331256.0082209},
{zipCode: '12207', spending: 14002055.2259091},
{zipCode: '12210', spending: 7657373.95166904},
{zipCode: '12305', spending: 2224284.81453244},
{zipCode: '12307', spending: 1859647.95969105},
{zipCode: '12508', spending: 2479530.6129214},
{zipCode: '12534', spending: 2406603.24195313},
{zipCode: '12601', spending: 5141379.6532635},
{zipCode: '12754', spending: 4594424.37100143},
{zipCode: '12758', spending: 2187821.1290483},
{zipCode: '12779', spending: 2260748.50001657},
{zipCode: '12866', spending: 5761262.30649385},
{zipCode: '13021', spending: 3828686.97583452},
{zipCode: '13035', spending: 1531474.79033381},
{zipCode: '13039', spending: 3646368.54841383},
{zipCode: '13069', spending: 3464050.12099314},
{zipCode: '13126', spending: 2552457.98388968},
{zipCode: '13202', spending: 11996552.5242815},
{zipCode: '13203', spending: 1823184.27420691},
{zipCode: '13210', spending: 14330228.3952664},
{zipCode: '13357', spending: 4083932.77422349},
{zipCode: '13501', spending: 4193323.8306759},
{zipCode: '13502', spending: 5433089.13713661},
{zipCode: '13601', spending: 12908144.661385},
{zipCode: '13676', spending: 4995524.91132695},
{zipCode: '13790', spending: 4886133.85487453},
{zipCode: '13901', spending: 5250770.70971591},
{zipCode: '14075', spending: 4740279.11293798},
{zipCode: '14094', spending: 2187821.1290483},
{zipCode: '14201', spending: 7584446.58070077},
{zipCode: '14204', spending: 13455099.943647},
{zipCode: '14208', spending: 3245268.00808831},
{zipCode: '14210', spending: 3646368.54841383},
{zipCode: '14225', spending: 3208804.32260417},
{zipCode: '14227', spending: 4011005.40325521},
{zipCode: '14424', spending: 3828686.97583452},
{zipCode: '14425', spending: 3792223.29035038},
{zipCode: '14456', spending: 7839692.37908973},
{zipCode: '14604', spending: 3755759.60486624},
{zipCode: '14607', spending: 6271753.90327179},
{zipCode: '14609', spending: 2917094.83873106},
{zipCode: '14615', spending: 13856200.4839726},
{zipCode: '14623', spending: 3026485.89518348},
{zipCode: '14624', spending: 11704843.0404084},
{zipCode: '14626', spending: 2406603.24195313},
{zipCode: '14805', spending: 2479530.6129214},
{zipCode: '14843', spending: 5360161.76616833},
{zipCode: '14850', spending: 8094938.1774787},
{zipCode: '14892', spending: 2734776.41131037},
{zipCode: '14901', spending: 3318195.37905659},];

const filteredFeatures = [];
const parsedData = geojson;

parsedData.features.forEach((feature) => {
    const zipcode = feature.properties.ZCTA5CE10;
    if (zipcode.startsWith("10") || zipcode.startsWith("11")) {
        filteredFeatures.push(feature);
    }
});

const filteredCollection = {
    type: "FeatureCollection",
    features: filteredFeatures,
};

// Calculate max, min, and average spending values
let maxSpending = Number.MIN_SAFE_INTEGER;
let minSpending = Number.MAX_SAFE_INTEGER;
let totalSpending = 0;

pResUnitList.forEach((entry) => {
    maxSpending = Math.max(maxSpending, entry.spending);
    minSpending = Math.min(minSpending, entry.spending);
    totalSpending += entry.spending;
});

// Filter and update spending values
const updatedList = filteredCollection.features.map((entry) => {
    if (entry.properties.spending === 0) {
        // Generate a random value within the range of min to max spending
        entry.properties.spending = Math.random() * (maxSpending - minSpending) + minSpending;
    }
    return entry;
});


const fs = require('fs'); // Import the 'fs' module to work with files

// Define the path and filename for the output file
const outputPath = './data/ny_new_york_zip_codes_geo_spending_fake_data.json';

// Convert the modified geojson object to a JSON string
const updatedGeojsonString = JSON.stringify(filteredCollection, null, 2);

// Write the JSON string to the output file
fs.writeFile(outputPath, updatedGeojsonString, 'utf8', err => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File saved successfully:', outputPath);
  }
});