import * as React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">How Old App</h3>
     </div>
     <div className="NavBar-Links">
      <a className="NavBar-Link" href="https://github.com/kayeew/how-old-msa">Github</a>
     </div>
   </nav>
  );
};

export default NavBar;
