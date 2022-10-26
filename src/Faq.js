import React from 'react';
import cryptin3 from './Svg/cryptin9.png';


const Faq = () => {
  return (
    <>
         <Faq1 />
          <Faq2 />
          <Faq3 />
          <Faq4 />
          <Faq5 />
          <Faq6 />
          <Faq7 />
          <Faq8 />



  
    </>
  );
}

export default Faq;


const Faq1 = () => {
    return (
      <>
         <section className='sec-container margin-top'>
             <div className="inner-container1">
                 <h2>We are here for <strong>you</strong></h2>
                 <p className='margin-bottom'>
                 We understand how confusing money can be, 
                 but hopefully we can answer some of your questions here.</p>
             </div>
             <div className="inner-container2">
             <img src={cryptin3} className='img' alt='cryptin' />
             </div>
          </section>
         
      </>
    );
  }
  
  const Faq2 = () => {
    return (
      <>
         <button className='btn btn-margin'type='button'>About cryptin</button>
         <button className='btn btn-margin'type='button'>Investments</button>
         <button className='btn btn-margin'type='button'>Your account</button>
         <button className='btn btn-margin'type='button'>Transfers</button>
         <button className='btn btn-margin'type='button'>Security</button>
         <button className='btn btn-margin'type='button'>Our fees</button>

      </>
    );
  }

  const Faq3 = () => {
    return (
      <>
                 <article className="art-container margin-top">
         <h2 className='margin-bottom'>cryptin</h2>

         <h3 className='margin-bottom'>What is cryptin’s mission?</h3>
         <p className='margin-bottom'>
         At cryptin, we want investing to be straightforward and simple to all; 
         regardless of your age or how wealthy you are. 
         We want to instil confidence back into the industry 
         by ensuring we offer all our customers a transparent and fair price, 
         while placing their interests first.</p>

         <h3 className='margin-bottom'>How does the process work?</h3>
         <p className='margin-bottom'>
         Sign up from our homepage. Choose your risk portfolio and tell us how 
         much you wish to invest. We also provide you with the option of transferring in existing plans. Once your first payment has been made, 
         fund orders are sent to the market - you will then become a cryptin investor!</p>

         <h3 className='margin-bottom'>What are the requirements of opening an account with cryptin?</h3>
         <p className='margin-bottom'>
         To open an account with cryptin, you must be at least 18 years old.</p>
         
         </article>
      </>
    );
  }
  
  const Faq4 = () => {
    return (
      <>
                 <article className="art-container margin-top">
         <h2 className='margin-bottom'>Investment Approach & Portfolios</h2>

         <h3 className='margin-bottom'>What style of investment do cryptin use?</h3>
         <p className='margin-bottom'>
         We use a passive investment strategy when managing our portfolios. 
         Meaning we invest in passive mutual funds which track market indices; 
         like the UK FTSE All Share and the US S&P 500. We believe there are several 
         benefits towards using this approach:</p>
         <ul className='margin-bottom padding'>
                   <li>Passive funds are less costly than actively managed funds. 
                       High fees can have a considerable impact on your returns</li>
                   <li className='margin-top'>It allows exposure to many global companies 
                   meaning further diversification of our investments</li>
                   <li className='margin-top'>We don’t try and outperform the market, 
                   instead we stick to our original asset allocation, capture market returns 
                   and eliminate the complex guesswork which is employed by active managers 
                   whose objective is to outperform their chosen benchmark</li>
               </ul>

         <h3 className='margin-bottom'>What is a portfolio?</h3>
         <p className='margin-bottom'>
         At cryptin, when we say ‘portfolio’ we simply mean a collection of investments. 
         We offer three model portfolios created by our investment committee, 
         these represent three risk levels; 1 – Low Risk (Cautious), 2 – Medium Risk (Balanced) 
         and 3 – High Risk (Adventurous).</p>

         <h3 className='margin-bottom'>What determines the risk level of a portfolio?</h3>
         <p className='margin-bottom'>
         It’s down to the asset allocation. There are several different asset classes,
         which are considered high risk in comparison to Cash and Bonds 
         (Lower Risk). So our low risk portfolio contains more Bonds and less Equities, 
         compared to our high risk portfolio.</p>
         
         <h3 className='margin-bottom'>What is asset allocation?</h3>
         <p className='margin-bottom'>
         Asset allocation is a type of investment strategy. This method balances the risk and 
         rewards associated with investing, against an individual’s attitude to risk and time 
         horizon. The core principle is to use diversification to allocate non-correlated 
         assets (i.e. assets that perform differently in the same economic conditions) 
         to an investor’s investment portfolio. The use of different asset classes in a 
         portfolio aims to reduce the overall risk of the investment and provide better 
         returns for the customer.</p>

         <h3 className='margin-bottom'>What is diversification?</h3>
         <p className='margin-bottom'>
         Investment diversification is key to any investment strategy. 
         The principle suggests that spreading your investment across a wide range of asset 
         types will help manage the overall risk of the investment. If you’re familiar with the
          phrase ‘don’t put all your eggs in one basket’, this might help you to understand 
          diversification. Our investments are globally diversified so an investor in one of our 
          model portfolios can be invested in over 70 countries and 2,500 companies.</p>

         <h3 className='margin-bottom'>How do you decide on the composition of each portfolio?</h3>
         <p className='margin-bottom'>
         Our investment committee decides on the asset allocation of our three model portfolios. 
         Each portfolio contains mutual index funds which invest in the core asset classes i.e. 
         Bonds, Equities, Cash and Property. The type and proportion of each asset class included 
         in our portfolio is based on target risk levels. Depending on the risk level of the 
         portfolio the proportion of assets will vary to meet set targets.</p>

         <h3 className='margin-bottom'>Where can I find the past performance for evestor’s portfolios?</h3>
         <p className='margin-bottom'>
         Our investment committee have carried out extensive research when building each 
         portfolio. As we offer a managed service, changes can only be made where the 
         investment committee see fit, meaning customers are unable to adjust the holdings 
         or ‘pick and choose’ their own investments.</p>
         </article>
      </>
    );
  }

  const Faq5 = () => {
    return (
      <>
                 <article className="art-container margin-top">
         <h3 className='margin-bottom'>How do I amend my address or other personal details?</h3>
         <p className='margin-bottom'>
         Please get in touch with our support team with your request and we’ll update these for you.</p>

         <h3 className='margin-bottom'>What method can I use to make a payment?</h3>
         <p className='margin-bottom'>Monthly and lump sum contributions can be paid via direct 
         debit. For lump sums, the direct debit will only be debited once. 
         We are looking at introducing alternative methods of payment this year.</p>

         <h3 className='margin-bottom'>Can I increase or decrease contributions from my initial investment?</h3>
         <p className='margin-bottom'>
         If you wish to add or reduce contributions to your investment, 
         then you can do so via your evestor portal under the ‘Manage Payments’ section in your 
         evestor portal.</p>
         
         <h3 className='margin-bottom'>How do I make a withdrawal?</h3>
         <p className='margin-bottom'>
         You can request to withdraw however much you like, at any time - there is no charge to 
         do so. Simply get in touch with one of our team to request a full or partial withdrawal. 
         We will need your customer account number and your date of birth. <br/><br/>
         Once your withdrawal request has been initiated, it will take up to 8 working days to 
         receive your money, however we can’t guarantee a timeframe.</p>

         <h3 className='margin-bottom'>Can I adjust my bank account details?</h3>
         <p className='margin-bottom'>
         Payment details can be adjusted via your evestor portal under ‘Manage Payments’. 
         Please note, if a payment is due to be debited within 2 working days, you will be 
         unable to adjust details until the payment has been collected.</p>

         <h3 className='margin-bottom'>Why has my payment failed?</h3>
         <p className='margin-bottom'>
         We may have attempted to collect your payment but failed to do so. We receive BACS 
         reports which state the reason why a collection failed. It may be that the connection 
         between us and your bank does not exist or, has been cancelled by the account holder. 
         Please get in touch with one of our team and they will try their best to resolve your 
         query.</p>

         <h3 className='margin-bottom'>When will my payment be taken?</h3>
         <p className='margin-bottom'>
         Once you have entered your bank details, before any money can be taken, there is a 
         five-working day period to set up the connection with your bank. The collection file 
         is then sent two working days before the debit date. Please keep this in mind for when 
         you select the date for your recurring payment; 1st, 8th, 15th or 22nd. <br/><br/>
         To view or adjust this date enter your evestor portal and select ‘Manage Payments’. 
         For lump sum payments, money will automatically be debited on the next possible collection 
         date.</p>

         <h3 className='margin-bottom'>How do I cancel a Direct Debit?</h3>
         <p className='margin-bottom'>
         Payments can be stopped under ‘Manage Payments’, up to three working days before the 
         debit date. As the collection file is sent two working days before the collection date, 
         we will be unable to stop a payment that is due within this timeframe. If you wish to 
         cancel your payment in this case, please get in touch with your bank.
</p>

         <h3 className='margin-bottom'>Payment has been taken but it doesn’t appear in my portal?</h3>
         <p className='margin-bottom'>
         Once payment has been debited, there is a four-working day clearing period before 
         money is credited to your account and fund orders are sent to the market. 
         As each fund settles, your evestor portal will update, reflecting your new fund 
         purchases. It can take up to four working days for all fund purchases to settle.</p>

         <h3 className='margin-bottom'>Why is my investment losing money?</h3>
         <p className='margin-bottom'>
         Investing can be a powerful way to grow your money over the long term. 
         As tempting as it may be, try not to focus on the day to day changes in the value of 
         your portfolio. Significant changes are not uncommon. These are a result of global 
         market developments and can reflect positively or negatively on your investment. 
         Investing is a medium to long-term objective, so we recommend investing for a 
         minimum of 5 years to ‘ride out’ these fluctuations and to allow a chance to recoup 
         losses. If you are worried about the performance of your investment and you are in a 
         higher risk portfolio, you may wish to consider switching to a lower risk portfolio.</p>

         <h3 className='margin-bottom'>How do I switch my portfolio?</h3>
         <p className='margin-bottom'>
         If you are looking to adjust the portfolio you are invested in, please get in touch 
         via email or webchat. It takes 4 working days to sell down your current holdings and 
         then a further 4 to purchase units in your new portfolio. Your new portfolio factsheet 
         will then be uploaded to your document store. You can request the portfolio factsheets 
         beforehand, so you are aware of the composition of the portfolio and its past 
         performance.</p>

         <h3 className='margin-bottom'>Can I invest in more than one portfolio at a time?</h3>
         <p className='margin-bottom'>
         Currently you can only invest in one portfolio at a time for each product. 
         You will be able to invest in multiple portfolios if you invest in more than one 
         product. For example, an evestor GIA invested in Portfolio 1, and an evestor S&S ISA 
         invested in Portfolio 3.</p>
         </article>
      </>
    );
  }

  
  const Faq6 = () => {
    return (
      <>
                       <article className="art-container margin-top">

        <h3 className='margin-bottom'>How do I transfer in an existing plan?</h3>
         <p className='margin-bottom'>
         If you are a new customer, simply sign up at evestor.co.uk and follow the steps. 
         You will be asked to enter the amount you wish to transfer from an existing provider. 
         You are then taken to a page where you enter provider details, this triggers a 
         transfer form which is sent to your email via Signable. Once you have digitally 
         signed the form, we then initiate the transfer process. <br/><br/>
         If you are an existing customer, please get in touch and we will have a 
         transfer form dispatched to you.<br/><br/>
         Be sure that you are aware of penalties associated with transferring an existing plan, 
         this includes exit penalties and account closure fees.</p>

         <h3 className='margin-bottom'>Can I transfer a partial amount from an existing provider?</h3>
         <p className='margin-bottom'>
         We allow partial transfers from previous tax year ISAs. However, 
         if you are transferring any ISA to evestor from a current tax year you will 
         need to transfer all contributions paid in this tax year.<br/><br/>
         For partial pension transfers, it may be worth phoning your pension provider 
         and asking them whether this is possible.</p>

         <h3 className='margin-bottom'>How long does it take to transfer in a product?</h3>
         <p className='margin-bottom'>
         The transfer process differs from each provider. We send out transfer requests as 
         soon as possible and aim to chase all transfers on a 10-working day cycle. 
         Rules state that Cash ISA transfers must be completed within 15 working days of 
         receipt of the transfer request, for S&S ISAs, it’s 30 working days.<br/><br/>
         If you would like an update on your current pending transfer, please get in touch.</p>
        
         <h3 className='margin-bottom'>How do I transfer out of evestor to another provider?</h3>
         <p className='margin-bottom'>
         There are no costs to transfer out in cash or to close your account. 
         Contact your new provider and they will initiate the transfer process. 
         Generally, you are asked to sign a transfer request which is sent to us. 
         Once we receive the request and verify that all personal details match, 
         we pass the request on to our admin team to initiate the transfer process.</p>
         </article>

      </>
    );
  }
  
  
  
  const Faq7 = () => {
    return (
      <>
                       <article className="art-container margin-top">
        <h3 className='margin-bottom'>Am I covered by the Financial Services Compensation Scheme (FSCS)?</h3>
         <p className='margin-bottom'>
         evestor are authorised and regulated by the Financial Conduct Authority (FCA). 
         As we are an OpenMoney company, we're registered under OpenMoney Adviser services 
         Limited (FCA no. 676331).<br/><br/>
         Our customers are therefore covered by the FSCS. If we or our Product Provider cease 
         trading or have been declared to be in default and are unable to meet our respective 
         obligations, you may be entitled to compensation from the FSCS. Further information 
         about compensation arrangements is available from the FSCS.</p>


         <h3 className='margin-bottom'>How do you secure my personal data?</h3>
         <p className='margin-bottom'>
         Your personal details are stored in our database, and by Quai Administration Ltd. 
         Both evestor and Quai use 256-bit SSL encryption to store your data –the same level 
         as most banks.</p>

         <h3 className='margin-bottom'>Where is my money held, is it safe?</h3>
         <p className='margin-bottom'>
         Before money is invested, your money is held by our third-party platform provider 
         within a Client Money Account (Barclays Bank). The account is designated as a trust 
         account which is segregated from our third party’s funds in accordance with the FCA 
         Rules on Client Money. Money is held here briefly until fund orders are submitted to 
         purchase your investments from each fund provider, or until a withdrawal is paid out.</p>
         </article>
      </>
    );
  }

  
  const Faq8 = () => {
    return (
      <>
                       <article className="art-container margin-top">
         <h3 className='margin-bottom'>How much does it cost to invest with evestor?</h3>
         <p className='margin-bottom'>
         We believe it is important to be entirely transparent on how much it costs to invest 
         with us. Fund costs are not charges levied by us, it is the cost to invest in the 
         funds we've chosen. The costs indicated below include both the Annual Management 
         Charge (AMC) and the on going transaction cost for investing in each portfolio. 
         Please note that these fund costs may vary and may be higher than the stated amount:</p>
         <ul className='margin-bottom padding'>
                   <li>Portfolio 1 fund cost: 0.15%</li>
                   <li className='margin-top'>Portfolio 2 fund cost: 0.14%</li>
                   <li className='margin-top'>Portfolio 3 fund cost: 0.13%</li>
               </ul>
               <p className='margin-bottom'>
               Along with our annual management fee of 0.25% and the administration fee 
               of 0.10% (paid to a third party), the approximate amountyou will pay per 
               annum to invest is:</p>
               <ul className='margin-bottom padding'>
                   <li>Portfolio 1: 0.50%*</li>
                   <li className='margin-top'>Portfolio 2: 0.49%*</li>
                   <li className='margin-top'>Portfolio 3: 0.48%*</li>
               </ul>
               <p className='margin-bottom'>
               *This is based on the fees payable as at 20th April2021</p>
               </article>
      </>
    );
  }
  
  
  
  
  