import { useState } from 'react';
import './SelectInput.css';

const SelectInput = (props) => {
  const [selected, setSelected] = useState();

  const handleChange = (event) => {
      setSelected(event.target.value)
  }

  return (
    <div className="SelectInput">
      <label>{props.text}</label>
      <select value={selected} onChange={handleChange}>
        {props.options.map((option, index) => (
          <option value={option} key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
