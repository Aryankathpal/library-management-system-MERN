
import {Link, useNavigate} from 'react-router-dom';
import { useState } from "react";


export const Navbar = () => {
    const[loginActive,setLoginActive] = useState(false);
    const[signinActive,setSignActive] = useState(false);

    const navigate = useNavigate();

    const loginfn=()=>{
        setSignActive(false);
        loginActive?navigate('/'):navigate('/login');
        setLoginActive(!loginActive);
    }
    const signinfn=()=>{
        setLoginActive(false);
        signinActive?navigate('/'):navigate('/signup');
        setSignActive(!signinActive);
    }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <button className='btn btn-primary me-2' onClick={loginfn}>Login</button>
            </li>
            <li className="nav-item">
            <button className='btn btn-primary' onClick={signinfn}>Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
