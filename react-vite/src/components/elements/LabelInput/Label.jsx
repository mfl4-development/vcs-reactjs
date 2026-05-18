const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className='mb-2 block text-sm font-bold text-slate-700'>
      {children}
    </label>
  );
};

export default Label;
