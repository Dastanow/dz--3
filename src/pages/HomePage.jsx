import React, { useContext } from 'react'
import { AsuseContecst } from '../context/AsuseContext'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const {email, user,  logout} = useContext(AsuseContecst)
  const history = useNavigate();
  const loglogaut = async () => [
await logout(),
history('/inpu')
  ]
  return (

    <div>
<h1> Эмейл: {email}</h1>
<button onClick={loglogaut}>Выйти</button>
    </div>
  )
}

export default HomePage