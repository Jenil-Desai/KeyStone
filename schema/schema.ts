import * as Yup from 'yup';

export const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Lenght Is 4')
    .max(16, 'Lenght Is 16')
    .required('It Is Required'),
});
