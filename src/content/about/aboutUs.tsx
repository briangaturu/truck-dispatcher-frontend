// AboutUs.tsx
export const AboutUs = () => (
  <section className="about-us section">
    <div className="about-us__grid">
      <div className="about-us__content">
        <h2>About Us</h2>
        <p>
          Truck Dispatcher is built for modern logistics companies to streamline
          operations, improve communication and deliver results.
        </p>
        <ul className="about-us__list">
          <li>✅ All-in-one logistics solution</li>
          <li>✅ Real-time visibility and tracking</li>
          <li>✅ Trusted by logistics professionals</li>
          <li>✅ Easy to use and powerful</li>
        </ul>
      </div>
      <div className="about-us__image">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop"
          alt="Truck on mountain road"
        />
      </div>
    </div>
  </section>
);

// OurMission.tsx
export const OurMission = () => (
  <section className="section mission-vision">
    <div className="mission-vision__grid">
      <div className="mission-card">
        <div className="mission-card__icon">🎯</div>
        <h3>Our Mission</h3>
        <p>
          To empower logistics companies with smart technology that simplifies
          dispatching and maximizes efficiency across every mile.
        </p>
      </div>
      <div className="mission-card">
        <div className="mission-card__icon">👁️</div>
        <h3>Our Vision</h3>
        <p>
          To become the most trusted dispatch management platform in the world,
          connecting shippers, drivers, and dispatchers seamlessly.
        </p>
      </div>
    </div>
  </section>
);

// OurStory.tsx
export const OurStory = () => (
  <section className="section our-story">
    <div className="section__header">
      <h2>Our Story</h2>
    </div>
    <div className="our-story__content">
      <p>
        Founded by logistics veterans who were tired of juggling spreadsheets,
        phone calls, and disconnected software, Truck Dispatcher was born out of
        a simple need: one place to manage everything. From the first load to
        the final invoice, we've built the tools you actually need.
      </p>
    </div>
  </section>
);