import Input from './Input';
import Label from './Label';

const LabelInput = ({ name, type, placeholder, label }) => {
  return (
    <div className='mb-4'>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default LabelInput;
