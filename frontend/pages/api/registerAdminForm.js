//import writeCsv from '../../scripts/csvHelperJs'
const fs = require('fs')
const { stringify } = require("csv-stringify");
export default function handler(req, res) {
    const body = req.body;
    if (!body.name) {
      return res.status(500).json({ msg: 'Name was not found' });
    }
     const localmigrationFile = "./data/bondData/Admin_Users.csv"
     const fNamewithPath = localmigrationFile
     const dummy = body.fname
     
     writeCsv(fNamewithPath,[{str:"1",fname:  dummy, lname: body.lname, ssn: body.ssn}]);
    res.status(200).json({ name: `${body.fname} Lastname` });
  }

  function writeCsv(fNamewithPath,stringDataArr)
  {
      const writableStream = fs.createWriteStream(fNamewithPath,{flags: 'a'});
  const stringifier = stringify(); //stringify({ header: true, columns: columns });
  stringDataArr.forEach((row)=>stringifier.write(row));
  stringifier.pipe(writableStream);
  console.log("Finished writing data");
  }