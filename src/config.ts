/**
 * Site-wide configuration. Replace placeholder URLs before go-live.
 */
export const config = {
  bookingUrl: "https://example.com/afspraak-maken", // TODO: echte booking-link
  webshopUrl: "https://example.com/webshop", // TODO: bestaande WooCommerce shop
  phone: "036 123 45 67",
  phoneHref: "tel:+31361234567",
  email: "info@easyclinics.nl",
  address: {
    street: "Veluwezoom 5",
    city: "1327 AA Almere",
  },
  socials: {
    instagram: "https://instagram.com/easyclinics",
    facebook: "https://facebook.com/easyclinics",
    linkedin: "https://linkedin.com/company/easyclinics",
  },
  openingHours: [
    { day: "Maandag", hours: "09:00 – 17:30" },
    { day: "Dinsdag", hours: "09:00 – 17:30" },
    { day: "Woensdag", hours: "09:00 – 17:30" },
    { day: "Donderdag", hours: "09:00 – 20:00" },
    { day: "Vrijdag", hours: "09:00 – 17:30" },
    { day: "Zaterdag", hours: "Op afspraak" },
    { day: "Zondag", hours: "Gesloten" },
  ],
};
