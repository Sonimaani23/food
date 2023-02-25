import React, { useState } from 'react'
import Regester from './components/regester'
import Signin from './components/sign'

function App() {
  const [forms, setForms]=useState('Signin')
  const tform=(forms)=>{
    setForms(forms)
  }
  return (
    <>{
    forms==="Signin"?<Signin onformChange={tform}/>:<Regester onformChange={tform} />
}
    </>
  )
}

export default App