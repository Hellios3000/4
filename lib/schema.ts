export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "BarberWeb UA",
  "url": "https://barberweb.com.ua",
  "logo": "https://barberweb.com.ua/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+38-0XX-XXX-XX-XX",
    "contactType": "sales",
    "areaServed": "UA",
    "availableLanguage": ["Ukrainian"]
  }
};

export const getServiceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "BarberWeb UA"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Ukraine"
  }
});

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Скільки часу займає розробка сайту для барбершопа?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Розробка стандартного сайту займає від 7 до 21 дня залежно від складності та функціоналу."
      }
    },
    {
      "@type": "Question",
      "name": "Чи входить онлайн-запис у вартість?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так, ми інтегруємо популярні системи онлайн-запису, такі як Altegio або YCLIENTS, у будь-який наш пакет."
      }
    }
  ]
};