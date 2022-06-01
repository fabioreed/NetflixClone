import React, { useEffect } from 'react'
import './Nav.css';

function Nav() {
 const [show, setShow] = React.useState(false); //a navbar fixa quando da scroll

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 100);
        });
    }, []);


  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>         
    <img 
        className='nav-logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
        <img className='nav-avatar' 
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="fabioreed"></img>
    </div>
  );
}

export default Nav;