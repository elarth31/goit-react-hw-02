const Button = ({ type = 'button', onClick, label }) => {
  return (
    <button
      onClick={() => onClick(label.toLowerCase())} 
      type={type}
      aria-label={`button ${label}`}
    >
      {label}  
    </button>
  );
};

export default Button;
