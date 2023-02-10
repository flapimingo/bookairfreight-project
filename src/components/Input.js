import './Input.css';

const Input = ({ label, type, options, value, name, min, dataSetter }) => {

  const onChange = (e) => {
    const { name, value } = e.target;
    dataSetter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      {['number', 'text'].includes(type) && (
        <input
          data-testid={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
        />
      )}
    </div>
  );
}

export default Input;
