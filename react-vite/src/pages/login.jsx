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
    </AuthLayout>
  );
};

export default LoginPage;
