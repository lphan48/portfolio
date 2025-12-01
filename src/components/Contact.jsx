import { useState } from "react";
import './ContactStyles.css';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let emailRegex = /\S+@\S+\.\S+/;

    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      tempErrors.email = "Enter a valid email.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_uf1emgf",   // EmailJS service ID
          "template_uw9ynqp",  // EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "92MK4rQlu3upFjMbC"    // EmailJS public key
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response.text);
            setSubmitted(true);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    }
  };

  return (
    <div id="contact" style={{ textAlign: "center", justifyContent: "center", alignItems: "center", display: 'flex', flexDirection: 'column', marginBottom: '8vh' }}>
      <h1 className='header' style={{ marginBottom: '0' }}>Contact</h1>
      <div className="header-accent-contact"></div>
      <p className='header-description'>
        Feel free to reach out with questions, collaboration opportunities, or just to say
        hello. You can also find me on my GitHub and LinkedIn below.
      </p>

      {submitted ? (
        <h3 style={{ color: "lightgreen" }}>Thanks! Your message was sent.</h3>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "30vw",
            margin: "0 auto",
            marginTop: '3vh'
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            style={{
              padding: "0.8rem",
              border: "1px solid #ccc",
            }}
          />
          

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={{
              padding: "0.8rem",
              border: "1px solid #ccc",
            }}
          />
          

          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={5}
            style={{
              padding: "0.8rem",
              border: "1px solid #ccc",
            }}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.name}
            </span>
          )}
          {errors.email && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.email}
            </span>
          )}
          {errors.message && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.message}
            </span>
          )}

          <button
            type="submit"
            className="email-button"
            style={{ alignSelf: "flex-end" }}
          >
            SEND MESSAGE
          </button>
          
        </form>
      )}
    </div>
  );
}
