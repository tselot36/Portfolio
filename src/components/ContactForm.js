
import React, { useState } from 'react';
import Button from "./Button";
import { DisplayCharacterCount } from "../Utils/DisplayCharacterCount";
import request from "../Utils/request";
import { validateContact } from "../validations/validateContact";
import { ToastContainer, toast } from "react-toastify";
import "../styles/error.css";
import "../styles/form.css";

const ContactForm = () => {
    const emailTo = "jonasmachado.ti@gmail.com";

    const [contactForm, setContactForm] = useState({
        ownerRef: "",
        emailFrom: "",
        subject: "",
        text: "",
    });

    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        const updatedErrors = { ...validationErrors.errors };

        updatedErrors[name] = null;

        setValidationErrors({ errors: updatedErrors });

        setContactForm({
            ...contactForm,
            [name]: value,
        });
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        const errors = await validateContact(contactForm);

        setValidationErrors(errors);

        const newUser = {
            ownerRef: contactForm.ownerRef,
            emailFrom: contactForm.emailFrom,
            emailTo: emailTo,
            subject: contactForm.subject,
            text: contactForm.text,
        };

        if (errors.isValid) {
            const toastOptions = {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            };

            request
                .createUser(newUser)
                .then(() => toast.success("Message sent successfully!!", toastOptions))
                .catch(() =>
                    toast.error("Message was not sent!!!", {
                        ...toastOptions,
                        autoClose: 9000,
                    })
                );
        }
    };

    return (
        <div>
            <form className="form">
                <div className="form-group">
                    <label className="form-label"> Your Name *</label>
                    <input
                        type="text"
                        placeholder="Type your name"
                        name="ownerRef"
                        className="form-input"
                        value={contactForm.ownerRef}
                        onChange={handleChange}
                    ></input>
                    {validationErrors.errors && validationErrors.errors.ownerRef && (
                        <div className="error-message">
                            {validationErrors.errors.ownerRef}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label"> Your Email *</label>
                    <input
                        type="text"
                        placeholder="Type your e-mail"
                        name="emailFrom"
                        className="form-input"
                        value={contactForm.emailFrom}
                        onChange={handleChange}
                    ></input>
                    {validationErrors.errors && validationErrors.errors.emailFrom && (
                        <div className="error-message">
                            {validationErrors.errors.emailFrom}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                        type="text"
                        placeholder="Type your subject"
                        name="subject"
                        className="form-input"
                        value={contactForm.subject}
                        onChange={handleChange}
                    ></input>
                    {validationErrors.errors && validationErrors.errors.subject && (
                        <div className="error-message">
                            {validationErrors.errors.subject}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label"> Message *</label>

                    <textarea
                        maxLength="140"
                        data-max-chars="140"
                        type="text"
                        placeholder="Type your message here.."
                        name="text"
                        value={contactForm.text}
                        onChange={handleChange}
                        onInput={DisplayCharacterCount}
                        className="form-textarea count-chars"
                    ></textarea>

                    <div className="char-count-error"></div>

                    {validationErrors.errors && validationErrors.errors.text && (
                        <div className="error-message">{validationErrors.errors.text}</div>
                    )}
                </div>

                <div>
                    <Button
                        buttonName={"Send Message"}
                        onClickFunction={handleSendMessage}
                    />
                </div>
            </form>

            <div>
                <ToastContainer style={{ marginTop: "70px" }} />
            </div>
        </div>
    );
};

export default ContactForm;
