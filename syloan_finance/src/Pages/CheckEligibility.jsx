import React, { useEffect, useState } from "react";
import LoanEligibilityModal from "../Components/LoanEligibilityModal";
import { useNavigate } from "react-router-dom";

const CheckEligibility = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    panNumber: "",
    mobile: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [cibil, setCibil] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let localStorageCibil = 890;
    setCibil(localStorageCibil);
    if (localStorageCibil < 650) {
      setIsEligible(false);
    } else {
      setIsEligible(true);
    }
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleProceed = () => {
    navigate("/loanApplication");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {/* FOr Cibil calculator */}
        Your Cibil Score : {cibil || "--"}
      </div>
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          // background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="dob">Date Of Birth (DOB)</label>
            <input
              type="date"
              value={formData.dob}
              onChange={handleChange}
              name="dob"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              value={formData.mobile}
              onChange={handleChange}
              name="mobile"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="panNumber">Pan Number</label>
            <input
              type="text"
              value={formData.panNumber}
              onChange={handleChange}
              name="panNumber"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <LoanEligibilityModal
        showModal={showModal}
        onClose={closeModal}
        isEligible={isEligible}
        onProceed={handleProceed}
      />
    </div>
  );
};

export default CheckEligibility;
