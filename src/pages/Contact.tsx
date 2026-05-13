import ContactHero from "../content/contact/hero";
import ContactForm from "../content/contact/contactForm";
import OfficeInfo from "../content/contact/officeInfo";

const Contact = () => (
  <>
    <ContactHero />
    <section className="contact-body section">
      <div className="contact-body__grid">
        <OfficeInfo />
        <ContactForm />
      </div>
    </section>
  </>
);

export default Contact;