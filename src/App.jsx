import './App.css'
import React, {useEffect, useRef} from 'react'
import PianoSounds from './components/PianoSounds'

function App() {
  const pianoSoundsRef = useRef(null);
  const keyNoteMap={
    q: 'A3',
    w: 'A_3',
    e: 'C3',
    r: 'C_3',
    t: 'D3',
    y: 'D_3',
    u: 'E3',
    i: 'F3',
    o: 'F_3',
    p:'G3',
    a:'G_3',
    s: 'A4',
    d: 'A_4',
    f: 'B4',
    g: 'C4',
    h: 'C_4',
    j: 'D4',
    k: 'D_4',
    l: 'E4',
    z: 'F4', 
    x: 'F_4',
    c: 'G4',
    v: 'G_4',
    b: 'A5',
    n: 'A_5',
    m: 'B5',
    '1': 'C5',
    '2': 'C_5',
    '3': 'D5',
    '4': 'D_5',
    '5': 'E5',
    '6': 'F5',
    '7':'F_5',
    '8':'G5',
    '9':'G_5',
    '0':'C6'
  }

  useEffect(()=>{
    const handleKeyDown=(event)=>{
      const key = event.key.toLowerCase();
      const note=keyNoteMap[key];
      if(note && pianoSoundsRef.current){
        pianoSoundsRef.current.playSound(note);
      };
    };
    window.addEventListener('keydown',handleKeyDown);

    return ()=>{
      window.removeEventListener('keydown',handleKeyDown);
    };
  }, [keyNoteMap]);

  return (
    <div>
      <PianoSounds ref={pianoSoundsRef} />
    </div>
  );
}
export default App;
