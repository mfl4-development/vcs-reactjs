/**
 * Komponen input yang digunakan untuk menerima input dari pengguna.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen Input.
 * @param {string} props.type - Tipe input (misalnya: 'text', 'password', 'number', dll.).
 * @param {string} props.placeholder - Placeholder yang ditampilkan di input.
 * @param {string} props.name - Nama input yang digunakan untuk mengidentifikasi input tersebut.
 * @returns {JSX.Element} - Komponen input.
 */

const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      name={name}
      className='w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-95'
      placeholder={placeholder}
    />
  );
};

export default Input;
