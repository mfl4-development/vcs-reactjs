const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className='w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-95'
      placeholder={placeholder}
    />
  );
};

export default Input;
