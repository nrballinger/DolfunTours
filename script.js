async function loadDesign() {
  const res = await fetch('./design.json');
  const data = await res.json();
  document.title = `${data.business.name} | ${data.business.tagline}`;
  document.getElementById('hero-eyebrow').textContent = data.hero.eyebrow;
  document.getElementById('hero-headline').textContent = data.hero.headline;
  document.getElementById('hero-text').textContent = data.hero.text;
  document.getElementById('book-button').textContent = data.hero.primaryButton;
  document.getElementById('book-button').href = data.business.bookingUrl;
  document.getElementById('call-button').textContent = data.hero.secondaryButton;
  document.getElementById('call-button').href = `tel:${data.business.phone.replace(/[^0-9]/g, '')}`;

  document.getElementById('highlights').innerHTML = data.highlights.map(item => `<div>${item}</div>`).join('');
  document.getElementById('tour-cards').innerHTML = data.tours.map(tour => `
    <article class="card">
      <h3>${tour.title}</h3>
      <div class="price">${tour.price}</div>
      <p>${tour.description}</p>
      <ul>${tour.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
      <a class="button primary" href="${data.business.bookingUrl}">Book This Tour</a>
    </article>
  `).join('');
  document.getElementById('review-cards').innerHTML = data.reviews.map(review => `
    <article class="review">
      <blockquote>“${review.quote}”</blockquote>
      <strong>${review.name}</strong>
    </article>
  `).join('');
  document.getElementById('business-name').textContent = data.business.name;
  document.getElementById('business-location').textContent = data.business.location;
  document.getElementById('final-book').href = data.business.bookingUrl;
  document.getElementById('final-call').href = `tel:${data.business.phone.replace(/[^0-9]/g, '')}`;
  document.getElementById('final-call').textContent = `Call ${data.business.phone}`;
  document.getElementById('faq-list').innerHTML = data.faq.map(item => `
    <div class="faq-item">
      <h3>${item.question}</h3>
      <p>${item.answer}</p>
    </div>
  `).join('');
  document.getElementById('year').textContent = new Date().getFullYear();
}
loadDesign();
