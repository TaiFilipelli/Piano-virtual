import React, { forwardRef, useEffect, useRef, useState} from 'react';
import Pizzicato from 'pizzicato';
import DarkMode from './DarkMode';
import ToggleReferencesButton from './ToggleReferences';

const PianoSounds = forwardRef((props, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showReferences, setShowReferences] = useState(false);
    const sounds = useRef({
      A3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/a3.mp3'}}),
      A_3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/a-3.mp3'}}),
      C3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c3.mp3'}}),
      C_3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c-3.mp3'}}),
      D3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/d3.mp3'}}),
      D_3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/d-3.mp3'}}),
      E3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/e3.mp3'}}),
      F3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/f3.mp3'}}),
      F_3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/f-3.mp3'}}),
      G3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/g3.mp3'}}),
      G_3: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/g-3.mp3'}}),
      A4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/a4.mp3'}}),
      A_4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/a-4.mp3'}}),
      B4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/b4.mp3'}}),
      C4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c4.mp3'}}),
      C_4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c-4.mp3'}}),
      D4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/d4.mp3'}}),
      D_4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/d-4.mp3'}}),
      E4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/e4.mp3'}}),
      F4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/f4.mp3'}}),
      F_4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/f-4.mp3'}}),
      G4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/g4.mp3'}}),
      G_4: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/g-4.mp3'}}),
      A5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/a5.mp3'}}),
      A_5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/a-5.mp3'}}),
      B5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/b5.mp3'}}),
      C5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c5.mp3'}}),
      C_5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c-5.mp3'}}),
      D5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/d5.mp3'}}),
      D_5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/d-5.mp3'}}),
      E5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/e5.mp3'}}),
      F5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/f5.mp3'}}),
      F_5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/f-5.mp3'}}),
      G5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/g5.mp3'}}),
      G_5: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/g-5.mp3'}}),
      C6: new Pizzicato.Sound({source:'file',options:{path:'src/assets/music/c6.mp3'}})
    });

  const playSound = (note) => {
    const sound = sounds.current[note];
    if (sound) {
      sound.stop();
      sound.play();
    }
  };
  const toggleDarkMode = (darkModeEnabled) => {
    setIsDarkMode(darkModeEnabled);
  }
  const toggleReferences = (show) => {
    setShowReferences(show);
  };
  useEffect(() => {
    return () => {
      Object.values(sounds.current).forEach((sound) => sound.stop());
    };
  }, []);

  if (ref) {
    ref.current = {
      playSound: playSound,
    };
  }

  return(
    <div className={`piano-box ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="title">Piano Virtual</h1>
      <p className='tuto'>Cada tecla del teclado está asignada a una nota distinta de un piano. La letra en cada tecla del piano representa la tecla correspondiente de tu teclado. Pruébalo! </p>
      <DarkMode toggleDarkMode={toggleDarkMode} /> 
      <ToggleReferencesButton toggleReferences={toggleReferences} showReferences={showReferences}/>
      <div className="tecla-wrapper">
        <button className='blanca' onClick={()=>playSound('A3')}><span className={`${showReferences ? 'show' : ''}`}>q</span></button>
        <button className='negra' onClick={()=>playSound('A_3')}><span className={`${showReferences ? 'show' : ''}`}>w</span></button>
        <button className='blanca' onClick={()=>playSound('C3')}><span className={`${showReferences ? 'show' : ''}`}>e</span></button>
        <button className='negra' onClick={()=>playSound('C_3')}><span className={`${showReferences ? 'show' : ''}`}>r</span></button>
        <button className='blanca' onClick={()=>playSound('D3')}><span className={`${showReferences ? 'show' : ''}`}>t</span></button>
        <button className='blanca' onClick={()=>playSound('D_3')}><span className={`${showReferences ? 'show' : ''}`}>y</span></button>
        <button className="negra" onClick={()=>playSound('E3')}><span className={`${showReferences ? 'show' : ''}`}>u</span></button>
        <button className='blanca' onClick={()=>playSound('F3')}><span className={`${showReferences ? 'show' : ''}`}>i</span></button>
        <button className="negra" onClick={()=>playSound('F_3')}><span className={`${showReferences ? 'show' : ''}`}>o</span></button>
        <button className='blanca' onClick={()=>playSound('G3')}><span className={`${showReferences ? 'show' : ''}`}>p</span></button>
        <button className='negra' onClick={()=>playSound('G_3')}><span className={`${showReferences ? 'show' : ''}`}>a</span></button>
        <button className='blanca' onClick={()=>playSound('A4')}><span className={`${showReferences ? 'show' : ''}`}>s</span></button>
        <button className='blanca' onClick={()=>playSound('A_4')}><span className={`${showReferences ? 'show' : ''}`}>d</span></button>
        <button className='negra' onClick={()=>playSound('B4')}><span className={`${showReferences ? 'show' : ''}`}>f</span></button>
        <button className='blanca' onClick={()=>playSound('C4')}><span className={`${showReferences ? 'show' : ''}`}>g</span></button>
        <button className="negra" onClick={()=>playSound('C_4')}><span className={`${showReferences ? 'show' : ''}`}>h</span></button>
        <button className='blanca' onClick={()=>playSound('D4')}><span className={`${showReferences ? 'show' : ''}`}>j</span></button>
        <button className='blanca' onClick={()=>playSound('D_4')}><span className={`${showReferences ? 'show' : ''}`}>k</span></button>
        <button className='negra' onClick={()=>playSound('E4')}><span className={`${showReferences ? 'show' : ''}`}>l</span></button>
        <button className='blanca' onClick={()=>playSound('F4')}><span className={`${showReferences ? 'show' : ''}`}>z</span></button>
        <button className='negra' onClick={()=>playSound('F_4')}><span className={`${showReferences ? 'show' : ''}`}>x</span></button>
        <button className='blanca' onClick={()=>playSound('G4')}><span className={`${showReferences ? 'show' : ''}`}>c</span></button>
        <button className="negra" onClick={()=>playSound('G_4')}><span className={`${showReferences ? 'show' : ''}`}>v</span></button>
        <button className='blanca' onClick={()=>playSound('A5')}><span className={`${showReferences ? 'show' : ''}`}>b</span></button>
        <button className='blanca' onClick={()=>playSound('A_5')}><span className={`${showReferences ? 'show' : ''}`}>n</span></button>
        <button className="negra" onClick={()=>playSound('B5')}><span className={`${showReferences ? 'show' : ''}`}>m</span></button>
        <button className='blanca' onClick={()=>playSound('C5')}><span className={`${showReferences ? 'show' : ''}`}>1</span></button>
        <button className='negra' onClick={()=>playSound('C_5')}><span className={`${showReferences ? 'show' : ''}`}>2</span></button>
        <button className='blanca' onClick={()=>playSound('D5')}><span className={`${showReferences ? 'show' : ''}`}>3</span></button>
        <button className="blanca" onClick={()=>playSound('D_5')}><span className={`${showReferences ? 'show' : ''}`}>4</span></button>
        <button className='negra' onClick={()=>playSound('E5')}><span className={`${showReferences ? 'show' : ''}`}>5</span></button>
        <button className="blanca" onClick={()=>playSound('F5')}><span className={`${showReferences ? 'show' : ''}`}>6</span></button>
        <button className="negra" onClick={()=>playSound('F_5')}><span className={`${showReferences ? 'show' : ''}`}>7</span></button>
        <button className="blanca" onClick={()=>playSound('G5')}><span className={`${showReferences ? 'show' : ''}`}>8</span></button>
        <button className="negra" onClick={()=>playSound('G_5')}><span className={`${showReferences ? 'show' : ''}`}>9</span></button>
        <button className="blanca" onClick={()=>playSound('C6')}><span className={`${showReferences ? 'show' : ''}`}>0</span></button>
      </div>
    </div>
  );
});

export default PianoSounds;

