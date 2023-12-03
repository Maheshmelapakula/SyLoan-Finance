 import React, { useState } from 'react'
 import {withStyles} from "@material-ui/core"
 import Slider from "@material-ui/core/Slider"
 import { Typography } from '@mui/material'
//  import Typography from '@material-ui/core/styles/createTypography'
 import {Table,TableCell,TableRow} from "@material-ui/core"
 import { Pie } from 'react-chartjs-2'
 import TableDetails from './TableDetails'
 import 'chart.js/auto';
 import './EmiCalculators.css'

 const PrettoSlider=withStyles({
    root:{color:'MediumVioletRed',height:10},
    thumb:{height:25,width:25,backgroundColor:'White',border:'3px solid black' }
 })(Slider);
 
 const EmiCalculators = () => {

    const [pAmount,setpAmount]=useState(100000)
    const [interest,setinterest]=useState(7);
    const [duration,setDuration]=useState(12);
    const maxValue=6000000;
    const intMax=25;
    const maxDuration=60;


    //interest
    
    // const intr=interest/1200;
    const intr=interest;

    // total amount
    const totalAmt= Math.round(pAmount*(1+(interest/100)));


    //emi
    const emi =Math.round(totalAmt/duration)

    // const emi=duration ? Math.round(pAmount * intr /(1-(Math.pow(1 / (1 + intr),duration)))) : 0 ;
    // const totalAmt=duration * emi ;
    // var TotalAmountofCredit = Math.round((emi /intr)* (1- (Math.pow (1/(1+intr),(-duration)))));

    //total Interest

    var TotalAmountofInterest = Math.round(totalAmt-pAmount)
    // var TotalAmountofInterest = Math.round(totalAmt - TotalAmountofCredit);

   return (
     <div className='emical'>
        <div className='emiCaldiv' >
            <h2 className='emicalHeading'><u>EMI Calculator</u></h2>
        
            
            <div className='emirange'>
                <div >
                
                {/* Amount */}
                    <Typography gutterBottom><strong>Loan Amount</strong></Typography>
                    <PrettoSlider value={pAmount} onChange={(event,vAmt) =>{setpAmount(vAmt)}} defaultValue={pAmount} max={maxValue} />
                </div>
                
                <div>
                {/* Interest */}
                    <Typography gutterBottom><strong>Interest</strong></Typography>
                    <PrettoSlider value={interest} onChange={(event,vAmt) =>{setinterest(vAmt)}} defaultValue={interest} max={intMax} />
                </div>

                <div>
                {/* Duration */}
                    <Typography gutterBottom><strong>Durationn</strong></Typography>
                    <PrettoSlider value={duration} onChange={(event,vAmt) =>{setDuration(vAmt)}} defaultValue={duration} max={maxDuration} />
                </div>

            </div>
            



            <div className='emiTable'>
                <Table>
                    <TableRow className='tablerow'>
                        <TableCell className='tablecell1'>
                            <TableDetails pAmount={pAmount} interest={interest} duration={duration} emi={emi} TotalAmountofInterest={TotalAmountofInterest} totalAmt={totalAmt}></TableDetails>
                        </TableCell>
                        <TableCell className='tablecell2'>
                            <Pie 
                                data={{
                                    labels :["Total Interest" ,"Total Amount"],
                                    datasets :[{
                                        data: [TotalAmountofInterest,pAmount],
                                        backgroundColor:["red","blue"]
                                    }]
                                }}
                                //  width={100}
                                //  height={100}
                                 className='piechart'
                                //  style={{border:"1px solid black",  }}
                                />
                        </TableCell>
                    </TableRow>
                </Table>
            </div>
        </div>
     </div>
   )
 }
 
 export default EmiCalculators