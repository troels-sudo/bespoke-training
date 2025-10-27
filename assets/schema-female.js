// schema-female.js — Female Personal Training structured data
const schemaFemale = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Female Personal Training",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bespoke Training Dubai",
    "url": "https://bespoketrainingdubai.ae/female-personal-trainer-dubai.html",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Into The Room, Dubai Hills",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971506944526"
  },
  "areaServed": ["Dubai Hills","Downtown","Marina","Palm"],
  "description": "Private female personal training — confidential sessions designed around physiology and longevity.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "49000",
    "availability": "https://schema.org/InStock",
    "url": "https://bespoketrainingdubai.ae/contact.html"
  }
};
const s2 = document.createElement('script');
s2.type = 'application/ld+json';
s2.text = JSON.stringify(schemaFemale);
document.head.appendChild(s2);
