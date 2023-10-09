import React, { useState } from 'react'
import './style/inpu.scss'
import { AsuseContecst } from '../context/AsuseContext'; 
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Inpu = (props) => {
  // const {user} = useContext(AsuseContecst)
  const { Inputt, user } = useContext(AsuseContecst); 
  const [email, setEmail] = useState('')
const [pass, setPass] = useState('') 
console.log(props);
const submit = (e) => { 
  e.preventDefault();
  Inputt(email,pass)
}
  return (
    <div className='fonc'>

    <div className='container'>
        <form onSubmit={submit}>
           <div className='email'>
           <label htmlFor='email'>Email:</label>
            <input value={email.user} onChange={ (e) => setEmail(e.target.value)} id='email' type="email" />
           </div>
          <div className='passwort'>
          <label htmlFor="passwort">Passwort:</label>
            <input value={pass} onChange={ (e) => setPass(e.target.value)} id="passwort"  type="password"   />
          </div>
          <Link to={'/nomepa'}>
            <button className='regist'>register</button>
            </Link>
            </form>
    </div>
    </div>

  )
}

export default Inpu