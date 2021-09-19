import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// The state of the app is based on the page selected from the navigation list. because the state needs to be referenced by several components it is added to the app.js file to make it global
import { useState } from 'react'

function App(){
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div className="container">
      <PortfolioContainer currentPage={currentPage} />
    </div>
  );
}

export default App;
