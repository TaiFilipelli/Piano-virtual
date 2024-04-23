import React,{useState} from "react";
import './DarkMode.css';

const DarkMode = ({toggleDarkMode})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () =>{
        setIsDarkMode(!isDarkMode);
        toggleDarkMode(isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('light-mode');
            document.querySelectorAll('h1, p').forEach(el => el.classList.add('light-mode'));
          } else {
            document.body.classList.remove('light-mode');
            document.querySelectorAll('h1, p').forEach(el => el.classList.remove('light-mode'));
          }
    };

    return(
        <button className="dark-mode-btn" onClick={handleClick}>
            {isDarkMode ? 'Modo Oscuro':'Modo Claro'}
        </button>
    );
};

export default DarkMode;