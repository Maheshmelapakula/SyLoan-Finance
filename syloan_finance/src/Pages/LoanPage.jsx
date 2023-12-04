// FormComponent.jsx
import React, { useState } from 'react';

const LoanPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    parentsName: '',
    address: '',
    nominee:'',
    purposeOfLoan:'',
    // Add more fields as needed for the loan application
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, you can reset the form fields here
    setFormData({
      name: '',
      parentsName: '',
      address: '',
      // Reset other fields as needed
    });
  };
  const handleConfirm = () =>{
    alert("Congrats your Loan is Approved")

  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="parentsName" style={styles.label}>Parent's Name:</label>
        <input
          type="text"
          id="parentsName"
          name="parentsName"
          value={formData.parentsName}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="address" style={styles.label}>Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      {/* Add more input fields for other information needed */}
      <button onClick={()=>handleConfirm()} type="submit" style={styles.button}>Confirm</button>
    </form>
  );
};

export default LoanPage;

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
  },
};
