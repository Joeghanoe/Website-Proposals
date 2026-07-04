import { useEffect, useRef, useState } from "react";
import { config } from "../config";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { Link } from "../router";
import { ArrowRight, Heart, Leaf, ShoppingBag } from "../components/Icons";
import { Photo, Reveal } from "../components/shared";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hero-kicker">Leefstijl · Voeding · Balans</p>
          <h1>
            Vitaliteit begint <em>van binnenuit</em>
          </h1>
          <p className="hero-sub">
            Bij Easy Clinics in Almere combineren we medische kennis met persoonlijke aandacht.
            Van gewichtsbegeleiding en orthomoleculaire therapie tot figuurcorrectie — samen
            werken we aan een gezonder, energieker leven.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={config.bookingUrl}>
              Afspraak maken <ArrowRight />
            </a>
            <a className="btn btn-secondary" href={config.webshopUrl}>
              <ShoppingBag /> Naar de webshop
            </a>
          </div>
          <ul className="hero-meta">
            <li>
              <Leaf size={16} /> Persoonlijke begeleiding
            </li>
            <li>
              <Leaf size={16} /> MBOG-geregistreerd
            </li>
            <li>
              <Leaf size={16} /> Deels vergoed door verzekeraars
            </li>
          </ul>
        </div>
        <div className="hero-figure">
          <Photo src="/me.jpg" alt="Behandelaar van Easy Clinics" />
          <div className="hero-badge">
            <span className="dot">
              <Heart size={18} />
            </span>
            <span>Al ruim 1.000 cliënten geholpen naar een vitaler leven</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section section-alt" id="behandelingen">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Onze behandelingen</span>
            <h2>Vier pijlers voor een vitaler leven</h2>
            <p>
              Elke behandeling begint met een persoonlijk gesprek. Zo weten we zeker dat de
              aanpak past bij jouw lichaam én jouw leven.
            </p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link to={`/behandelingen/${s.slug}`} className="service-card">
                <Photo src={s.image} alt="" />
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="link-hint">
                    Lees meer <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const select = (i: number) => {
    setIndex(i);
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal>
          <div className="section-head centered">
            <span className="kicker">Ervaringen</span>
            <h2>Wat onze cliënten zeggen</h2>
          </div>
        </Reveal>
        <div className="testimonial-stage" aria-live="polite">
          {testimonials.map((t, i) => (
            <figure key={t.name} className={`testimonial${i === index ? " active" : ""}`} aria-hidden={i !== index}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <cite>
                  <strong>{t.name}</strong> · {t.context}
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="testimonial-dots" role="group" aria-label="Kies een ervaring">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-pressed={i === index}
              aria-label={`Ervaring van ${t.name}`}
              onClick={() => select(i)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Recipes() {
  return (
    <section className="section section-alt" id="recepten">
      <div className="container split">
        <div className="split-media">
          <Reveal>
            <Photo src="/easyclinics-afslanken.webp" alt="Gezond gerecht uit de Easy Clinics keuken" />
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div>
            <span className="kicker">Recepten &amp; leefstijl</span>
            <h2>Geniet van onze heerlijke gerechten</h2>
            <p>
              Gezond eten hoeft niet saai te zijn. Ontdek onze recepten vol smaak en
              voedingswaarde — samengesteld door onze therapeuten, gemakkelijk thuis te maken.
            </p>
            <a className="btn-ghost" href="#">
              Bekijk de recepten <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Webshop() {
  return (
    <section className="section">
      <div className="container split reverse">
        <div className="split-media">
          <Reveal>
            <Photo src="/easyclinics-afslanken.webp" alt="Supplementen uit de Easy Clinics webshop" />
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div>
            <span className="kicker">Webshop</span>
            <h2>Zorgvuldig geselecteerde supplementen</h2>
            <p>
              In onze webshop vind je uitsluitend supplementen en producten die wij zelf in de
              praktijk adviseren — van hoge kwaliteit en wetenschappelijk onderbouwd.
            </p>
            <a className="btn btn-secondary" href={config.webshopUrl}>
              <ShoppingBag /> Bezoek de webshop
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <h2>Klaar voor een vitaler leven?</h2>
            <p>
              Plan een vrijblijvend kennismakingsgesprek. Samen bespreken we jouw doelen en de
              behandeling die daarbij past.
            </p>
            <a className="btn btn-primary" href={config.bookingUrl}>
              Afspraak maken <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Recipes />
      <Webshop />
      <CtaBand />
    </>
  );
}
