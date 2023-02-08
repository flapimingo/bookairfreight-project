import './TextInput.css';

const TextInput = (props) => {
  return (
    <div className="TextInput">
      <p>{props.text}</p>
    </div>
  );
}

export default TextInput;
