import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Username is too short")
        .max(30, "Username must be no more than 30 characters")
        .required("Required"),
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Required"),
    message: Yup.string()
        .min(10, "Message is too short")
        .max(200, "Message must be no more than 200 characters")
        .required("Required"),
});
