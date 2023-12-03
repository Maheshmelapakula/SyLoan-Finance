import React from 'react'

import Speedometer from './Speedometer'

import'./CibilChecker.css'
 

const CibilCheker = () => {

//  const store =useSelector();
const cibilscore=530;
// const diff=600;

const scoreinpercent=((cibilscore-300)/600)*100;


    const val=scoreinpercent;

    let result="";

 

    if(val>0 && val<=20){

        result="Very Poor"

    }else if(val>20 && val<=40){

        result="Poor"

    }else if(val>40 && val<=60){

        result="Fair"

    }else if(val>60 && val<=80){

        result="Good"

    }else if(val>80 && val<=100){

        result="Excellent"

    }

 

  return (

    <div className="cibilchekerdiv "  >

        <div className='cibilindicator' >

            <h1 className=''>CIBIL Score Meter:-</h1>

            <div>

                <Speedometer score={val} cibilscore={cibilscore}/>

            </div>

 

            <div className='scoreresult'>

                <h2>Result : {result} </h2>

            </div>

        </div>

 

        <div className="cibilscorereferance">

 

            <h1 className='scoretitle'>Check where you are :</h1>

            <div class=""style={{backgroundColor:"red", padding:"15px"}}> Very Poor ( 300 - 420 ) </div>

    

            <div class="" style={{backgroundColor:"orange" , padding:"15px"}}> Poor ( 421 - 540 )  </div>

    

            <div class="" style={{backgroundColor:"yellow" , padding:"15px"}}> Fair ( 541 - 660 ) </div>

    

            <div class="" style={{backgroundColor:"greenyellow" , padding:"15px"}}> Good ( 661 - 780 )  </div>

    

            <div class="" style={{backgroundColor:"green" , padding:"15px"}}> Excellent ( 781 - 900 ) </div>

  

        </div>

 

    </div>

 

  )

}

 

export default CibilCheker