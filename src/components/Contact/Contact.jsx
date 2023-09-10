import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function Contact() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (<>
    <form className='float-start align-left text-start'>
      <div className="mb-3">
        <label htmlFor="txtInputName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="txtInputName" aria-describedby="Name" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="txtCompanyName" className="form-label">Company Name</label>
        <input type="text" className="form-control" id="txtCompanyName" aria-describedby="Name" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="selectCountry" className="form-label">Country</label>
        <Select options={options} value={value} id="selectCountry" onChange={changeHandler} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="charMessage" class="form-label">Message</label>
        <textarea class="form-control" id="charMessage" rows="3"></textarea>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <div className="mb-3">
          <label htmlFor="recaptcha" className="form-label">
            Security checks
          </label>
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </>)
}
