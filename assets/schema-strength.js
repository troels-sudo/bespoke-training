// schema-strength.js — Strength Coaching structured data
const schemaStrength = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Strength Coaching",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bespoke Training Dubai",
    "url": "https://bespoketrainingdubai.ae/strength-coach-dubai.html",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Into The Room, Dubai Hills",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971506944526"
  },
  "areaServed": ["Dubai Hills","Downtown","Marina","DIFC","Palm"],
  "description": "Private strength coaching for executives — diagnostics, precision, and measurable results.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "49000",
    "availability": "https://schema.org/InStock",
    "url": "https://bespoketrainingdubai.ae/contact.html"
  }
};
const s1 = document.createElement('script');
s1.type = 'application/ld+json';
s1.text = JSON.stringify(schemaStrength);
document.head.appendChild(s1);
