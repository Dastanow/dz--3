import React, { useContext } from 'react';
import Inpu from '../pages/Inpu';
import { AsuseContext } from '../context/AsuseContext'; 

const Form = () => {
  const { Inputt } = useContext(AsuseContext); 
  const register = (email, password) => { 
    debugger
    return Inputt(email, password);
  };
  return (
    <div>
      <Inpu onHandleReg={register} />
    </div>
  );
};

export default Form;



