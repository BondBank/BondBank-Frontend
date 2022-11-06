const fs = require("fs");
const { parse } = require("csv-parse");
const { stringify } = require("csv-stringify");


const migrationFile = "../frontend/data/demo_csv/migration_data.csv"
const localmigrationFile = "./scripts/demo_csv/migration_data.csv"
const fNamewithPath = localmigrationFile

class csvHelper {
    constructor(){
        this.name = name;
        this.year = year;
    }
}
    
export function readCsv(fNamewithPath)
    {
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
    }
export function writeCsv(fNamewithPath,stringDataArr)
    {
        const writableStream = fs.createWriteStream(fNamewithPath,{flags: 'a'});
    const stringifier = stringify(); //stringify({ header: true, columns: columns });
    stringDataArr.forEach((row)=>stringifier.write(row));
    stringifier.pipe(writableStream);
    console.log("Finished writing data");
    }
    
