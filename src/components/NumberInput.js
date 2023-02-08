import './NumberInput.css';

const NumberInput = (props) => {
  return (
    <div className="NumberInput">
      <label>{props.text}</label>
      <input type="number"></input>
    </div>
  );
}

export default NumberInput;
