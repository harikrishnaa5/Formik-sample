import * as Yup from "yup"

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(15).required("Please enter your First Name"),
    lastName: Yup.string().min(2).max(15).required("Please enter your Last Name"),
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(8).required("Please enter your Password"),
})

export const  loginSchema = Yup.object({
    email:Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(8).required("Please enter your Password"),
})