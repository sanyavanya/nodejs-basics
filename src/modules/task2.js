import * as fs from 'fs';
import * as csv from 'csvtojson';
import { pipeline } from 'stream';

pipeline(
  fs.createReadStream('./csv/input.csv'),
  csv({ delimiter: ';' }),
  fs.createWriteStream('./csv_to_txt/output.txt', 'utf8'),
  err => {
    if (err) console.log(err);
  }
);
