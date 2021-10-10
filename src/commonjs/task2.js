const fs = require('fs');
const csv = require('csvtojson');
const { pipeline } = require('stream');

const csvDirPath = './csv/';
const csvInputFileName = 'input.csv';
const csvOutputFileName = 'output.txt';

fs.writeFile(csvDirPath + csvOutputFileName, '', err => {
  if (err) console.log(err);
});

pipeline(
  fs.createReadStream(csvDirPath + csvInputFileName),
  csv({ delimiter: ';' }),
  fs.createWriteStream(csvDirPath + csvOutputFileName, 'utf8'),
  err => {
    if (err) console.log(err);
  }
);
