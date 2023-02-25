import React, { useState } from 'react'
import './../styles/signin.css'
import {useNavigate} from "react-router-dom"


function Signin(props) {
    const [dataa, setDataa] = useState([]);
    const [formData, setFormdata] = useState({
      email: "",
      password: ""
      
    });
    const navigate=useNavigate
// const navigateto =()=>{
   
// }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
       
    
        const data = { ...formData, id: new Date().getTime().toString() };
        setDataa([...dataa, data]);
        console.log(dataa);
    
        setFormdata({  email: "", password: "" });
    
        navigate('./regester')
      };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email" name='email'
        onChange={(e) => {
            setFormdata({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        
          id="name"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("You missed email here")}>
          
        </input>
        <input type={"text"} placeholder="Password" name='password'
        onChange={(e) => {
            setFormdata({ ...formData, password: e.target.value });
          }}
          value={formData.password}
          
          id="password"
          onInvalid={(e) => e.target.setCustomValidity("Password is missing")}
        >
        </input>
        
        <div className='span'>
        
        <span onClick={()=> props.onformChange('Regester')} ><p>Do not have an account Please <b><u>Click here</u></b></p></span>
        
        
        </div>
        
       
        <input id='submit' type={'submit'}></input>
    </form>

    </>
  )
}

export default Signin