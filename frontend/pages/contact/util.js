const fs = require("fs");

const writeCsv = (fNamewithPath,stringDataArr) =>
{
        const writableStream = fs.createWriteStream(fNamewithPath,{flags: 'a'});
    const stringifier = stringify(); //stringify({ header: true, columns: columns });
    stringDataArr.forEach((row)=>stringifier.write(row));
    stringifier.pipe(writableStream);
    console.log("Finished writing data");
}

export default writeCsv;