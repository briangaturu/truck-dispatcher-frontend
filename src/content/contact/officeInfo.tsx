const info = [
  { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
  { icon: "✉️", label: "Email", value: "info@truckdispatcher.com" },
  {
    icon: "📍",
    label: "Address",
    value: "123 Logistics Way, Chicago, IL 60601, USA",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM\nSat–Sun: Closed",
  },
];

const OfficeInfo = () => (
  <div className="office-info">
    <h3>Get in Touch</h3>
    <div className="office-info__items">
      {info.map((item) => (
        <div key={item.label} className="office-info__item">
          <span className="office-info__icon">{item.icon}</span>
          <div>
            <strong>{item.label}</strong>
            <p style={{ whiteSpace: "pre-line" }}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Simple static map placeholder */}
    <div className="office-info__map">
      <iframe
        title="Office location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDcuMyJX!5e0!3m2!1sen!2sus!4v1"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);

export default OfficeInfo;