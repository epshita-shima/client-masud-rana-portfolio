import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickySocialMedia from "../pages/Common/StickySocialMedia";

const Main = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="">
      {/* Don't show header/footer for admin pages */}
      {!isAdminPage && (
        <>
          <StickySocialMedia />
          <Header />
        </>
      )}
      
      <Outlet />
      
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default Main;