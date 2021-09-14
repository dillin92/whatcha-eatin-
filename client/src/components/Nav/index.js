import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="bg-light mb-4 py-2 flex-row align-center">
          <div className="container fluid flex-row">
            <Link to="/">
              <h1>Whatcha Eatin!</h1>
            </Link>
    
            <nav className="text-center">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </nav>
          </div>
        </header>
      );
    };

export default Nav;