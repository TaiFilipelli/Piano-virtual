import './App.css'
import React, {useEffect, useRef} from 'react'
import PianoSounds from './components/PianoSounds'

function App() {
  const pianoSoundsRef = useRef(null);
  const keyNoteMap={
    q: 'C',
    w: 'D',
    e: 'E',
    r: 'F',
    t: 'G',
    y:'A',
    u:'B'
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
