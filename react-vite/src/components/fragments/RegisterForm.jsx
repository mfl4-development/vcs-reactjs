import LabelInput from '../elements/LabelInput';
import Button from '../elements/Button';

/**
 * Komponen form registrasi yang digunakan untuk menampilkan form registrasi.
 *
 * @component
 * @returns {JSX.Element} - Komponen form registrasi.
 */

const RegisterForm = () => {
  return (
    <form action=''>
      <LabelInput name='name' type='text' placeholder='name' label='Nama' />
      <LabelInput name='email' type='email' placeholder='email' label='Email' />
      <LabelInput name='password' type='password' placeholder='******' label='Password' />
      <Button variant='bg-blue-600 w-full'>Register</Button>
    </form>
  );
};

export default RegisterForm;
