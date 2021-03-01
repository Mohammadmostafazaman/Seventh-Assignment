import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a href='home' className='navbar-brand'>
            Hero League
          </a>
          <button className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' href='home'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='home'>
                  Players
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='home'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
