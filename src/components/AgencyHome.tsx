import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Menu,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/social-growth-hero.jpg";
import networkImage from "@/assets/audience-network.jpg";

const services = [
  ["01", "Audience Growth", "Help your profile reach new audiences and grow your social media presence."],
  ["02", "Large-Scale Promotion", "Promote your content across our high-growth audience network for greater visibility and exposure."],
  ["03", "Targeted Audience Exposure", "Connect your content with audiences relevant to your profile and growth objectives."],
  ["04", "Content Promotion", "Promotion through posts, stories, reels/short-form content and other available promotional placements."],
  ["05", "Profile Optimization", "Improve your bio, content positioning and overall profile presentation."],
  ["06", "Monetization Support", "Check available monetization opportunities and assist with required setup where applicable."],
  ["07", "Brand Collaboration Readiness", "Professionally position your social media presence for potential brand collaborations."],
] as const;

const platforms = [
  ["Instagram", "Grow your profile, reach and audience exposure.", Instagram],
  ["YouTube", "Increase channel visibility and content discoverability.", Youtube],
  ["TikTok", "Expand your content reach and audience exposure.", Play],
  ["Facebook", "Build page/profile visibility and audience growth.", Facebook],
] as const;

const process = [
  ["01", "Profile Analysis", "We start by conducting a deep analysis of your social media profile, content and current positioning."],
  ["02", "Growth Strategy", "Based on our analysis, we create a customized promotion and growth strategy according to your goals."],
  ["03", "Promotion Begins", "Your selected content is promoted through our available promotional network and placements."],
  ["04", "Audience Exposure", "Your profile and content receive increased exposure to our wider audience network."],
  ["05", "Optimization", "We help optimize your profile presentation, bio and content positioning to improve your overall presence."],
  ["06", "Track Your Growth", "You can monitor your profile’s progress and campaign results through available analytics and insights."],
] as const;

const packages = [
  { name: "BRONZE", price: "$49", target: "Growth Target: Up to 5K", tone: "bronze", features: ["7 Days Stories", "7 Permanent Posts", "Highlights", "Star ⭐ for 1 Week", "Promotional Exposure"] },
  { name: "SILVER", price: "$139", target: "Growth Target: Up to 15K", tone: "silver", features: ["Daily Story Promotion", "Full Month Permanent Posts", "Highlights", "Bio Mention", "Follow Back", "Reels Promotion", "VIP Membership", "Star ⭐ for 2 Weeks"] },
  { name: "GOLD", price: "$250", target: "Growth Target: Up to 30K", tone: "gold", features: ["Daily Stories", "Permanent Posts", "Highlights", "Bio Mention", "Reels Promotion", "Follow Back", "VIP Benefits", "Star ⭐ for 4 Weeks"] },
  { name: "DIAMOND", price: "$399", target: "Growth Target: Up to 50K", tone: "diamond", features: ["Permanent Posts", "Daily Stories", "Highlights", "Bio Mention", "Reels Promotion", "Follow Back", "VIP Premium Benefits", "Star ⭐ for 6 Weeks"] },
] as const;

const opportunities = [
  ["Platform Monetization", "Explore available monetization opportunities on supported platforms."],
  ["Brand Collaborations", "Professionally position your profile for potential brand partnerships."],
  ["Creator Opportunities", "Build a stronger social media presence and increase opportunities to work with brands and audiences."],
  ["Audience Growth", "Expand your reach and build a stronger online presence."],
] as const;

const faqs = [
  ["Which social media platforms do you support?", "We provide social media growth and promotional solutions across platforms including Instagram, YouTube, TikTok, Facebook and other social media platforms."],
  ["How does the promotion work?", "We analyze your profile, develop a customized promotional strategy and promote your content through available promotional placements within our audience network."],
  ["Is the promotion included according to my selected package?", "Yes. Your promotion is carried out according to the services, duration, promotional placements and growth target included in the selected package."],
  ["Is the package guaranteed?", "Yes. Once you select a package, the promotional services included in that package are delivered according to the agreed package terms. We continue the promotional campaign according to the package requirements until the included promotional scope and applicable growth target have been completed."],
  ["Do you guarantee the promotional exposure?", "Yes. The promotional exposure included in your selected package is guaranteed to be delivered according to the package terms, including the specified posts, stories, highlights, mentions, reels and other promotional placements where applicable."],
  ["How quickly does promotion start?", "After the required account and content details are received, your campaign is prepared and promotion begins according to the selected package."],
  ["Will my content remain permanently?", "Permanent placement depends on the package selected and its stated terms. Packages that include permanent posts will retain those promotional posts according to the applicable package terms."],
  ["Do you provide monetization support?", "Yes. We can check available monetization opportunities and assist with eligible setup where applicable. Final monetization approval is determined by the relevant social media platform."],
  ["Can you promote multiple posts?", "Yes. Multiple-post promotion can be included according to the selected package and campaign requirements."],
] as const;

function ButtonLink({ href, children, secondary = false, onClick }: { href: string; children: React.ReactNode; secondary?: boolean; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className={secondary ? "btn btn-secondary" : "btn btn-primary"}>{children}</a>;
}

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Services", "#services"], ["Platforms", "#platforms"], ["Packages", "#packages"], ["Results", "#results"], ["Reviews", "#reviews"], ["FAQ", "#faq"]];
  return <header className="site-header"><div className="nav-wrap">
    <a href="#top" className="brand" aria-label="Your Brand home"><span className="brand-mark">YB</span><span>Your Brand</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a href="#contact" className="nav-cta">Start Growing <ArrowRight size={14}/></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={16}/></a>)}<a href="#contact" onClick={() => setOpen(false)}>Contact<ArrowRight size={16}/></a></nav>}</header>;
}

function BeforeAfter() {
  const [position, setPosition] = useState(48);
  return <div className="proof-layout">
    <div className="comparison" style={{ "--split": `${position}%` } as React.CSSProperties}>
      <div className="proof-panel proof-before"><span>BEFORE</span><strong>2,450</strong><small>Followers</small></div>
      <div className="proof-panel proof-after"><span>AFTER PROMOTION</span><strong>8,700</strong><small>Followers</small></div>
      <div className="comparison-line" aria-hidden="true"><span><ChevronLeft/><ChevronRight/></span></div>
      <input aria-label="Adjust before and after comparison" type="range" min="12" max="88" value={position} onChange={(e) => setPosition(Number(e.target.value))}/>
    </div>
    <div className="proof-stats"><div><span>Growth</span><strong>+X Followers</strong></div><div><span>Campaign Period</span><strong>30 Days</strong></div><div className="metric-row"><span>Reach <b>X</b></span><span>Engagement <b>X</b></span></div></div>
  </div>;
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return <div className="faq-item"><button aria-expanded={open} onClick={() => setOpen(!open)}><span>{question}</span><ChevronDown className={open ? "rotate" : ""}/></button>{open && <div className="faq-answer"><p>{answer}</p></div>}</div>;
}

const reviews = [
  {
    quote: "Our channel went from struggling to get 500 impressions to consistently reaching tens of thousands of real viewers every week. The audience growth was steady, targeted and authentic.",
    author: "Marcus Vance",
    role: "Tech & Gaming Creator",
    platform: "YouTube / USA",
    initials: "MV",
    stars: 5,
  },
  {
    quote: "The Gold package delivered way beyond our expectations. Our Instagram profile gained over 28,000 active followers and our reels engagement spiked by 400% in a single month.",
    author: "Elena Rostova",
    role: "Fashion & Lifestyle",
    platform: "Instagram / UK",
    initials: "ER",
    stars: 5,
  },
  {
    quote: "As an emerging fitness brand, building initial authority was our biggest challenge. Their strategic promotion gave us the credibility needed to secure major brand sponsorships.",
    author: "David Chen",
    role: "Fitness Coach & Founder",
    platform: "TikTok / Canada",
    initials: "DC",
    stars: 5,
  },
  {
    quote: "Seamless process and crystal clear campaign transparency. Promotional placements went live within 24 hours, driving genuine audience interaction and verified reach.",
    author: "Sophia Al-Mansoor",
    role: "Digital Entrepreneur",
    platform: "Multi-Platform / UAE",
    initials: "SA",
    stars: 5,
  },
] as const;

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((curr) => (curr === 0 ? reviews.length - 1 : curr - 1));
  const next = () => setIndex((curr) => (curr === reviews.length - 1 ? 0 : curr + 1));
  const current = reviews[index] ?? reviews[0];

  return (
    <section id="reviews" className="testimonial-section">
      <div className="section-shell content-section">
        <div className="testimonial-header">
          <SectionHeading label="07 / Client reviews" title="What Our Clients Say" />
          <div className="carousel-controls">
            <span className="carousel-counter">{String(index + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
            <div className="carousel-buttons">
              <button aria-label="Previous review" onClick={prev}>
                <ChevronLeft size={18} />
              </button>
              <button aria-label="Next review" onClick={next}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <blockquote className="testimonial" key={index}>
          <div className="stars" aria-label="5 out of 5 stars">
            {"★".repeat(current.stars)}
          </div>
          <p>“{current.quote}”</p>
          <footer>
            <span>{current.initials}</span>
            <div>
              <strong>{current.author}</strong>
              <small>{current.role} • {current.platform}</small>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = new FormData(e.currentTarget); const next: Record<string,string> = {};
    if (!String(form.get("name") || "").trim()) next["name"] = "Please enter your name.";
    const email = String(form.get("email") || ""); if (!/^\S+@\S+\.\S+$/.test(email)) next["email"] = "Please enter a valid email.";
    if (!String(form.get("profile") || "").trim()) next["profile"] = "Please add your profile or channel link.";
    setErrors(next); if (Object.keys(next).length) return;
    setStatus("loading"); window.setTimeout(() => setStatus("success"), 650);
  }
  if (status === "success") return <div className="form-success" role="status"><span><Check/></span><h3>Thank you.</h3><p>Your details have been received for this preview.</p><button className="btn btn-secondary" onClick={() => setStatus("idle")}>Send another request</button></div>;
  return <form onSubmit={submit} noValidate className="contact-form">
    <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" maxLength={100}/>{errors["name"] && <small>{errors["name"]}</small>}</div>
    <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" maxLength={255}/>{errors["email"] && <small>{errors["email"]}</small>}</div>
    <div className="field"><label htmlFor="platform">Social Media Platform</label><select id="platform" name="platform"><option>Instagram</option><option>YouTube</option><option>TikTok</option><option>Facebook</option><option>Other Social Platforms</option></select></div>
    <div className="field"><label htmlFor="profile">Profile / Channel Link</label><input id="profile" name="profile" type="url" maxLength={500}/>{errors["profile"] && <small>{errors["profile"]}</small>}</div>
    <div className="field"><label htmlFor="selected-package">Selected Package</label><select id="selected-package" name="package" defaultValue=""><option value="" disabled>Select a package</option>{packages.map(p => <option key={p.name}>{p.name}</option>)}</select></div>
    <div className="field field-wide"><label htmlFor="goal">Growth Goal</label><textarea id="goal" name="goal" rows={4} maxLength={1000}/></div>
    <button className="btn btn-primary field-wide" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : <>Get Started <ArrowRight size={17}/></>}</button>
  </form>;
}

export function AgencyHome() {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const nodes = mainRef.current?.querySelectorAll(".reveal"); if (!nodes) return;
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("revealed"); }), { threshold: .08 });
    nodes.forEach(node => observer.observe(node)); return () => observer.disconnect();
  }, []);
  function choosePackage(name: string) { window.setTimeout(() => { const select = document.querySelector<HTMLSelectElement>("#selected-package"); if (select) { select.value = name; select.dispatchEvent(new Event("change", { bubbles: true })); } }, 50); }
  return <><Header/><main ref={mainRef} id="top">
    <section className="hero section-shell">
      <div className="hero-copy reveal"><p className="eyebrow">Social Media Growth & Promotion</p><h1>Grow Your Social Media.<br/><em>Reach More People.</em><br/>Build Your Brand.</h1><p>Strategic social media promotion and growth solutions designed to increase your reach, audience exposure, engagement and online presence.</p><div className="hero-actions"><ButtonLink href="#contact">Start Growing <ArrowRight size={17}/></ButtonLink><ButtonLink href="#packages" secondary>View Packages <ArrowDown size={17}/></ButtonLink></div></div>
      <div className="hero-visual reveal"><img src={heroImage} alt="A content creator reviewing campaign insights on a tablet" width={1536} height={960}/><div className="floating-stat"><span>Audience network</span><strong>20M+</strong><small>Across multiple platforms</small></div></div>
      <div className="platform-strip" aria-label="Supported platforms"><span>Instagram</span><span>YouTube</span><span>TikTok</span><span>Facebook</span><span>Other Social Platforms</span></div>
    </section>

    <section id="services" className="section-shell content-section"><SectionHeading label="01 / What we do" title="Our Social Media Growth Services"/><div className="service-grid">{services.map(([n,t,d],i) => <article className={`service-card reveal ${i === 0 || i === 6 ? "service-featured" : ""}`} key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowRight size={18}/></article>)}</div></section>

    <section id="platforms" className="section-shell content-section"><SectionHeading label="02 / Supported platforms" title="Grow Across Your Favorite Social Platforms" copy="Instagram | YouTube | TikTok | Facebook | Other Social Platforms"/><div className="platform-grid">{platforms.map(([name,copy,Icon]) => <article className="platform-card reveal" key={name}><Icon/><div><h3>{name}</h3><p>{copy}</p></div></article>)}</div></section>

    <section id="process" className="process-section"><div className="section-shell content-section"><SectionHeading label="03 / How our process works" title="How It Works"/><div className="process-grid">{process.map(([n,t,d]) => <article className="process-step reveal" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

    <section id="network" className="section-shell content-section network"><div className="network-image reveal"><img src={networkImage} alt="Abstract audience growth visualization" loading="lazy" width={1200} height={1008}/></div><div className="network-copy reveal"><p className="eyebrow">04 / Your 20M+ audience network</p><h2>Reach a <em>20M+</em> Audience Network</h2><p>Get your content in front of a large, established social media audience network and increase your opportunities for profile discovery, engagement and audience growth.</p><div className="network-list"><div><strong>20M+</strong><span>Audience Network</span></div><div><strong>Multiple Platforms</strong><span>Social media promotional exposure across multiple platforms.</span></div><div><strong>Large-Scale Exposure</strong><span>Increase your content’s visibility through our promotional network.</span></div><div><strong>Content Promotion</strong><span>Promote your posts, stories, reels and other eligible content.</span></div></div></div></section>

    <section id="packages" className="packages-section"><div className="section-shell content-section"><SectionHeading label="05 / Special promo packages" title="Social Media Growth Packages" copy="Real Growth. Real Exposure. Real Opportunities."/><div className="package-grid">{packages.map((pkg,i) => <article key={pkg.name} className={`package-card ${pkg.tone} reveal ${i === 2 ? "package-featured" : ""}`}><div className="package-top"><span>{String(i+1).padStart(2,"0")}</span>{i === 2 && <b>Popular</b>}</div><h3>{pkg.name}</h3><div className="price">{pkg.price}</div><p>{pkg.target}</p><ul>{pkg.features.map(f => <li key={f}><Check size={15}/>{f}</li>)}</ul><ButtonLink href="#contact" secondary onClick={() => choosePackage(pkg.name)}>Choose {pkg.name[0] + pkg.name.slice(1).toLowerCase()} <ArrowRight size={16}/></ButtonLink></article>)}</div><div className="package-note"><strong>One-Time Payment</strong><span>Permanent promotional posts remain according to the terms of the selected package.</span></div></div></section>

    <section id="results" className="section-shell content-section"><SectionHeading label="06 / Before & after — client proof" title="Real Client Growth" copy="See how our promotional campaigns have helped clients increase their social media exposure and audience growth."/><BeforeAfter/></section>

    <TestimonialCarousel/>

    <section id="opportunities" className="opportunity-section"><div className="section-shell opportunity-container"><SectionHeading label="08 / Monetization & brand opportunities" title="Turn Your Social Presence Into Opportunities" copy="We help you identify available monetization opportunities across supported platforms and assist with the required setup where applicable."/><div className="opportunity-grid">{opportunities.map(([t,d],i) => <article className="opportunity reveal" key={t}><div className="opportunity-icon">{i===0?<BarChart3 size={20}/>:i===1?<Sparkles size={20}/>:i===2?<Target size={20}/>:<TrendingUp size={20}/>}</div><div className="opportunity-body"><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

    <section id="contact" className="contact-section"><div className="section-shell content-section contact-layout"><div><p className="eyebrow">09 / Get started</p><h2>Ready to Grow Your Social Media?</h2><p>Choose your package and start your social media promotion journey today.</p><div className="contact-points"><span><Users/> Tailored growth strategy</span><span><Zap/> Structured promotion</span><span><BarChart3/> Clear campaign insights</span></div></div><ContactForm/></div></section>

    <section id="faq" className="section-shell content-section faq-layout"><SectionHeading label="10 / FAQ" title="Frequently Asked Questions"/><div className="faq-list">{faqs.map(([q,a],i) => <FAQItem key={q} question={q} answer={a} index={i}/>)}</div></section>
  </main><Footer/></>;
}

function Footer() {
  return <footer className="footer"><div className="section-shell"><div className="footer-top"><div><a href="#top" className="brand brand-footer"><span className="brand-mark">YB</span><span>Your Brand Logo</span></a><p>Social Media Growth & Promotion</p></div><div><h3>Quick Links</h3><nav><a href="#top">Home</a><a href="#services">Services</a><a href="#platforms">Platforms</a><a href="#packages">Packages</a><a href="#results">Results</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></nav></div><div><h3>Legal</h3><nav><span>Terms & Conditions</span><span>Privacy Policy</span><span>Refund Policy</span></nav></div></div><div className="footer-bottom"><span>© 2026 Your Brand. All Rights Reserved.</span><span>Built for meaningful growth.</span></div></div></footer>;
}