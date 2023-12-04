import React, { useState } from "react";

const LoanEligibilityModal = ({ showModal, onClose, isEligible , onProceed }) => {
  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              width: "400px",
              textAlign: "center",
            }}
          >
            {isEligible ? (
              <div>
                {" "}
                <h2>Congratulations!</h2>
                <p>You are eligible for the loan.</p>
              </div>
            ) : (
              <div>
                <h2>Sorry.</h2>
                <p>You are not eligible for the loan and try after 90 days.</p>
              </div>
            )}

            <button
              onClick={onProceed}
              style={{
                padding: "10px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                display: isEligible ? "auto" : "none",
                marginRight : "20px"
              }}
            >
              Proceed
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "10px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoanEligibilityModal;
