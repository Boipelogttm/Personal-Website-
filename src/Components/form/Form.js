import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div  className='form'>
        <form>
            <label> First Name  </label>
            <input type="text" placeholder="Enter Your First Name" />
            <label> Last Name  </label>
            <input type="text" placeholder="Enter Your Last Name " />
            <label> Email   </label>
            <input type="text" placeholder="Enter Your Email" />
            <label> Message  </label>
           <textarea rows="6" placeholder="Type Your Message " />
           <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form