import React from 'react'
import NavTabs from './NavTabs'

const Header = ( {currentPage, setCurrentPage} ) => {
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1>Business Wolf</h1>
            {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  )
}

export default Header
