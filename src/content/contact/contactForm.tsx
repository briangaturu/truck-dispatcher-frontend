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
    <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-card">
      <h3 className="text-base font-semibold text-slate-900 mb-6">Send Us a Message</h3>
      {sent ? (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
          ✅ Message sent! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500">Your Name</label>
              <input
                name="name"
                placeholder="John Kamau"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-500">Your Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-500">Subject</label>
            <input
              name="subject"
              placeholder="How can we help?"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-500">Message</label>
            <textarea
              name="message"
              placeholder="Tell us more about your inquiry..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm text-slate-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
            />
          </div>
          <button type="submit" className="td-btn td-btn--primary td-btn--full">
            Send Message →
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
