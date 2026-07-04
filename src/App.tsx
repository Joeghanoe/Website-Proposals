import "./index.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ServiceDetail } from "./pages/ServiceDetail";
import { services } from "./data/services";
import { RouterProvider, useRouter, Link } from "./router";

function NotFound() {
  return (
    <section className="section container" style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: 16 }}>Pagina niet gevonden</h1>
      <p style={{ marginBottom: 24 }}>De pagina die je zoekt bestaat niet (meer).</p>
      <Link to="/" className="btn btn-primary">
        Terug naar home
      </Link>
    </section>
  );
}

function Routes() {
  const { path } = useRouter();

  let page = <NotFound />;
  if (path === "/") {
    page = <Home />;
  } else {
    const match = path.match(/^\/behandelingen\/([\w-]+)\/?$/);
    const service = match ? services.find(s => s.slug === match[1]) : undefined;
    if (service) page = <ServiceDetail service={service} />;
  }

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}

export default App;
