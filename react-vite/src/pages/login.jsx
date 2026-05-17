import AuthLayout from '../components/layouts/AuthLayout';
import LoginForm from '../components/fragments/LoginForm';

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
