import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckEligibility from "../Pages/CheckEligibility";
import Products from "../Components/Product/Products";
import LoanPage from "../Pages/LoanPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/checkEligiblity" element={<CheckEligibility />}></Route>
        <Route path="/loanApplication" element={<LoanPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
