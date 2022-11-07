

//import {csvHelperJs} from '../scripts/csvHelperJs'
 
// import {fs} from "fs"
//import {writeCsv}  from './util.js'
const { parse } = require("csv-parse");
const { stringify } = require("csv-stringify");
const fNamewithPath = 'test.csv'
const registerAsBondBuyer = () => {

  return (
    <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
    <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Contact us</div>
          <form className="flex flex-col" onSubmit={submitContact}>
            <label htmlFor="name" className="mb-2 italic">First Name:   </label>
            
            <input
              className="mb-4 border-b-2"
              id="fname"
              name="fname"
              type="text"
              autoComplete="name"
              required
            />
            <br></br>
            <label htmlFor="lname" className="mb-2 italic">Last Name:   </label>
            
            <input
              className="mb-4 border-b-2"
              id="lname"
              name="lname"
              type="text"
              autoComplete="lname"
              required
            />
            <br></br>
            <label htmlFor="ssn" className="mb-2 italic">Socio Sec: </label>
            
            <input
              className="mb-4 border-b-2"
              id="ssn"
              name="ssn"
              type="text"
              autoComplete="ssn"
              required
            />
            <br></br>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
      
          </div>
    </div>
  )

}

export default registerAsBondBuyer;



const submitContact = async (event) => {
  event.preventDefault();
  const fname = event.target.fname.value;
  const lname = event.target.lname.value;
  const ssn = event.target.ssn.value;
  const res = await fetch('/api/registerAsBondBuyer', {
    body: JSON.stringify({
      name: fname,
      lname: lname,
      ssn:ssn,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
 // writeCsv(fNamewithPath,[name]);
  const result = await res.json();

  alert(`Is this your full name: ${result.name}`);
};

