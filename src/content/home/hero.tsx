import { Link } from "react-router-dom";

const Hero = () => (
  <section className="w-full bg-white py-20 px-5 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-slate-900 mb-5">
          Smart Dispatching.<br />
          <span className="text-primary">Stronger Deliveries.</span>
        </h1>
        <p className="text-base text-slate-500 leading-7 mb-8 max-w-[480px]">
          A complete logistics and dispatch management system to manage trucks,
          drivers, loads, tracking, POD, payments and more.
        </p>
        <div className="flex gap-3 flex-wrap mb-10">
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-1.5 py-3 px-7 rounded-lg font-semibold text-base bg-primary text-white border-2 border-primary transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-1.5 py-3 px-7 rounded-lg font-semibold text-base bg-white text-slate-700 border-2 border-slate-300 transition-all duration-150 hover:bg-slate-50"
          >
            Learn More
          </Link>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          {[
            { icon: "📍", label: "Real-time Tracking" },
            { icon: "⚡", label: "Smart Dispatch" },
            { icon: "🔒", label: "Secure & Reliable" },
            { icon: "🕐", label: "24/7 Support" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"
            >
              <span>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="rounded-2xl overflow-hidden shadow-modal aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop"
            alt="Truck on highway"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
