// import React from 'react';
import React, { useState } from 'react';

const Register = () => {
  const [person, setPerson] = useState({ 
    firstName: '', 
    lastName: '',
    country: '',
    mobilePhone: '',
    password: '',
    email: '', 
    age: ''
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age && person.password && person.mobilePhone && person.country && person.lastName) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '', lastName: '', country: '', mobilePhone: '', password: '' });
    }
  };
  
  return (
      <>
    <h5 className='margin-bottom padding margin-top'>Cryptin has brokered trades for over twenty years. It’s helped over two million customers, but you might still be wondering…</h5>
    <section className='sec-container margin-top'>
           <div className="inner-container1">
             <article className="form">
           <form>
          <div className='form-control'>
            <label htmlFor='firstName'>firstName : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='lastName'>lastName : </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={person.lastName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='country'>country : </label>
            <input
              type='text'
              id='country'
              name='country'
              value={person.country}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='mobilePhone'>mobilePhone : </label>
            <input
              type='text'
              id='mobilePhone'
              name='mobilePhone'
              value={person.mobilePhone}
              onChange={handleChange}
            />
          </div>
          
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='password'>password : </label>
            <input
              type='password'
              id='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            Register
          </button>
          <button type='submit' className='btn margin-left'>
            Login if you have an account
          </button>
        </form>
        </article>
        
        <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>

           </div>
           <div className="inner-container2">
           <h3 className='margin-bottom'>Why should you trade with 
Alpari International?</h3>

<h4 className=''>We’re regulated and licensed
</h4>
<p className='margin-bottom'>Cryptin is fully licenced and regulated by the Financial Services Commission of Maurit
 allowing you to enjoy a great trading experience with total peace of mind</p>

 <h4 className=' margin-top'>We’re safe, secure and totally transparent
</h4>
<p className='margin-bottom'>The safety of your funds is our top priority, which is why we store all our client money in segregated bank accounts, and offer negative balance protection on accounts with instant and market execution.</p>

 <h4 className=' margin-top'>We want you to enjoy all of Alpari International’s perks
</h4>
<p className='margin-bottom'>With a host of promotions and benefits on offer including our Loyalty Programme, enjoy trading with more fun and fewer costs* than ever before.

<br/><br/>*T&Cs apply.</p>



           </div>
        </section>
        </>
  );
}

export default Register;
