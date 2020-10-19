import React from 'react';

import './header.css';

const Header = () => {
  return (
    
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 bg-white border-bottom shadow-sm header">
      <h5 className="my-0 mr-md-auto font-weight-normal">Star Wars Test</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2" href="#">People</a>
        <a className="p-2" href="#">Planets</a>
        <a className="p-2" href="#">Starships</a>
        <a className="p-2" href="#">Films</a>
        <a className="p-2" href="#">Species</a>
      </nav>
      <a className="btn btn-outline-secondary" href="#">Sign up</a>
    </div>
  );
};

export default Header;