import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
      <h1 className='mb-2 text-3xl font-bold text-blue-600'>Oops!</h1>
      <p className='mb-8 font-medium text-slate-500'>Sorry, an unexpected error has occurred.</p>
      <h1 className='text-9xl font-bold text-blue-600 mb-4'>{error.status}</h1>
      <p className='mb-8 font-medium text-slate-500'>{error.statusText || error.message}</p>
      <Link
        to='/'
        className='mb-8 font-medium text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
