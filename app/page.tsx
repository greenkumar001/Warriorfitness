'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Dumbbell,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'

const equipment = [
  { name: 'Squat Rack', meta: 'Strength zone', image: '/warrior-lower-body.png' },
  { name: 'Smith Machine', meta: 'Controlled power', image: '/warrior-upper-body.png' },
  { name: 'Cable Station', meta: 'Full range training', image: '/warrior-core.png' },
  { name: 'Dumbbell Floor', meta: '5–50 kg selection', image: '/warrior-upper-body.png' },
]

const plans = [
  { name: 'Basic', price: '₹____', description: 'For a consistent start', items: ['Gym access', 'Equipment access', 'Locker facility', 'Flexible timing'] },
  { name: 'Standard', price: '₹____', description: 'For serious progress', featured: true, items: ['Everything in Basic', 'Trainer guidance', 'Body composition check', 'Flexible timing'] },
  { name: 'Premium', price: '₹____', description: 'For total transformation', items: ['Everything in Standard', 'Personalized programming', 'Nutrition guidance', 'Priority support'] },
]

const testimonials = [
  { quote: 'The energy here is different. Every session feels intentional, and the coaches actually care about your progress.', name: 'Arjun ', role: 'Member since 2025' },
  { quote: 'Clean, focused and never overcrowded. I finally found a place that makes me want to show up consistently.', name: 'Priya', role: 'Member since 2025' },
  { quote: 'From my first day to my first big lift, the team has been with me. Iron District delivers on every promise.', name: 'Karan', role: 'Member since 2025' },
]

const gallery = [
  { image: '/warrior-upper-body.png', alt: 'Athlete training arms and shoulders' },
  { image: '/warrior-lower-body.png', alt: 'Athlete training legs with a squat' },
  { image: '/warrior-core.png', alt: 'Athlete training the core' },
  { image: '/warrior-upper-body.png', alt: 'Athlete training upper body strength' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark"><img src="/warrior-logo.png" alt="Warrior Fitness logo" /></span>
            <span>WARRIOR<span className="red"> FITNESS</span></span>
          </a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {['About', 'Facilities', 'Trainers', 'Membership', 'Location'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
            <a href="#contact" className="nav-mobile-cta" onClick={closeMenu}>Join now <ArrowUpRight size={15} /></a>
          </div>
          <a href="#contact" className="button button-small nav-cta">Join now <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-grid" />
        <div className="hero-content container">
          <p className="eyebrow"><span /> Warrior Fitness (Gym)</p>
          <h1>Build your<br /><em>strongest</em> self.</h1>
          <p className="hero-copy">Personal Training, Fitness Training, Body Building, Weight Fitting, Weight Gain, Weight Loss, Nutrition Solution and Cardio.</p>
          <div className="hero-actions"><a href="#contact" className="button">Join now <ArrowUpRight size={17} /></a><a href="#location" className="text-link">Get directions <ChevronRight size={17} /></a></div>
          <div className="trust-row">{['Modern equipment', 'Expert trainers', 'Separate workout zones', 'Flexible timings'].map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div>
        </div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>Train with intent</span><b>✦</b><span>Become undeniable</span><b>✦</b><span>Train with intent</span><b>✦</b><span>Become undeniable</span><b>✦</b></div></section>

      <section id="about" className="section about-section container">
        <div className="section-kicker">01 <span>About the district</span></div>
        <div className="about-grid"><div className="about-photo image-card"><img src="/warrior-core.png" alt="Athlete performing a core workout" /><div className="photo-tag">No shortcuts.<br /><strong>Just work.</strong></div></div><div className="about-copy"><p className="eyebrow"><span /> More than a gym</p><h2>It&apos;s your<br /><em>grind.</em></h2><p className="body-copy">Our services include Personal Training, Fitness Training, Body Building, Weight Fitting, Weight Gain, Weight Loss, Nutrition Solution and Cardio.</p><a href="#facilities" className="text-link">Discover our approach <ArrowUpRight size={16} /></a><div className="stats"><div><strong>100<span>+</span></strong><small>Members</small></div><div><strong>20<span>+</span></strong><small>Premium equipment</small></div><div><strong>07/10/2025</strong><small>Opened</small></div><div><strong>100<span>%</span></strong><small>Focus on results</small></div></div></div></div>
      </section>

      <section id="facilities" className="section dark-section equipment-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">02 <span>Built for performance</span></div><h2>Train with the<br /><em>right equipment.</em></h2></div><p>Every detail of Iron District is considered to make your training more effective, more focused and more rewarding.</p></div><div className="equipment-grid">{equipment.map((item, index) => <article className="equipment-card" key={item.name}><img src={item.image} alt={item.name} /><div className="equipment-overlay"><span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.meta}</p></div><ArrowUpRight size={18} /></div></article>)}</div><div className="center-link"><a className="text-link" href="#contact">Explore all facilities <ArrowUpRight size={16} /></a></div></div></section>

      <section className="section features-section container"><div className="section-kicker">03 <span>The iron standard</span></div><div className="section-heading"><h2>Why train<br /><em>with us?</em></h2><p>We&apos;re not here to sell you a membership. We&apos;re here to give you the environment to earn your results.</p></div><div className="feature-grid">{[['01', Dumbbell, 'Premium equipment', 'Serious tools for serious training.'], ['02', ShieldCheck, 'Professional environment', 'Clean, considered and built for focus.'], ['03', Trophy, 'Experienced trainers', 'Guidance that meets you where you are.'], ['04', Sparkles, 'Results focused', 'Your goals are the only metric that matters.']].map(([number, Icon, title, text]) => { const FeatureIcon = Icon as typeof Dumbbell; return <div className="feature" key={String(number)}><span className="feature-number">{String(number)}</span><FeatureIcon className="feature-icon" size={27} /><h3>{String(title)}</h3><p>{String(text)}</p><ArrowUpRight className="feature-arrow" size={17} /></div> })}</div></section>

      <section className="statement"><div className="statement-image" /><div className="statement-content container"><p className="eyebrow"><span /> Your work. Your story.</p><h2>Discipline<br /><em>creates results.</em></h2><a href="#contact" className="button">Start your journey <ArrowUpRight size={17} /></a></div></section>

      <section id="trainers" className="section container trainers-section"><div className="section-heading"><div><div className="section-kicker">04 <span>Your team</span></div><h2>Built by coaches.<br /><em>Backed by science.</em></h2></div><p>Meet the people in your corner. Every coach brings experience, energy and a genuine investment in your progress.</p></div><div className="trainer-grid"><article className="trainer-card"><img src="/warrior-lower-body.png" alt="Rahul Sharma, strength coach" /><div><span>Strength & conditioning</span><h3>ANKUSH T</h3><p>4+ years experience</p></div></article><article className="trainer-card"><img src="/warrior-core.png" alt="Maya Iyer, performance coach" /><div><span>Performance coach</span><h3>ANKUSH T</h3><p>4+ years experience</p></div></article><article className="trainer-card"><img src="/warrior-upper-body.png" alt="Dev Malhotra, personal trainer" /><div><span>Personal training</span><h3>Ankush T</h3><p>4+ years experience</p></div></article></div></section>

      <section id="membership" className="section dark-section membership-section"><div className="container"><div className="section-kicker">05 <span>Choose your commitment</span></div><div className="section-heading"><h2>Find your<br /><em>pace.</em></h2><p>Simple memberships. No noise. Pick the level of support that keeps you showing up.</p></div><div className="plans">{plans.map((plan) => <article className={`plan ${plan.featured ? 'featured' : ''}`} key={plan.name}>{plan.featured && <span className="plan-badge">Most popular</span>}<p className="plan-name">{plan.name}</p><h3>{plan.price}<small>/ month</small></h3><p className="plan-description">{plan.description}</p><ul>{plan.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><a href="#contact" className={plan.featured ? 'button' : 'button button-outline'}>Enquire now <ArrowUpRight size={16} /></a></article>)}</div></div></section>

      <section className="section testimonials-section container"><div className="section-kicker">06 <span>Member voices</span></div><div className="quote-mark">“</div><div className="testimonial-grid">{testimonials.map((item) => <article key={item.name}><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div><p>“{item.quote}”</p><div className="member"><span>{item.name.charAt(0)}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div></article>)}</div></section>

      <section className="section gallery-section dark-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">07 <span>Inside Iron District</span></div><h2>See the<br /><em>difference.</em></h2></div><a className="text-link" href="#contact">Book a tour <ArrowUpRight size={16} /></a></div><div className="gallery-grid">{gallery.map((item, index) => <button className={`gallery-item gallery-${index + 1}`} key={item.alt} onClick={() => setLightbox(item.image)} aria-label={`View ${item.alt}`}><img src={item.image} alt={item.alt} /><span><Play size={16} fill="currentColor" /></span></button>)}</div></div></section>

      <section id="location" className="location-section container"><div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.9721172012537!2d80.35884417472525!3d21.429438073897256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2bb10a2275d999%3A0xb1ee3edc69b0f89c!2sWarrior%20Fitness%20gym%20KATTIPAR!5e1!3m2!1sen!2sin!4v1790070584996!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Warrior Fitness Gym KATTIPAR Location"
        />
      </div>
        <div className="location-info"><div className="section-kicker">08 <span>Find your way here</span></div><h2>Come see<br /><em>for yourself.</em></h2><p className="address"><strong>Warrior Fitness (Gym)</strong><br />Aai Ansuya mata chauk,Bharatmata chauk,<br />Aamgoan kamta road,Kattipar</p><div className="hours"><span><Clock3 size={16} /> Sunday — Holiday</span><strong>Morning 5:00 to 10:00 · Evening 4:30 to 10:00</strong></div><div className="location-actions"><a href="#contact" className="button">Get directions <ArrowUpRight size={16} /></a><a href="tel:7798298498" className="text-link">Call now <Phone size={15} /></a></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-grid"><div><p className="eyebrow"><span /> Take the first step</p><h2>Ready to get<br /><em>stronger?</em></h2><p>Your fitness journey starts today. Tell us what you&apos;re working towards and we&apos;ll help you map the way there.</p><div className="contact-links"><a href="https://wa.me/7798298498"><MessageCircle size={18} /> 7798298498</a><a href="tel:7798298498"><Phone size={18} /> 7798298498 / 8698999539</a><a href="https://instagram.com/WARRIORFITNESS_KATTIPAR">@WARRIORFITNESS_KATTIPAR</a><a href="https://facebook.com/Ankushot0606">Ankushot0606</a></div></div><form className="lead-form" onSubmit={(event) => event.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="+91 00000 00000" /></label><label>What&apos;s your goal?<select defaultValue=""><option value="" disabled>Select an option</option><option>Build strength</option><option>Lose fat</option><option>Improve fitness</option><option>Get started</option></select></label><label>Message<textarea placeholder="Anything we should know?" rows={3} /></label><button className="button" type="submit">Send enquiry <ArrowUpRight size={17} /></button></form></div></section>

      <footer className="footer container"><a href="#home" className="brand"><span className="brand-mark"><img src="/warrior-logo.png" alt="Warrior Fitness logo" /></span><span>WARRIOR<span className="red"> FITNESS</span></span></a><p>
        Designed & Developed by{" "}
        <a
          href="https://www.acustardtechnologies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Acustard Technologies
        </a>
      </p><div><a href="#home">Back to top <ChevronDown size={15} className="rotate" /></a><a href="#">Instagram <ArrowUpRight size={15} /></a></div></footer>
      <div className="floating-actions"><a href="https://wa.me/7798298498" aria-label="WhatsApp"><MessageCircle size={21} /></a><a href="tel:7798298498" aria-label="Call"><Phone size={19} /></a></div>
      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button aria-label="Close gallery" onClick={() => setLightbox(null)}><X /></button><img src={lightbox} alt="Expanded gym gallery image" onClick={(event) => event.stopPropagation()} /></div>}
    </main >
  )
}
