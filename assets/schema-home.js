// schema-home.js — Home Personal Training structured data
const schemaHome = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Personal Training",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bespoke Training Dubai",
    "url": "https://bespoketrainingdubai.ae/home-personal-trainer-dubai.html",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Into The Room, Dubai Hills",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971506944526"
  },
  "areaServed": ["Dubai Hills","Downtown","DIFC","Palm"],
  "description": "Private home personal training delivered across Dubai. Precision coaching systems adapted to your residence.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "49000",
    "availability": "https://schema.org/InStock",
    "url": "https://bespoketrainingdubai.ae/contact.html"
  }
};
const s3 = document.createElement('script');
s3.type = 'application/ld+json';
s3.text = JSON.stringify(schemaHome);
document.head.appendChild(s3);
