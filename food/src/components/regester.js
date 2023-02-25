import React, { useState } from 'react'
import './../styles/regester.css'
import {useNavigate} from "react-router-dom"

function Regester() {
    const [dataa, setDataa] = useState([]);
    const [formData, setFormdata] = useState({
      email: "",
      password: "",
      cpassword: "",
    });
const navigate=useNavigate
const navigateto =()=>{
    navigate('./sign.js')
}
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        if (formData.password !== formData.cpassword) {
          alert("Please confirm same password");
        }
    
        const data = { ...formData, id: new Date().getTime().toString() };
        setDataa([...dataa, data]);
        console.log(dataa);
    
        setFormdata({ email: "", password: "", cpassword: "" });
    
      };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Email" name='email'
        onChange={(e) => {
            setFormdata({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        
          id="name"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("You missed email here")}/>
          
        
        <input type={"text"} placeholder="Password" name='password'
        onChange={(e) => {
            setFormdata({ ...formData, password: e.target.value });
          }}
          value={formData.password}
          
          id="password"
          onInvalid={(e) => e.target.setCustomValidity("Password is missing")}
        >
        </input>
        <input type={'text'} placeholder="Confirm Password" name='cpassword'
        onChange={(e) => {
            setFormdata({ ...formData, cpassword: e.target.value });
          }}
          value={formData.cpassword}
        
          id="cpassword"
        >
        </input>
        <div className='span'>
        <span> 
            <input type={'checkbox'} id="check" required />

        </span>
        <span ><p>I agree with <b><u>Terms and conditions</u></b></p></span>
        
        
        </div>
        
       
        <input id='submit' onClick={()=>navigateto()} type={'submit'}></input>
    </form>

    </>
  )
}

export default Regester