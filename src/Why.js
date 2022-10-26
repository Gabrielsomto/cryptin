import React from 'react';
import cryptin3 from './Svg/cryptin6.png';
import cryptin7 from './Svg/cryptin7.png';
import cryptin4 from './Svg/cryptin4.png';
import cryptin8 from './Svg/cryptin8.png';



const Why = () => {
    return (
      <>
          <Why1 />
          <Why2 />
          <Why3 />
          <Why4 />

  
      </>
    );
  }
  
  export default Why;


  const Why1 = () => {
    return (
      <>
        <section className='sec-container margin-top'>
             <div className="inner-container1">
                 <h2>We invest in over 250 cryptocurrencies <strong>around the world</strong></h2>
                 <p className='margin-bottom'>
                 We diversify your investments globally to minimise risk. 
                 As the saying goes, don't put all your eggs in one basket.</p>
                 <button className='btn'type='button'>Start investing</button>
             </div>
             <div className="inner-container2">
             <img src={cryptin3} className='img' alt='cryptin' />
             </div>
          </section>
      </>
    );
  }

  
  
  const Why2 = () => {
    return (
      <>
        <section className='sec-container margin-top'>
           <div className="inner-container2">
           <img src={cryptin7} className='img' alt='cryptin' />
           </div>
           <div className="inner-container1">
        <h3 className='margin-bottom'>Why we choose <strong>cryptin?</strong></h3>
                       <ul className='margin-bottom'>
                   <li>We offer products to suit your financial goals and portfolios to suit your risk appetite.</li>
                   <li className='margin-top'>Start from as little as $100 and withdraw at any time with no exit fee.</li>
                   <li className='margin-top'>Track your investment performance 24/7 with our app</li>
               </ul>
           </div>
        </section>
      </>
    );
  }
  
  const Why3 = () => {
    return (
      <>
        <section className='sec-container margin-top'>
           <div className="inner-container1">
           <h4 className='margin-bottom'>How much does it cost</h4>
        <h3 className='margin-bottom'>Low and transperent <strong>fees</strong></h3>
        <p className='margin-bottom'>
        Here at cryptin, we're helping to make investing affordable and accessible to everyone.</p>
                       <ul className='margin-bottom'>
                   <li>We manage everything in the investment process, so you don't have to.</li>
                   <li className='margin-top'>We keep our fees low, so you can invest more of your money.</li>
                   <li className='margin-top'>We try to keep things simple and we're always on hand to help.</li>
               </ul>
               <button className='btn'type='button'>See our calculator</button>
           </div>
           <div className="inner-container2">
           <img src={cryptin4} className='img' alt='cryptin' />
           </div>
        </section>
      </>
    );
  }
  
  const Why4 = () => {
    return (
      <>
        <section className='sec-container margin-top'>
           <div className="inner-container2">
           <img src={cryptin8} className='img' alt='cryptin' />
           </div>
           <div className="inner-container1">
        <h3 className='margin-bottom'>Diversified <strong>portfolios</strong></h3>
        <p className='margin-bottom'>
        Diversification means that your investments are spread across different types of assets, 
        companies and locations which helps reduce the risk associated with investing.</p>
        
           </div>
        </section>
      </>
    );
  }
  

  
  