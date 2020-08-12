import React, { Component} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from './schema';
import Recaptcha from '../Recaptcha/Recaptcha';

class Login extends Component {
   state = {

   }

   static propTypes = {

   }

   static defaultProps = {

   }

   render(){
       return (
        <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
                const token = await window.grecaptcha
                .execute("6LeNGL0ZAAAAAI3-xmkpu_66JnJwCM--V30miIxE", { action: "loginpage" });
                console.log(`Recaptcha token: ${token}`);
                const response = await fetch(`https://recaptcha.net/recaptcha/api/siteverify?secret=6LeNGL0ZAAAAAHCbfPPJ8l8CcddeyYjDnk-p_EYD&response=${token}`);
                const result = await response.json();
                console.log(`result: ${JSON.stringify(result)}`);

                setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
                }, 500);
            }}
            >
            {formikProps => (
                <Form>
                    <Field type="text" name="username" placeholder="Email" value={formikProps.values.username} />
                    <ErrorMessage name="username" />
                    <Field type="password" name="password" placeholder="Password" value={formikProps.values.password} />
                    <ErrorMessage name="password" />
                    <button type="submit">Submit</button>
                    <Recaptcha />
                </Form>
            )}
        </Formik>
       )
   }
}

export default Login;