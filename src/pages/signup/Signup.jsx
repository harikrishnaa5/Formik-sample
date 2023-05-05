import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schema/index";

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: signUpSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm({ values: "" });
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <h2>Sign up</h2>

                    <div className="input-name">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                name="firstName"
                                id="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div>{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                name="lastName"
                                id="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? alert(formik.errors.lastName) : null}
                        </div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <p></p>
                    <button type="submit">Submit</button>
                    <div id="login">
                        <p>
                            Already a user? <Link to="../Login">Login</Link>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Signup;
