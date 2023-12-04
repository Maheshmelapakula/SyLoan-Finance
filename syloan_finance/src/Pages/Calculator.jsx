import React from 'react'

import EmiCalculators from '../Components/Calculators/EmiCalculators'
import CibilChecker from '../Components/Calculators/CibilChecker'
import Footer from '../Components/Footer'

const Calculator = () => {
  return (
    <div>
        <CibilChecker/>
        <EmiCalculators/>
        <Footer/>
    </div>
  )
}

export default Calculator