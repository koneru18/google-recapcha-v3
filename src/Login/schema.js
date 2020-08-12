import * as Yup from 'yup';

const schema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Minimum 5 characters are required')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Minimum 6 characters are required')
      .matches(/(?=.*[a-zA-Z])/, 'Must contain atleast one letter')
      .matches(/(?=.*[0-9])/, 'Must contain atleast one number')
      .required('Password is required'),
  });

export default schema;
