import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './NavTabs'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

import webSites from '../webSites';
export default function PortfolioContainer() {
  const [tab, setTab] = useState ("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (tab === 'About') {
      return <About />;
    }
    if (tab === 'Portfolio') {
      return <Portfolio webSites={webSites}/>;
    }
    return <Contact />;
  };

  const changeTab = (page) => setTab(page);

  return (
    <div>

      {/* Here we are calling the renderPage method which will return a component  */}
      <body>
        <Header
        />
        <NavTabs tab={tab} changeTab={changeTab} />
        <div> {renderPage()}</div>
        <Footer />
      </body>
    </div>
  );
}
