import { useFormik } from "formik";
import { userSchema } from "../schemas/userSchema";
import "./ContactForm.css";

function ContactForm() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                username: "",
                email: "",
                message: "",
            },
            validationSchema: userSchema,
            onSubmit: (values, actions) => {
                console.log(values);
                actions.resetForm();
            },
        });

    return (
        <div>
            <h2 className="form__title">Contact Form</h2>
            <div className="form__container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.username && touched.username
                                ? "input-error"
                                : ""
                        }
                    />
                    {errors.username && touched.username && (
                        <p className="error">{errors.username}</p>
                    )}
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.email && touched.email ? "input-error" : ""
                        }
                    />
                    {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                    )}
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        cols="50"
                        placeholder="Enter your message..."
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.message && touched.message
                                ? "input-error"
                                : ""
                        }
                    />
                    {errors.message && touched.message && (
                        <p className="error">{errors.message}</p>
                    )}
                    <button type="submit" className="form__button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
