import './Button.css';

const Button = ({ label, type }) => {
  return (
    <div className="Button">
      <button type={type}>
        <span className='text-span'>{label}</span>
      </button>
    </div>
  );
}

export default Button;
