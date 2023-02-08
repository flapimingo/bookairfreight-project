import './Input.css';

const Input = ({ label, type, options, value, name, onChange }) => {
  return (
    <div className="Input">
      {label && <label>{label}</label>}
      {type === 'select' && options && (
        <select value={value} onChange={onChange} name={name}>
          {options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))}
        </select>
      )}
      {['number','text'].includes(type) && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Input;
