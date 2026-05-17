import { Link } from 'react-router';
import LoginForm from '../components/fragments/LoginForm';
import AuthLayout from '../components/layouts/AuthLayout';

/**
 * Halaman login yang menampilkan form login.
 *
 * @component
 * @returns {JSX.Element} - Komponen halaman login.
 */

const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <LoginForm />
      <p className='text-sm mt-4 text-center'>
        Don't have an account?{' '}
        <Link
          to='/register'
          className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
