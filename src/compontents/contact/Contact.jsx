import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariants = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_username.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.user_message.value.trim();

    if (!name || !email || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (err) => {
          console.log(err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="contact" ref={ref}>
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__inner">
        <div className="contact__form-side">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={listVariants}
            animate={isInView ? "animate" : "initial"}
            className="contact__form"
          >
            <motion.div variants={listVariants} className="contact__field">
              <label>Name</label>
              <input
                type="text"
                name="user_username"
                placeholder="Enter your name"
              />
            </motion.div>

            <motion.div variants={listVariants} className="contact__field">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div variants={listVariants} className="contact__field">
              <label>Message</label>
              <textarea
                rows={6}
                name="user_message"
                placeholder="Write your message..."
              />
            </motion.div>

            <motion.button
              variants={listVariants}
              className="contact__submit"
              type="submit"
            >
              Send Message
            </motion.button>

            {success && (
              <span className="contact__msg contact__msg--success">
                ✅ Your message has been sent!
              </span>
            )}
            {error && (
              <span className="contact__msg contact__msg--error">
                ⚠️ All fields are required. Please fill in every field.
              </span>
            )}
          </motion.form>
        </div>
        <div className="contact__svg-side">
          <ContactSvg />
        </div>
      </div>
    </div>
  );
};

export default Contact;