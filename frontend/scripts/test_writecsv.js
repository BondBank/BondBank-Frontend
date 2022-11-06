const fs = require("fs");
const { parse } = require("csv-parse");
const { stringify } = require("csv-stringify");

const migrationFile = "../frontend/data/demo_csv/migration_data.csv"
const localmigrationFile = "./scripts/demo_csv/write_migration_data.csv"
const fNamewithPath = localmigrationFile
async function writeTocsv(fNamewithPath,stringDataArr){
    const writableStream = fs.createWriteStream(fNamewithPath,{flags: 'a'});
    const stringifier = stringify(); //stringify({ header: true, columns: columns });
    stringDataArr.forEach((row)=>stringifier.write(row));
    stringifier.pipe(writableStream);
    console.log("Finished writing data");
    
}

async function main(){
    const data = [
        {year_month: "2001-01",month_of_release:"2020-09",passenger_type: "Long-term migrant",direction: "Arrivals",
        sex:"Female",age:"0-4 years",estimate:"Final"},
        {year_month: "2001-01",month_of_release:"2020-09",passenger_type: "Long-term migrant",direction: "Arrivals",
        sex:"Male",age:"0-4 years",estimate:"Final"},
        
    ]
    const data2 = [
        {year_month: "2023-01",month_of_release:"2023-01",passenger_type: "Long-term migrant",direction: "Arrivals",
        sex:"Female",age:"0-4 years",estimate:"Final"},
        {year_month: "2023-01",month_of_release:"2023-01",passenger_type: "Long-term migrant",direction: "Arrivals",
        sex:"Male",age:"0-4 years",estimate:"Final"},
        
    ]
    await writeTocsv(fNamewithPath,data)
await writeTocsv(fNamewithPath,data2)
}



const columns = [
    "year_month",
    "month_of_release",
    "passenger_type",
    "direction",
    "sex",
    "age",
    "estimate",
  ];


main()
