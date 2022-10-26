import React from 'react';
import {Home5} from './Home';

import cryptin3 from './Svg/cryptin3.png';
import cryptin4 from './Svg/cryptin4.png';
import cryptin5 from './Svg/cryptin5.png';


const What = () => {
  return (
    <>
        <What1 />
        <What2 />
        <What3 />
        <What4 />
        <Home5 />

    </>
  );
}

export default What;


const What1 = () => {
  return (
    <>
      <section className='sec-container margin-top'>
           <div className="inner-container1">
               <h2>Simple and affordable investing for <strong>everyone</strong></h2>
               <p className='margin-bottom'>
               We're here to make investing simple and straightforward.
                That's why we offer fully managed investments for a low annual fee.
               </p>
               <button className='btn'type='button'>Start investing</button>
           </div>
           <div className="inner-container2">
           <img src={cryptin3} className='img' alt='cryptin' />
           </div>
        </section>
    </>
  );
}


const What2 = () => {
    return (
      <>
         <h2 className='padding margin-bottom'>Here to <strong>Help</strong></h2>
               <ul className='margin-bottom padding'>
                   <li>We're here to help you become a financial champion,
                        empowering your $'s and making them work harder for you.</li>
                   <li className='margin-top'>Through evestor and OpenMoney, our financial advice brand, 
                       we're on a mission to make money worries a thing of the past.</li>
                   <li className='margin-top'>Our friendly support team are available via webchat Monday to Friday,
                        9am - 8pm and Saturday 9am – 1:30pm if you have any questions.</li>
               </ul>
      </>
    );
  }

  const What3 = () => {
    return (
      <>
         <section className='sec-container margin-top'>
           <div className="inner-container1">
           <h4 className='margin-bottom'>What we do</h4>
        <h3 className='margin-bottom'>Investing without <strong>hassel</strong></h3>
                       <ul className='margin-bottom'>
                   <li>We manage everything in the investment process, so you don't have to.</li>
                   <li className='margin-top'>We keep our fees low, so you can invest more of your money.</li>
                   <li className='margin-top'>We try to keep things simple and we're always on hand to help.</li>
               </ul>
           </div>
           <div className="inner-container2">
           <img src={cryptin4} className='img' alt='cryptin' />
           </div>
        </section>
      </>
    );
  }

  const What4 = () => {
    return (
      <>
         <section className='sec-container margin-top'>
           <div className="inner-container2">
           <img src={cryptin5} className='img' alt='cryptin' />
           </div>
           <div className="inner-container1">
           <h4>How we do it</h4>
               <h3>Our investment <strong>strategy</strong></h3>
               <p className='margin-bottom'>
               At cryptin, we use a strategy called 'passive investing'.
               This means we invest your money in funds that track a market index like the FTSE 100 <br/>
‍              <br/> We keep our costs low so that we can pass the savings on to you. 
                This means you can invest more of your money in the market.
               </p>
           </div>
        </section>
      </>
    );
  }

//   const Home5 = () => {
//     return (
//         <>
//             <section className='sec-container margin-top'>
//            <div className="inner-container1">
//            <h4>Security and protection</h4>
//                <h3>For your peace of mind <strong>mind</strong></h3>
//                <ul className='margin-bottom'>
//                    <li>We're authorised and regulated by the Financial Conduct Authority (FCA)</li>
//                    <li>Your money is protected by the Financial Services Compensation Scheme (FSCS) up to $50,000</li>
//                    <li>Your data will never be sold to third parties</li>
//                </ul>
//                <button className='btn'type='button'>Learn more about our security</button>
//            </div>
//            <div className="inner-container2">
//            <img src={cryptin3} className='img' alt='cryptin' />
//            </div>
//         </section>
//         </>
//     );
// }
