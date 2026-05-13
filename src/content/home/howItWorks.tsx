const features = [
  {
    icon: "📦",
    color: "#2563eb",
    title: "Load Management",
    desc: "Create, assign and manage loads efficiently.",
  },
  {
    icon: "👤",
    color: "#16a34a",
    title: "Driver Management",
    desc: "Manage drivers, documents and performance.",
  },
  {
    icon: "🚛",
    color: "#9333ea",
    title: "Truck Management",
    desc: "Track trucks, maintenance and availability.",
  },
  {
    icon: "📍",
    color: "#ea580c",
    title: "Real-time Tracking",
    desc: "Track every shipment in real-time on map.",
  },
  {
    icon: "📄",
    color: "#0891b2",
    title: "POD & Documents",
    desc: "Capture proof of delivery and manage documents.",
  },
  {
    icon: "💳",
    color: "#d97706",
    title: "Payments & Invoices",
    desc: "Generate invoices and track payments easily.",
  },
];

const HowItWorks = () => (
  <section className="section how-it-works">
    <div className="section__header">
      <h2>Everything You Need</h2>
      <p>One platform to run your entire logistics operation.</p>
    </div>
    <div className="feature-grid">
      {features.map((f) => (
        <div key={f.title} className="feature-card">
          <div
            className="feature-card__icon"
            style={{ background: `${f.color}18`, color: f.color }}
          >
            {f.icon}
          </div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;