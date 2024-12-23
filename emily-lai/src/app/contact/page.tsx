import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <main className="page-title">
        <h1>Contact me!</h1>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
      <footer className="footer">
        © 2024 Emily's Website | All Rights Reserved
      </footer>
    </>
  );
};

export default ContactPage;
