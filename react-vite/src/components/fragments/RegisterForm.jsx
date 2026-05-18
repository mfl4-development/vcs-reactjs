import Button from '../elements/Button';
import LabelInput from '../elements/LabelInput';

const RegisterForm = () => {
  return (
    <form action=''>
      <LabelInput name='name' type='text' placeholder='name' label='Nama' />
      <LabelInput name='email' type='email' placeholder='email' label='Email' />
      <LabelInput name='password' type='password' placeholder='******' label='Password' />
      <LabelInput
        name='confirmPassword'
        type='password'
        placeholder='******'
        label='Confirm Password'
      />
      <Button variant='bg-blue-600 w-full'>Register</Button>
    </form>
  );
};

export default RegisterForm;
