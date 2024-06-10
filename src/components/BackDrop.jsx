import React from 'react';
import './BackDrop.css';
import Cart from './Cart';
const BackDrop = ({ showCart,hideCartHandler }) => {
  return (
    <>
      {
        showCart &&
        <>
        <section className='backdrop' onClick={hideCartHandler}> </section>
        <Cart hideCartHandler={hideCartHandler} />
        </>
      }
    </>
  );
};

export default BackDrop;
