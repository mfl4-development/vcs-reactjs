const Button = (props) => {
  const { variant = 'bg-black', text } = props;
  return (
    <button className={`h-10 px-6 font-semibold text-white ${variant} rounded-md`} type='submit'>
      {text}
      {props.children}
    </button>
  );
};

export default Button;
