import { Link } from 'react-router';
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
      <p className='text-sm mt-4 text-center'>
        Have an account?{' '}
        <Link
          to='/login'
          className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
