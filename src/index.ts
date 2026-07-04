import { serve, file } from "bun";
import { join } from "node:path";
import index from "./index.html";

const publicDir = join(import.meta.dir, "..", "public");
const asset = (name: string) => () => {
  const f = file(join(publicDir, name));
  return f.exists().then(ok => (ok ? new Response(f) : new Response("Not found", { status: 404 })));
};

const server = serve({
  routes: {
    // SPA: serve the bundled app for all page routes.
    "/*": index,

    // Static assets from /public.
    "/logo.svg": asset("logo.svg"),
    "/logo-white.png": asset("logo-white.png"),
    "/me.jpg": asset("me.jpg"),
    "/example.jpg": asset("example.jpg"),
    "/Lipomassage-e1711354474270.png": asset("Lipomassage-e1711354474270.png"),
    "/Bewegen-e1711354436764.png": asset("Bewegen-e1711354436764.png"),
    "/Afslanken.png": asset("Afslanken.png"),
    "/easyclinics-afslanken.webp": asset("easyclinics-afslanken.webp"),
    "/Voeding-en-suplementen.png": asset("Voeding-en-suplementen.png"),
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Easy Clinics running at ${server.url}`);
