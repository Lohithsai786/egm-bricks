import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, ExternalLink, Feather, Leaf, Wallet, Thermometer, Flame, Hand, MessageCircle, Ruler, Volume2, Palette, Gauge } from "lucide-react";
import logo from "@/assets/logo.png";
import brickClc from "@/assets/brick-clc.jpg";
import brickWeightless from "@/assets/brick-weightless.jpg";
import brickCellular from "@/assets/brick-cellular.jpg";
import brickCellularLight from "@/assets/brick-cellular-light.jpg";

const MAPS_URL = "https://maps.app.goo.gl/nLL6rCzq3EGSjdbX8";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Plot+137-B+Industrial+Park+Venkatachalam+Nellore+Andhra+Pradesh&output=embed";
const PHONE = "9000312013";
const PHONE_ALT = "8688597038";

const specs = [
  { icon: Ruler, label: "Block Size", value: "600mm L × 200mm H × 100–300mm W (24\" × 8\" × 4–12\")" },
  { icon: Gauge, label: "Compressive Strength", value: "Above 3 N/mm²" },
  { icon: Flame, label: "Fire Resistance", value: "4–6 hrs (depending on block thickness)" },
  { icon: Feather, label: "Dry Density", value: "850 – 950 Kg/m³" },
  { icon: Volume2, label: "Sound Reduction", value: "37–42 dB for 200 mm thickness block" },
  { icon: Thermometer, label: "Thermal Conductivity", value: "0.122 W/(m·K)" },
  { icon: Palette, label: "Colour", value: "Light Gray" },
];

const sizeTable = [
  { size: "600 × 200 × 100 mm", mblock: "0.012", weight: "11 Kg", thickness: "4 inches" },
  { size: "600 × 200 × 150 mm", mblock: "0.018", weight: "16 Kg", thickness: "6 inches" },
  { size: "600 × 200 × 200 mm", mblock: "0.024", weight: "20 Kg", thickness: "8 inches" },
  { size: "600 × 200 × 225 mm", mblock: "0.027", weight: "24 Kg", thickness: "9 inches" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EGM CLC Brick Manufacturers | Lightweight Cement Bricks" },
      {
        name: "description",
        content:
          "EGM CLC Brick Manufacturers — Cellular Lightweight Concrete (CLC) bricks engineered for strong, lightweight and cost-effective modern construction in Andhra Pradesh.",
      },
      { property: "og:title", content: "EGM CLC Brick Manufacturers" },
      { property: "og:description", content: "Strong • Lightweight • Cost Effective CLC bricks." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Feather, title: "Lightweight", desc: "Up to 50% lighter than clay bricks, reducing structural load." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Made with fly ash and minimal natural resources." },
  { icon: Wallet, title: "Cost Effective", desc: "Lower transport, mortar and labour costs on every project." },
  { icon: Thermometer, title: "Thermal Insulation", desc: "Keeps interiors cooler and saves on energy bills." },
  { icon: Flame, title: "Fire Resistant", desc: "Excellent fire rating for safer modern buildings.", highlight: true },
  { icon: Hand, title: "Easy Handling", desc: "Larger format and lighter weight speeds up construction." },
];

const brickTypes = [
  { name: "CLC Bricks", desc: "Cellular Lightweight Concrete bricks — strong, durable, low density.", img: brickClc },
  { name: "Weightless Bricks", desc: "Ultra-light aerated bricks ideal for high-rise construction.", img: brickWeightless },
  { name: "Cellular Bricks", desc: "Air-cell engineered bricks for thermal and acoustic insulation.", img: brickCellular },
  { name: "Cellular Light Concrete Bricks", desc: "Premium CLC bricks combining strength with reduced weight.", img: brickCellularLight },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="EGM Constructions logo" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="text-lg font-bold tracking-tight">
            EGM <span className="text-primary">Constructions</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          <a href="#home" className="hover:text-foreground">Home</a>
          <a href="#overview" className="hover:text-foreground">Overview</a>
          <a href="#products" className="hover:text-foreground">Products</a>
          <a href="#specs" className="hover:text-foreground">Specs</a>
          <a href="#location" className="hover:text-foreground">Location</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, oklch(0.97 0.03 25 / 0.5) 0%, transparent 60%), linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "auto, 48px 48px, 48px 48px",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center md:py-32">
        <img src={logo} alt="EGM CLC Brick Manufacturers" width={140} height={140} className="mb-8 h-32 w-32 object-contain" />
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          EGM <span className="text-primary">Constructions</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Manufacturers of Lightweight Cement Bricks (CLC)
        </p>
        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary">
          <span>Strong</span><span>•</span><span>Lightweight</span><span>•</span><span>Cost Effective</span>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#products" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-105">
            View Products
          </a>
          <a href="#contact" className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold transition hover:bg-muted">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Overview</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Building the future with lightweight cement bricks.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          EGM CLC Brick Manufacturers produces high-quality Cellular Lightweight Concrete (CLC) bricks engineered for modern construction. Our bricks combine strength, sustainability, and economy — the trusted choice for builders who demand performance without compromise.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                  f.highlight ? "border-primary/40 bg-primary/[0.03]" : "border-border bg-card"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    f.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Types of Bricks</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Our Lightweight Bricks
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground md:text-base">
            Precision-manufactured for consistent dimensions, smooth finish, and reliable strength on every block.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brickTypes.map((b) => (
            <article key={b.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold">{b.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section id="specs" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Technical Specifications</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Engineered to exact specification.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Every CLC block we manufacture is tested and certified to meet the technical benchmarks below — built for performance, safety, and consistency on every site.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {specs.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-base font-semibold">{s.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">Different Sizes & Weights</h3>
          <p className="mt-2 text-sm text-muted-foreground">Choose from four standard CLC block formats.</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-5 py-4">Size</th>
                    <th className="px-5 py-4">M³ / Block</th>
                    <th className="px-5 py-4">Weight / Block</th>
                    <th className="px-5 py-4">Thickness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sizeTable.map((row) => (
                    <tr key={row.size} className="transition hover:bg-muted/30">
                      <td className="px-5 py-4 font-semibold">{row.size}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.mblock}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                          {row.weight}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{row.thickness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">All blocks are 24" length × 8" height. Width varies as listed above.</p>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Location</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Visit our manufacturing unit.
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Our facility is located in the Industrial Park at Venkatachelam, Nellore — strategically positioned to serve construction projects across Andhra Pradesh.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">Industrial Park, Venkatachalam</h3>
                <p className="text-sm text-muted-foreground">Plot No. 137-B, Industrial Park, Venkatachalam, Nellore Dist., Andhra Pradesh</p>
              </div>
            </div>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-105"
          >
            <MapPin className="h-4 w-4" /> Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-border shadow-lg transition hover:shadow-2xl"
          aria-label="Open EGM CLC location in Google Maps"
        >
          <iframe
            title="EGM CLC Location"
            src={MAPS_EMBED}
            width="100%"
            height="450"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-primary-foreground"
      style={{
        backgroundColor: "oklch(0.35 0.16 25)",
        backgroundImage:
          "linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px, 48px 48px",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 py-24 text-center md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Contact</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Let's build something strong, together.
        </h2>
        <p className="mt-6 text-base opacity-90 md:text-lg">
          Reach out for bulk orders, custom requirements, or a site visit. We're here to help.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-xl transition hover:scale-105">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a href={`tel:${PHONE_ALT}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-xl transition hover:scale-105">
            <Phone className="h-4 w-4" /> {PHONE_ALT}
          </a>
          <a
            href={`https://wa.me/91${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.2_0.01_260)] py-10 text-center text-sm text-white/70">
      <img src={logo} alt="EGM CLC" width={48} height={48} className="mx-auto h-12 w-12 object-contain opacity-90" />
      <p className="mt-4">© {new Date().getFullYear()} EGM CLC Brick Manufacturers. All rights reserved.</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Products />
        <Specs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
