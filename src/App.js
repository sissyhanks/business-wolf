import React from "react";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

// The state of the app is based on the page selected from the navigation list. because the state needs to be referenced by several components it is added to the app.js file to make it global
import { useState } from 'react'

function App(){
  const [currentPage] = useState('About');

  return (
    <div className="container">
      <Header currentPage={currentPage} />
      <PortfolioContainer currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
