const fs = require("fs");
const { parse } = require("csv-parse");
const { stringify } = require("csv-stringify");


const migrationFile = "../frontend/data/demo_csv/migration_data.csv"
const localmigrationFile = "./scripts/demo_csv/migration_data.csv"
const fNamewithPath = localmigrationFile

class csvHelper {
    fNamewithPath: string;
    
}