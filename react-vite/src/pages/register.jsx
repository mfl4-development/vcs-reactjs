import RegisterForm from '../components/fragments/RegisterForm';
import AuthLayout from '../components/layouts/AuthLayout';

/**
 * Halaman registrasi yang menampilkan form registrasi.
 *
 * @component
 * @returns {JSX.Element} - Komponen halaman registrasi.
 */

const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
