// schema.js — global JSON-LD markup for Bespoke Training Dubai
const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "name": "Bespoke Training Dubai",
  "image": "https://bespoketrainingdubai.ae/assets/desktop/hero-desktop.jpg",
  "url": "https://bespoketrainingdubai.ae",
  "logo": "https://bespoketrainingdubai.ae/assets/icons/favicon.ico",
  "description": "Private executive personal training in Dubai Hills. Diagnostics-driven systems for strength, longevity, and performance.",
  "telephone": "+971506944526",
  "email": "hello@bespoketrainingdubai.ae",
  "priceRange": "AED49000+",
  "founder": {
    "@type": "Person",
    "name": "Troels Andersen",
    "jobTitle": "Founder & Head Coach",
    "sameAs": ["https://www.linkedin.com/in/troelsandersen/"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Into The Room, Dubai Hills",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.1375",
    "longitude": "55.2218"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "06:00",
    "closes": "21:00"
  }],
  "sameAs": [
    "https://bespoketrainingdubai.ae",
    "https://goo.gl/maps/"
  ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schema);
document.head.appendChild(script);
