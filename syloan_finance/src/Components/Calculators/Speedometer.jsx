import React from 'react'

import {CircularProgressbar} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"

import SpeedProvider from './SpeedProvider';

const Speedometer = (props) => {

    const {score,cibilscore}=props;

 

    console.log(score)

    const calColor=(percent,start,end)=>{

        let a=percent/100,

        b=(end-start)*a,

        c=b+start;

 

        return "hsl("+ c + ", 100%, 50%)";

    }

  return (

    <SpeedProvider valueStart={0} valueEnd={score} >

        {(value)=>(

            <CircularProgressbar

            value={value}

            text={`${cibilscore}`}

            circleRatio={0.7}

            styles={{

                trail:{

                    strokeLinecap:"butt",

                    transform:"rotate(-126deg)",

                    transformOrigin:"center center"

                },

                path:{

                    strokeLinecap:'revert-layer',

                    transform:"rotate(-126deg)",

                    transformOrigin:"center center",

                    stroke: calColor(value , -30, 120),

                },

                text:{

                    fill:"#ddd"

                }

            }}

            strokeWidth={10}
            
            />

        )}

    </SpeedProvider>

  )

}

 

export default Speedometer