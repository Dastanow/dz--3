import React, { useState } from 'react'
import './style/home.scss'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };  
  return (
    <div className='Hhome'>
      <div className='hoMe'>
        <div className='contain'>
        <form action="">
          <div>  <input type="text" placeholder='Ведите эмейл' /></div>
        <div> <input type="text" placeholder='Ведите пароль' /></div>
          <button className='register'  onClick={openModal}>Войти</button>
          <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Вы не зарегистрированы</h2>
      </Modal>
         <Link to={'/inpu'}><p>зарегистрироваться</p></Link> 
        </form>
        </div>        
      </div>
    </div>
  )
}

export default Home