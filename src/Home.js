import React from 'react';
import cryptin1 from './Svg/cryptin1.png';
import cryptin2 from './Svg/cryptin2.png';
import cryptin3 from './Svg/cryptin-globe.png';
import cryptin4 from './Svg/cryptin-support.png';

// nested components

const Home = () => {
  return (
    <div>
     <Home1 />
     <Home2 />
     <Home3 />
     <Home4 />
     <Home5 />
     <Home6 /> 
    </div>
  );
}

export {
    Home1,
    Home2,
    Home3,
    Home4,
    Home5,
    Home6,
}

const Home1 = () => {
    return (
        <section className='sec-container margin-top'>
           <div className="inner-container1">
               <h2>Invest in your future <strong>today</strong></h2>
               <ul className='margin-bottom'>
                   <li>Invest in crypto currencies around the world from $100</li>
                   <li>Track your investment 24/7 with our app</li>
                   <li>Low annual fees of 0.5% or less.</li>
               </ul>
               <button className='btn'type='button'>Start investing</button>
           </div>
           <div className="inner-container2">
           <img src={cryptin1} className='img' alt='cryptin' />
           </div>
        </section>
    );
}

const Home2 = () => {
    return (
        <>
        <h4 className='text-align margin-bottom'>What we offer</h4>
        <h3 className='text-align margin-bottom'>Investing at your <strong>fingertips</strong></h3>
        <section className='sec-container'>
            <div className="inner3a">
                <div className="inner3ai">
                    <h4>Low annual fees</h4>
                    <p>Our low annual fees mean you can invest more of your money and reach your financial goals.</p>
                </div>
                <div className="inner3aii">
                    <h4>Full transparency</h4>
                    <p>We'll tell you what you're paying in dollars. No more confusing financial jargon or mental maths.</p>
                </div>
            </div>
            <div className="inner3b">
            <img src={cryptin2} className='img img-hieght' alt='cryptin' />
            </div>
            <div className="inner3c">
                <div className="inner3ci">
                    <h4>24/7 access</h4>
                    <p>Track your investment performance in our app whenever and wherever you are.</p>
                </div>
                <div className="inner3cii">
                    <h4>Diversified portfolio</h4>
                    <p>Minimise your investment risk with a globally diversified investment strategy.</p>
                </div>
            </div>
        </section>
        </>
    );
}

const Home3 = () => {
    return (
        <>
        <h4 className='text-align margin-bottom'>How it works</h4>
        <h3 className='text-align margin-bottom'>See how your money could <strong>grow</strong></h3>
            <section className='sec-container2'>
                <div className="twoinner1">
                 <div className="twoinner1a">
                    <p><strong>Initial investment</strong></p>
                    <span>
                    <button type='button' className='btn margin-right'><strong>+</strong></button>
                    <p className='inline'><strong>$1000</strong></p>
                    <button type='button' className='btn margin-left'><strong>-</strong></button>
                    </span>
                 </div>
                    <div className="twoinner1b margin-top">
                        <h4>Choose portfolio risk type</h4>
                        <button className="btn margin-right margin-top"type='button'>High</button>
                        <button className="btn margin-top"type='button'>Medium</button>
                        <button className="btn margin-left margin-top"type='button'>Low</button>
                    </div>
                </div>
                <div className="twoinner2">
                    <h4 className='margin-bottom'>Invested amount <strong>$1000</strong></h4>
                    <h4 className='margin-top'>Projected value</h4>
                    <h3 className='margin-bottom'><strong>$15000</strong></h3>
                    <span className='margin-top'>
                    <button type='button' className='btn margin-right'><h4><strong>+</strong></h4></button>
                    <p className='inline'>In <strong>1 year</strong></p>
                    <button type='button' className='btn margin-left'><h4><strong>-</strong></h4></button>
                    </span>
                </div>
            </section>
        </>
    );
}

const Home4 = () => {
    return (
        <>
          <h3 className='text-align margin-bottom'>Our <strong>diversified</strong> portfolio</h3>
        <h4 className='text-align margin-bottom'>Manage the risk of your <strong>investment</strong></h4>
        <div className="text-align margin-bottom">
        <button className="btn margin-right margin-top"type='button'>High</button>
                        <button className="btn margin-top"type='button'>Medium</button>
                        <button className="btn margin-left margin-top"type='button'>Low</button>
                        <p className='padding margin-top'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti reiciendis ad repellat,
                             eveniet nulla molestias ex aperiam deserunt inventore 
                             adipisci quae reprehenderit eius quis molestiae. 
                            Fuga expedita consectetur facilis. Quasi?</p>
                        </div>
                    
        </>
    );
}

const Home5 = () => {
    return (
        <>
            <section className='sec-container margin-top'>
           <div className="inner-container1">
           <h4>Security and protection</h4>
               <h3>For your peace of mind <strong>mind</strong></h3>
               <ul className='margin-bottom'>
                   <li>We're authorised and regulated by the Financial Conduct Authority (FCA)</li>
                   <li>Your money is protected by the Financial Services Compensation Scheme (FSCS) up to $50,000</li>
                   <li>Your data will never be sold to third parties</li>
               </ul>
               <button className='btn'type='button'>Learn more about our security</button>
           </div>
           <div className="inner-container2">
           <img src={cryptin3} className='img' alt='cryptin' />
           </div>
        </section>
        </>
    );
}


const Home6 = () => {
    return (
        <>
            <section className='sec-container margin-top'>
           <div className="inner-container2">
           <img src={cryptin4} className='img' alt='cryptin' />
           </div>
           <div className="inner-container1">
           <h4>Support</h4>
               <h3>Got more <strong>questions</strong></h3>
               <p className='margin-bottom'>
               Head to our frequently asked questions page or speak to one of our friendly support team on webchat.
‍               Our team are available Monday - Friday,    9am - 8pm and Saturday 9am – 1:30pm
               Visit our FAQs
               </p>
               <button className='btn'type='button'>Visit our FAQs</button>
           </div>
        </section>
        </>
    );
}