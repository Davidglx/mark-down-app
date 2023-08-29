import React from 'react';
import { Logoicon, Moonicon, SunIcon } from './assets/Icons';
import { useContext } from "react";
import { ThemeContext } from "../App";


const Header = () => {

  const [isDark, setIsDark] = useContext(ThemeContext);
  
  return (
    <header className="header">
        <div className="container">
            <div className="logo-wrapper">
                <div className="logo">
                    <Logoicon />
                    <span>JS Snipets</span>
                </div>
                <button className='icon' onClick={() => setIsDark(!isDark)}>{isDark ? <Moonicon /> :  <SunIcon />}</button>
            </div>
        </div>
    </header>
  )
}

export default Header;
