import React from 'react';
import { Fsocial } from './data';


const Footer = () => {
  return (
    <footer className='footer-padding margin-top'>
      <h2 className="margin-bottom margin-top">Cryptin</h2>
      <section className='sec-container'>
            <div className="inner3a">
            <ul className='margin-bottom'>
                   <li><h4>Why invest</h4></li>
                   <li className='margin-top'><h4>What we do</h4></li>
                   <li className='margin-top'><h4>FAQs</h4></li>
               </ul>
            </div>
            <div className="inner3b">
            <ul className='margin-bottom'>
                   <li><h4>Transfers</h4></li>
                   <li className='margin-top'><h4>Get in touch</h4></li>
                   <li className='margin-top'><h4>Security</h4></li>
               </ul>
            </div>
            <div className="inner3c">
            <div className='Flinks-container'>
        <ul className='social-icons, links'>
          {Fsocial.map((FsocialIcon) => {
            const { id, url, icon } = FsocialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
        </div>
            </div>
        </section>
      
    </footer>
  );
}

export default Footer;
