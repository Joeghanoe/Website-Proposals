import { config } from "../config";
import { services, type Service } from "../data/services";
import { Link } from "../router";
import { ArrowRight, Check, Info } from "../components/Icons";
import { Photo, Reveal } from "../components/shared";

export function ServiceDetail({ service }: { service: Service }) {
  const others = services.filter(s => s.slug !== service.slug);

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <nav aria-label="Kruimelpad">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link> /
              </li>
              <li>
                <Link to="/#behandelingen">Behandelingen</Link> /
              </li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <h1>{service.title}</h1>
          <p className="intro">{service.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-body">
            {service.description.map(p => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            {service.items && (
              <>
                <h2>Wat wij bieden</h2>
                <div className="detail-items">
                  {service.items.map(item => (
                    <div className="detail-item" key={item.name}>
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2>Voordelen</h2>
            <ul className="benefit-list">
              {service.benefits.map(b => (
                <li key={b}>
                  <Check size={18} /> {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="detail-aside">
            <Photo src={service.image} alt="" />
            <div className="aside-card">
              <h3>Tarieven &amp; vergoeding</h3>
              <div className="note">
                <Info size={18} />
                <span>{service.pricingNote}</span>
              </div>
              <a className="btn btn-primary" href={config.bookingUrl}>
                Afspraak maken <ArrowRight />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="container other-services">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Ontdek ook</span>
            <h2>Andere behandelingen</h2>
          </div>
        </Reveal>
        <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link to={`/behandelingen/${s.slug}`} className="service-card">
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
      </section>
    </>
  );
}
