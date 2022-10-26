import React from 'react';
import {Home6} from './Home';

import cryptin3 from './Svg/cryptin10.png';


const Get = () => {
  return (
    <>
        <Get1 />
        <Get2 />
        <Home6 />
    </>
  );
}

export default Get;


const Get1 = () => {
  return (
    <>
      <section className='sec-container margin-top'>
             <div className="inner-container1">
                 <h2>Get in <strong>touch</strong></h2>
                 <p className='margin-bottom'>
                 Our team are here to answer your questions or give you the help you need.</p>
             </div>
             <div className="inner-container2">
             <img src={cryptin3} className='img' alt='cryptin' />
             </div>
          </section>
    </>
  );
}

const Get2 = () => {
    return (
      <>
        <section className='sec-container2'>
                <div className="twoinner1">
                <h3 className='margin-bottom'>Live web chat</h3>
         <p className='margin-bottom'>
         Our fully trained webchat team are available Monday to Friday, from 9am - 8pm and 
         Saturday from 9am - 1:30pm to answer any of your questions.</p>
         <button className='btn'type='button'>Start live chart</button>
                </div>
                <div className="twoinner2 text-align-left">
                <h3 className='margin-bottom'>Email us</h3>
         <p className='margin-bottom'>
         Our team will be happy to answer any questions. Get in touch on general@evestor.co.uk 
         and we'll get back to you within 48 hours.</p>
         <button className='btn'type='button'>Send an email</button>
                </div>
            </section>

      </>
    );
  }


