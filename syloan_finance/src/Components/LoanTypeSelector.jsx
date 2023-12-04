import React from 'react';

const LoanTypeSelector = ({ onSelectLoanType }) => {
  const loanTypes = ['Home Loan', 'Car Loan', 'Personal Loan'];

  return (
    <div className="loan-type-selector">
      <h2>Select Loan Type</h2>
      <select onChange={(e) => onSelectLoanType(e.target.value)}>
        <option value="">Select a Loan Type</option>
        {loanTypes.map((loanType, index) => (
          <option key={index} value={loanType}>
            {loanType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LoanTypeSelector;
