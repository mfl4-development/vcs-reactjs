/**
 * Komponen Button yang digunakan untuk membuat tombol interaktif.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen Button.
 * @param {string} [props.variant='bg-black'] - Variasi tampilan tombol. Default adalah 'bg-black'.
 * @param {string} props.text - Teks yang ditampilkan di tombol.
 * @returns {JSX.Element} - Komponen Button.
 */

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
