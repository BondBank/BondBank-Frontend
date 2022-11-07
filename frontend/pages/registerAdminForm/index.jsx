//import {Form} from 'react'
export default function PageWithJSbasedForm(){// Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
        ssn: event.target.ssn.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/registerAdminForm'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" required />

            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" required />

            <label htmlFor="ssn">Social Security</label>
            <input type="text" id="ssn" name="ssn" required />

            <button type="submit">Submit</button>

        </form>
    )
}