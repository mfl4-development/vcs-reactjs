import { Link } from 'react-router';

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-xs'>
        <h1 className='mb-2 text-3xl font-bold text-blue-600'>{title}</h1>
        <p className='mb-6 font-medium text-slate-500'>Welcome, please enter your details</p>
        {children}
        <p className='mt-4 text-center text-sm'>
          {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
          {type === 'login' && (
            <Link
              to='/register'
              className='font-bold text-blue-500 transition duration-300 ease-in-out hover:underline'
            >
              Register
            </Link>
          )}
          {type === 'register' && (
            <Link
              to='/login'
              className='font-bold text-blue-500 transition duration-300 ease-in-out hover:underline'
            >
              Login
            </Link>
          )}
        </p>
        {/* <Navigation type={type} /> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className='mt-4 text-center text-sm'>
        Don't have an account?{' '}
        <Link
          to='/register'
          className='font-bold text-blue-500 transition duration-300 ease-in-out hover:underline'
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className='mt-4 text-center text-sm'>
        Already have an account?{' '}
        <Link
          to='/login'
          className='font-bold text-blue-500 transition duration-300 ease-in-out hover:underline'
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
