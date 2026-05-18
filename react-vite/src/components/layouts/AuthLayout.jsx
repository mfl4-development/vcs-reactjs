import { Link } from 'react-router';

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-xs'>
        <h1 className='mb-2 text-3xl font-bold text-blue-600'>{title}</h1>
        <p className='mb-6 font-medium text-slate-500'>Welcome, please enter your details</p>
        {children}
        <p className='text-sm mt-4 text-center'>
          {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
          {type === 'login' && (
            <Link
              to='/register'
              className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'
            >
              Register
            </Link>
          )}
          {type === 'register' && (
            <Link
              to='/login'
              className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'
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
      <p className='text-sm mt-4 text-center'>
        Don't have an account?{' '}
        <Link
          to='/register'
          className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className='text-sm mt-4 text-center'>
        Already have an account?{' '}
        <Link
          to='/login'
          className='text-blue-500 font-bold hover:underline transition duration-300 ease-in-out'
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
