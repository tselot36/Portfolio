
import * as yup from "yup";

const schema = yup.object().shape({
    ownerRef: yup
        .string()
        .required("Need to fill in your name!")
        .min(3, "Your name must be more than 3 characters!")
        .max(50, "Your name must be less than 3 characters!"),
    emailFrom: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    subject: yup
        .string()
        .required("Subject is required")
        .max(50, "Subject must not exceed 50 characters"),
    text: yup
        .string()
        .required("Message is required")
        .min(3, "Message must be at least 3 characters long")
        .max(140, "Message must not exceed 140 characters"),
});

export const validateContact = async (newUser) => {
    try {
        await schema.validate(newUser, { abortEarly: false });
        return { isValid: true, errors: null };
    } catch (err) {
        const errors = {};
        err.inner.forEach((e) => {
            errors[e.path] = e.message;
        });
        return { isValid: false, errors };
    }
};
