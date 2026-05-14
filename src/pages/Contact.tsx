import ContactHero from "../content/contact/hero";
import ContactSection from "../content/contact/contactSection";
import ContactForm from "../content/contact/contactForm";

const Contact = () => (
  <>
    <ContactHero />
    <ContactSection />
    <section className="w-full bg-slate-50 py-16 px-5 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </section>
  </>
);

export default Contact;
