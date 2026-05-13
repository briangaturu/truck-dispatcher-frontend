import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-form-card">
      <h3>Send Us a Message</h3>
      {sent ? (
        <div className="contact-form__success">
          ✅ Message sent! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form__row">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="td-btn td-btn--primary td-btn--full">
            Send Message ➤
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;