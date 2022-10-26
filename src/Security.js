import React from 'react';
import {Home6} from './Home';

import cryptin3 from './Svg/cryptin-globe.png';


const Security = () => {
  return (
    <>
    <Security1 />
    <Security2 />
    <Home6 />
    </>
  );
}

export default Security;



const Security1 = () => {
  return (
    <>
      <section className='sec-container margin-top'>
             <div className="inner-container1">
                 <h2 className='margin-bottom'>Your data matters to <strong>us</strong></h2>
                 <h4 className='margin-bottom'>That’s why we use several layers of security 
                 in order to protect it</h4>
                 <ul className='margin-top'>
                   <li>Any sensitive data we store will be encrypted</li>
                   <li className='margin-top'>We'll protect your data from unauthorised access 
                   from both external and internal users</li>
                   <li className='margin-top'>We’ll never sell your data to any third parties</li>
               </ul>
             </div>
             <div className="inner-container2">
             <img src={cryptin3} className='img' alt='cryptin' />
             </div>
          </section>
    </>
  );
}


const Security2 = () => {
  return (
    <>
      <h2 className='padding margin-bottom'>Want to know <strong>more?</strong></h2>
      <h4 className='padding margin-bottom'>Our Security FAQs provide more information on 
      data and security.</h4>

               <ul className='margin-bottom padding'>
                   <li>Am I covered by the Financial Services Compensation Scheme (FSCS)?</li>
                   <li className='margin-top'>How do you secure my personal data?</li>
                   <li className='margin-top'>Where is my money held, is it safe?</li>
               </ul>
               <button className='btn padding margin-bottom'type='button'>View full FAQs</button>

    </>
  );
}



