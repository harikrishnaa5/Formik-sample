import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { loginSchema } from "../../schema/index";

const Login = () => {

    const formik = useFormik({
        initialValues: {
          
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm({ values: "" });
        },
    });


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <h2>Login</h2>

                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email"
                       
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password"  onChange={formik.handleChange}
                        value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <p></p>
                    <button type="submit">Submit</button>
                    <div id="login">
                        <p>
                            New user? <Link to="../Signup">Sign up</Link>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
