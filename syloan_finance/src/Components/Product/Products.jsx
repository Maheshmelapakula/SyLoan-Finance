import React from 'react'
import Styles from "../Product/Products.module.css"
import cerditCard from "./productsImages/creditCard.png"
import PersonalLoan from "./productsImages/PersonalLoan.png"
// import MicroLoans from "./productsImages/MicroLoans.png"
import TransferPersonalLoan from "./productsImages/TranferPersonalLoan.png"
// import HomeLoan from "./productsImages/HomeLoan.png"
// import LoanAgainstProperty from "./productsImages/LoanAgainstProperty.png"
// import BusinessLoan from "./productsImages/Business Loan.png"
// import stepUpCreditCard from "./productsImages/stepUpCreditCard.png"
// import transferHomeLoan from "./productsImages/transferHomeLoans.png"
const Products = () => {
  return (
    <div>
        {/* <h2>Products</h2> */}
        <div id={Styles.container}>
            <div className={Styles.card}>
                <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>CREDIT CARDS</h4>
                        <p>From 35+ options, choose a card matching your lifestyle & needs</p>
                        <p>Get Best Offers →</p>
                    </div>
                    <div>
                        <img src={cerditCard} alt="" />
                    </div>
                </div>

                <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>PERSONAL LOAN</h4>
                        <p>Select the best offer curated just for you from a wide choice of Banks & NBFC's</p>
                        <p>Check Eligibilty →</p>
                    </div>
                    <div>
                        <img src={PersonalLoan} alt="" />
                    </div>
                </div>

{/* 
                <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>MICRO LOANS </h4>
                        <p>Instant small ticket loans to meet your immediate cash needs</p>
                        <p>Get Instant Loans →</p>
                    </div>
                    <div>
                        <img src={MicroLoans} alt="" />
                    </div>
                </div> */}


                {/* <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>BUSINESS LOAN (Under 50K)</h4>
                        <p>Expand your business with loans at low interest rates</p>
                        <p>Check Eligibility →</p>
                    </div>
                    <div>
                        <img src={BusinessLoan} alt="" />
                    </div>
                </div> */}


                <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>TRANSFER PERSONAL LOAN</h4>
                        <p>Get better interest rates on your existing personal loan</p>
                        <p>Reduce Your EMI →</p>
                    </div>
                    <div>
                        <img src={TransferPersonalLoan} alt="" />
                    </div>
                </div>


                {/* <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>HOME LOAN</h4>
                        <p>Choose from lowest interest rates available for your dream home</p>
                        <p>Check Eligibility →</p>
                    </div>
                    <div>
                        <img src={HomeLoan} alt="" />
                    </div>
                </div> */}


                {/* <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>LOAN AGAINST PROPERTY</h4>
                        <p>Get liquidity against your property at best interest rates</p>
                        <p>Get Best Offers →</p>
                    </div>
                    <div>
                        <img src={LoanAgainstProperty} alt="" />
                    </div>
                </div> */}


                <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>TRANSFER HOME LOAN</h4>
                        <p>Get better interest rates on your existing home loan</p>
                        <p>Reduce Your EMI →</p>
                    </div>
                    <div>
                        {/* <img src={transferHomeLoan} alt="" /> */}
                    </div>
                </div>


                <div className={Styles.card1}>
                    <div className={Styles.info}>
                        <h4>STEP UP CREDIT CARDS</h4>
                        <p>A Credit Card for everyone, backed by a Fixed Deposit</p>
                        <p>Know More →</p>
                    </div>
                    <div>
                        {/* <img src={stepUpCreditCard} alt="" /> */}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Products
