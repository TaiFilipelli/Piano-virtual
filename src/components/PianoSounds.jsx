import React, { forwardRef, useEffect, useRef, useState} from 'react';
import DarkMode from './DarkMode';
import ToggleReferencesButton from './ToggleReferences';
import TypeSelector from './TypeSelector';

const PianoSounds = forwardRef((props, ref) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showReferences, setShowReferences] = useState(false);
  const audioContextRef =useRef(null);
  const [waveform, setWaveform] = useState('sine');
  const waveformOptions = ['sine', 'square', 'sawtooth', 'triangle'];

  const createOscillator = (frequency) => {
    const oscillator = audioContextRef.current.createOscillator();
    oscillator.type = waveform;// Tipo de forma de onda (puedes probar 'sine', 'square', 'sawtooth', 'triangle', etc.)
    oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
    oscillator.connect(audioContextRef.current.destination);
    return oscillator;
  };

  const playSound = (note) => {
    const noteMap={
      'C': 261.63, // Frecuencia para la nota DO (C4)
      'D': 293.66, // Frecuencia para la nota RE (D4)
      'E': 329.63, // Frecuencia para la nota MI (E4)
      'F': 349.23, // Frecuencia para la nota FA (F4)
      'G': 392.00, // Frecuencia para la nota SOL (G4)
      'A': 440.00, // Frecuencia para la nota LA (A4)
      'B': 493.88  // Frecuencia para la nota SI (B4)
    }
    
    const frequency = noteMap[note];
    if (!frequency) return;
    const oscillator = createOscillator(frequency);
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
    }, 400); // Duración del tono en milisegundos (ajusta según sea necesario)
  };
    
  const handleChangeWaveForm=(event)=>{
    const selectedWaveForm = event.target.value;
    setWaveform(selectedWaveForm);
  }

  const toggleDarkMode = (darkModeEnabled) => {
    setIsDarkMode(darkModeEnabled);
  }
  const toggleReferences = (show) => {
    setShowReferences(show);
  };

  useEffect(() => {
    audioContextRef.current =new (window.AudioContext || window.webkitAudioContext)();
    return () => {
      audioContextRef.current.close();
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
      <TypeSelector waveform={waveform} waveformOptions={waveformOptions} onChange={handleChangeWaveForm}/>
      <div className="tecla-wrapper">
        <button className='blanca' onClick={()=>playSound('C')}><span className={`${showReferences ? 'show' : ''}`}>q</span></button>
        <button className='blanca' onClick={()=>playSound('D')}><span className={`${showReferences ? 'show' : ''}`}>w</span></button>
        <button className='blanca' onClick={()=>playSound('E')}><span className={`${showReferences ? 'show' : ''}`}>e</span></button>
        <button className='blanca' onClick={()=>playSound('F')}><span className={`${showReferences ? 'show' : ''}`}>r</span></button>
        <button className='blanca' onClick={()=>playSound('G')}><span className={`${showReferences ? 'show' : ''}`}>t</span></button>
        <button className='blanca' onClick={()=>playSound('A')}><span className={`${showReferences ? 'show' : ''}`}>y</span></button>
      </div>
    </div>
  );
});

export default PianoSounds;

