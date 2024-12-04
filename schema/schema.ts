import * as Yup from 'yup';

export const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Minimum Password Lenght Can Be 4')
    .max(16, 'Maximum Password Lenght Can Be 16')
    .required('Password Lenght Is Required'),
});
