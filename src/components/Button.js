import './Button.css';

const Button = (props) => {
  return (
    <div className="Button">
      <button>
        <span className='text-span'>{props.text}</span>
      </button>
    </div>
  );
}

export default Button;
