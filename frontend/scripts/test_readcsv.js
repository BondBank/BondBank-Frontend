const fs = require("fs");
const { parse } = require("csv-parse");
const migrationFile = "../frontend/data/demo_csv/migration_data.csv"
const localmigrationFile = "./scripts/demo_csv/migration_data.csv"
const fNamewithPath = localmigrationFile
fs.createReadStream(fNamewithPath)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });