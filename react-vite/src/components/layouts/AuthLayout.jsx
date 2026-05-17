/**
 * Komponen layout yang digunakan untuk menampilkan form login atau registrasi.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen AuthLayout.
 * @param {string} props.title - Judul yang ditampilkan di atas form.
 * @param {ReactNode} props.children - Konten form login atau registrasi.
 * @returns {JSX.Element} - Komponen layout.
 */

const AuthLayout = (props) => {
  const { title, children } = props;
  return (
    <div className='w-full max-w-xs'>
      <h1 className='mb-2 text-3xl font-bold text-blue-600'>{title}</h1>
      <p className='mb-8 font-medium text-slate-500'>
        Selamat datang, silakan masukkan detail Anda
      </p>
      {children}
    </div>
  );
};

export default AuthLayout;
