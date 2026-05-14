const info = [
  { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
  { icon: "✉️", label: "Email", value: "info@truckdispatcher.com" },
  { icon: "📍", label: "Address", value: "123 Logistics Way, Chicago, IL 60601, USA" },
  { icon: "🕐", label: "Business Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM\nSat–Sun: Closed" },
];

const OfficeInfo = () => (
  <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-card flex flex-col gap-0">
    <h3 className="text-base font-semibold text-slate-900 mb-6">Get in Touch</h3>
    <div className="flex flex-col gap-5 mb-6">
      {info.map((item) => (
        <div key={item.label} className="flex gap-3.5 items-start">
          <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-base shrink-0">
            {item.icon}
          </div>
          <div>
            <strong className="text-[10px] uppercase tracking-wider text-slate-400 block mb-0.5">{item.label}</strong>
            <p className="text-slate-700 text-sm leading-5" style={{ whiteSpace: "pre-line" }}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="rounded-lg overflow-hidden h-[200px] mt-auto">
      <iframe
        title="Office location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDcuMyJX!5e0!3m2!1sen!2sus!4v1"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-none"
      />
    </div>
  </div>
);

export default OfficeInfo;
