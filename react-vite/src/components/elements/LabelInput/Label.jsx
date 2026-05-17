/**
 * Komponen label yang digunakan untuk memberikan label pada input form.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen Label.
 * @param {string} props.htmlFor - ID dari elemen input yang terkait dengan label.
 * @param {ReactNode} props.children - Teks atau elemen konten yang ditampilkan di dalam label.
 * @returns {JSX.Element} - Komponen label.
 */

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className='block mb-2 text-sm font-bold text-slate-700'>
      {children}
    </label>
  );
};

export default Label;
