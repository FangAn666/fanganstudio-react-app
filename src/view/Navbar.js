import React from 'react';
import { Link } from 'react-router-dom';
import './FooaNav.css';

function Navbar() {
  // const handleLinkClick = () => {
  //   const offcanvasElement = document.getElementById('offcanvasNavbar');
  //   if (offcanvasElement && window.bootstrap) {
  //     const offcanvasInstance = new window.bootstrap.Offcanvas(offcanvasElement);
  //     offcanvasInstance.hide();
  //   }
  // };

  return (
    <nav className='navbar navbar-expand nav_font'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to="/">
          FangAnStudio
        </Link>
        
        <div className='collapse navbar-collapse'>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link className='nav-link' to="/colloection">
                Collection
              </Link>
            </li> 

            <li className='nav-item'>
              <Link className='nav-link' to="/thonreblog">
                ThonReBlog
              </Link>
            </li>
          </ul>
        </div>
      </div>



    </nav>
    
  );
}

export default Navbar;
