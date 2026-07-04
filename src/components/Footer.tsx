import { useState, type FormEvent } from "react";
import { config } from "../config";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "./Icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo-white.png" alt="Easy Clinics" width={148} height={44} />
            <p>
              Jouw partner in leefstijl, voeding en balans. Persoonlijke begeleiding naar een
              vitaler leven, vanuit onze kliniek in Almere.
            </p>
            <div className="footer-socials">
              <a href={config.socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href={config.socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href={config.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3>Openingstijden</h3>
            <table className="hours-table">
              <tbody>
                {config.openingHours.map(({ day, hours }) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-list">
              <li>
                <a href={config.phoneHref} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                  <Phone size={16} /> {config.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${config.email}`} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                  <Mail size={16} /> {config.email}
                </a>
              </li>
              <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ marginTop: 4 }}>
                  <MapPin size={16} />
                </span>
                <span>
                  {config.address.street}
                  <br />
                  {config.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Nieuwsbrief</h3>
            <p style={{ color: "#9fb0ba" }}>
              Ontvang tips over voeding, vitaliteit en onze nieuwste behandelingen.
            </p>
            {subscribed ? (
              <p role="status" style={{ color: "#a8d5a2", marginTop: 16, fontWeight: 600 }}>
                Bedankt voor je aanmelding!
              </p>
            ) : (
              <form className="newsletter" onSubmit={onSubscribe}>
                <label htmlFor="newsletter-email" className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                  E-mailadres
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="jouw@email.nl"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button type="submit">Aanmelden</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Easy Clinics, Almere. Alle rechten voorbehouden.</span>
          <ul className="footer-legal">
            <li>
              <a href="#">Algemene voorwaarden</a>
            </li>
            <li>
              <a href="#">Privacyverklaring</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
