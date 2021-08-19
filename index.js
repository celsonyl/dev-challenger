const csvFilePath = './input.csv';
const csvParser = require('csvtojson');
const fs = require('fs');

(async () => {
  const jsonResponse = await csvParser().fromFile(csvFilePath);
  fs.writeFileSync('./output.json', JSON.stringify(jsonResponse));
})();