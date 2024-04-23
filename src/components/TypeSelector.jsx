import React from 'react';
import './TypeSelector.css'

const TypeSelector = ({ waveform, waveformOptions, onChange }) => {
  return (
    <div className="type-selector">
      <label htmlFor="waveformSelect">Tipo de onda:</label>
      <select className='input' id="waveformSelect" value={waveform} onChange={onChange}>
        {waveformOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelector;
