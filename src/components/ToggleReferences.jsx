import React, {useState} from "react";
import './ToggleReferences.css';

const ToggleReferencesButton = ({toggleReferences}) =>{
    const [showReferences, setShowReferences] = useState(false);

    const handleClick = () =>{
        setShowReferences(!showReferences);
        toggleReferences(!showReferences);
        if(!showReferences){
            document.querySelectorAll('span').forEach(el => el.classList.add('show'));
        }else{
            document.querySelectorAll('span').forEach(el => el.classList.remove('show'));
        }
    }
    return (
        <button className="referencias" onClick={handleClick}>
            {showReferences ? 'Mostrar Referencias' : 'Ocultar Referencias'}
        </button>
        );
    }

export default ToggleReferencesButton;