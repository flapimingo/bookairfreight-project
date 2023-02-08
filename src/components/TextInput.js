import './TextInput.css';

const TextInput = (props) => {
  return (
    <div className="TextInput">
      <label>{props.text}</label>
      <input type="text"></input>
    </div>
  );
}

export default TextInput;
