export default function Contact() {
  return (
    <div>
      <h1 className="page-title">Contact me!</h1>
      <main className="page-title">
        <h2>Contact me:</h2>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
