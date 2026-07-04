import { useEffect, useState } from "react";
import { config } from "../config";
import { Link, useRouter } from "../router";
import { Close, Menu } from "./Icons";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/#behandelingen", label: "Behandelingen" },
  { to: "/#recepten", label: "Recepten" },
  { to: "/#contact", label: "Contact" },
];

export function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <div className="container">
        <Link to="/" className="brand" aria-label="Easy Clinics – home">
          <img src="/logo.svg" alt="Easy Clinics" width={148} height={44} />
        </Link>
        <nav aria-label="Hoofdnavigatie">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.to}>
                <Link to={item.to} aria-current={path === item.to ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary header-cta" href={config.bookingUrl}>
          Afspraak maken
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
