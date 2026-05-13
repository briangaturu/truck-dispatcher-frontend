const stats = [
  { value: "128+", label: "Total Loads" },
  { value: "74+", label: "Drivers" },
  { value: "48+", label: "Trucks" },
  { value: "98%", label: "On-time Delivery" },
];

const reasons = [
  { icon: "✅", text: "All-in-one logistics solution" },
  { icon: "✅", text: "Real-time visibility and tracking" },
  { icon: "✅", text: "Trusted by logistics professionals" },
  { icon: "✅", text: "Easy to use and powerful" },
];

const WhyChooseUs = () => (
  <section className="section why-us">
    <div className="why-us__grid">
      <div className="why-us__image">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&auto=format&fit=crop"
          alt="Mountains and truck"
        />
      </div>
      <div className="why-us__content">
        <h2>Why Choose Truck Dispatcher?</h2>
        <div className="why-us__stats">
          {stats.map((s) => (
            <div key={s.label} className="why-us__stat">
              <span className="why-us__stat-val">{s.value}</span>
              <span className="why-us__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <ul className="why-us__reasons">
          {reasons.map((r) => (
            <li key={r.text}>
              <span>{r.icon}</span> {r.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;