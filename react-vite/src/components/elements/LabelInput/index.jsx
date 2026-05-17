import Input from './Input';
import Label from './Label';

/**
 * Komponen input yang terdiri dari label dan input.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen LabelInput.
 * @param {string} props.name - Nama input yang digunakan untuk mengidentifikasi input tersebut.
 * @param {string} props.label - Label yang ditampilkan di samping input.
 * @param {string} props.type - Tipe input (misalnya: 'text', 'password', 'number', dll.).
 * @param {string} props.placeholder - Placeholder yang ditampilkan di input.
 * @returns {JSX.Element} - Komponen input.
 */

const LabelInput = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className='mb-4'>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default LabelInput;
