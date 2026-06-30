import React from 'react';
import { createRoot } from 'react-dom/client';
import { Anchor, CalendarCheck, Camera, ChevronRight, MapPin, Phone, ShieldCheck, Star, Waves } from 'lucide-react';
import design from './design.json';
import './styles.css';

const phoneHref = `tel:${design.brand.phone.replace(/[^0-9]/g, '')}`;

function App() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="logo"><span>🐬</span>{design.brand.name}</a>
        <nav>
          <a href="#tours">Tours</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href={design.brand.bookingUrl}>Book Now</a>
        </nav>
      </header>

      <section id="home" className="hero" style={{backgroundImage: `linear-gradient(90deg, rgba(2,32,48,.88), rgba(2,32,48,.35)), url(${design.hero.image})`}}>
        <div className="hero-content">
          <p className="eyebrow"><Waves size={18}/>{design.hero.eyebrow}</p>
          <h1>{design.hero.headline}</h1>
          <p className="hero-subtitle">{design.hero.subheadline}</p>
          <div className="hero-actions">
            <a className="btn primary" href={design.brand.bookingUrl}>{design.hero.primaryCta}<ChevronRight size={20}/></a>
            <a className="btn secondary" href={phoneHref}><Phone size={20}/>{design.hero.secondaryCta}</a>
          </div>
          <div className="hero-card">
            <Star size={20}/>
            <span>Affordable dolphin & manatee tours departing from {design.brand.location}.</span>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        {design.trustBar.map((item) => <div key={item}><ShieldCheck size={18}/>{item}</div>)}
      </section>

      <section id="tours" className="section tours-section">
        <div className="section-heading">
          <p className="eyebrow dark"><CalendarCheck size={18}/>Choose Your Tour</p>
          <h2>Simple pricing. Big memories.</h2>
          <p>Make booking easy with clear tour cards, strong calls-to-action, and mobile-friendly buttons.</p>
        </div>
        <div className="tour-grid">
          {design.tourCards.map((tour) => (
            <article className="tour-card" key={tour.title}>
              <h3>{tour.title}</h3>
              <div className="price">{tour.price}</div>
              <p className="detail">{tour.detail}</p>
              <ul>{tour.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="btn primary full" href={design.brand.bookingUrl}>{tour.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow dark"><Anchor size={18}/>Why Guests Love It</p>
          <h2>Built to make visitors trust the business fast.</h2>
          <p className="lead">This design pushes the most important booking drivers: wildlife, safety, local expertise, family-friendly experience, and clear pricing.</p>
        </div>
        <div className="feature-list">
          {design.whyChoose.map((item) => (
            <div className="feature" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-heading">
          <p className="eyebrow dark"><Camera size={18}/>Gallery</p>
          <h2>Show the experience before they book.</h2>
        </div>
        <div className="gallery-grid">
          {design.gallery.map((img, idx) => <img src={img} alt={`DolFun Tours wildlife and water view ${idx + 1}`} key={img}/>) }
        </div>
      </section>

      <section id="reviews" className="section reviews-section">
        <div className="section-heading">
          <p className="eyebrow dark"><Star size={18}/>Guest Reviews</p>
          <h2>Social proof front and center.</h2>
        </div>
        <div className="review-grid">
          {design.reviews.map((review) => (
            <article className="review-card" key={review.quote}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow dark"><MapPin size={18}/>Plan Your Trip</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {design.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to see dolphins?</h2>
        <p>Book your DolFun Tours experience today.</p>
        <div className="hero-actions center">
          <a className="btn primary" href={design.brand.bookingUrl}>Book Now</a>
          <a className="btn secondary light" href={phoneHref}><Phone size={20}/>{design.brand.phone}</a>
        </div>
      </section>

      <footer>
        <strong>{design.brand.name}</strong>
        <span>{design.brand.tagline}</span>
        <span>{design.brand.location}</span>
        <span>{design.brand.phone}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
