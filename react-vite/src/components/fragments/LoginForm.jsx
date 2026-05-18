import Button from '../elements/Button';
import LabelInput from '../elements/LabelInput';

const LoginForm = () => {
  return (
    <form action=''>
      <LabelInput name='email' type='email' placeholder='email' label='Email' />
      <LabelInput name='password' type='password' placeholder='******' label='Password' />
      <Button variant='bg-blue-600 w-full'>Login</Button>
    </form>
  );
};

export default LoginForm;
