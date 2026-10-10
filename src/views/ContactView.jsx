import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Calendar, 
  ChevronDown, 
  ArrowRight, 
  Plus, 
  Minus, 
  CheckCircle2, 
  FileText, 
  Coins, 
  Headphones,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import { brand } from '../data/websiteData';

export default function ContactView({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Select a service',
    subject: '',
    message: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Please agree to the Privacy Policy and Terms of Service.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Select a service',
        subject: '',
        message: '',
        agree: false
      });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      icon: <MessageSquare size={16} />,
      q: 'How soon can you start my project?',
      a: 'We can typically kick off discovery and architecture design within 2 to 4 business days once requirements, milestones, and initial specs are aligned.'
    },
    {
      icon: <Coins size={16} />,
      q: 'What is the project cost?',
      a: 'Our pricing is milestone-based and tailored to the technical complexity of your requirements. After reviewing your project scope, we provide a transparent, fixed-price or sprint-based cost estimate.'
    },
    {
      icon: <FileText size={16} />,
      q: 'Do you provide support after deployment?',
      a: 'Yes, we provide 30 to 90 days of complimentary post-deployment warranty and offer flexible ongoing maintenance, protocol monitoring, and upgrade retainer plans.'
    },
    {
      icon: <ShieldCheck size={16} />,
      q: 'Is my project idea kept confidential?',
      a: 'Absolutely. We sign strict Non-Disclosure Agreements (NDAs) prior to discussing any proprietary architecture, tokenomics, or intellectual property to ensure 100% confidentiality.'
    }
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="contact-wireframe-hero">
        <div className="container">
          <div className="contact-hero-grid">
            {/* Left Column */}
            <div>
              <span className="contract-hero-eyebrow">GET IN TOUCH</span>
              <h1 className="contract-hero-title">
                Let’s Build Your<br />Web3 Project Together
              </h1>
              <p className="contract-hero-subtitle">
                Have a question, a project idea, or need a custom solution? Our team is here to help. Reach out to us and we’ll get back to you as soon as possible.
              </p>

              {/* 3 Reassurance Badges in a Row */}
              <div className="contact-hero-badges-row">
                <div className="contact-hero-badge-item">
                  <div className="contact-hero-badge-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="contact-hero-badge-title">Quick Response</div>
                    <div className="contact-hero-badge-sub">Within 24 Hours</div>
                  </div>
                </div>

                <div className="contact-hero-badge-item">
                  <div className="contact-hero-badge-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-hero-badge-title">Expert Consultation</div>
                    <div className="contact-hero-badge-sub">Free & No Obligation</div>
                  </div>
                </div>

                <div className="contact-hero-badge-item">
                  <div className="contact-hero-badge-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="contact-hero-badge-title">Confidential Discussion</div>
                    <div className="contact-hero-badge-sub">Your Ideas Are Safe</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image + Floating Help Card */}
            <div className="contact-hero-img-wrap">
              <img 
                src="/images/developer_workstation.jpg" 
                alt="ZarWebCoders Web3 Workstation" 
              />

              {/* Floating Badge (Top Right) */}
              <div className="contact-floating-help-card">
                <div className="contact-floating-help-icon">
                  <Headphones size={18} />
                </div>
                <div>
                  <div className="contact-floating-help-title">We're Here to Help</div>
                  <div className="contact-floating-help-desc">Discuss your project with our experts.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: CONTACT FORM & CONTACT INFORMATION
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Send Us a Message Form */}
            <div className="contact-form-panel">
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                Send Us a Message
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '28px' }}>
                Fill out the form below and our team will get back to you soon.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '50px 20px', background: '#f0fdf4', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                  <CheckCircle2 size={46} color="#16a34a" style={{ margin: '0 auto 12px auto' }} />
                  <h3 style={{ fontSize: '1.35rem', color: '#166534', fontWeight: '800', marginBottom: '6px' }}>Message Sent Successfully!</h3>
                  <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>Thank you for reaching out to ZarWebCoders. We will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name and Email */}
                  <div className="consultation-form-grid-2">
                    <div>
                      <label className="consultation-label">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter your name" 
                        className="consultation-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="consultation-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="Enter your email" 
                        className="consultation-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Project Type */}
                  <div className="consultation-form-grid-2">
                    <div>
                      <label className="consultation-label">Phone Number</label>
                      <div className="consultation-phone-wrap">
                        <div className="consultation-country-btn">
                          <span>🇮🇳</span>
                          <span>+91</span>
                          <ChevronDown size={14} color="#64748b" />
                        </div>
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="consultation-input"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="consultation-label">Project Type</label>
                      <div style={{ position: 'relative' }}>
                        <select 
                          className="consultation-select"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{ appearance: 'none', paddingRight: '32px' }}
                        >
                          <option value="Select a service">Select a service</option>
                          <option value="Smart Contract Development">Smart Contract Development</option>
                          <option value="dApp Development">dApp Development</option>
                          <option value="Token Development">Token Development</option>
                          <option value="Blockchain Integration">Blockchain Integration</option>
                          <option value="Web3 Consulting">Web3 Consulting</option>
                          <option value="Security Auditing">Security Auditing</option>
                        </select>
                        <ChevronDown size={16} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div className="consultation-form-group">
                    <label className="consultation-label">Subject *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="What's this about?" 
                      className="consultation-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  {/* Row 4: Your Message */}
                  <div className="consultation-form-group">
                    <label className="consultation-label">Your Message *</label>
                    <textarea 
                      required 
                      rows="4" 
                      placeholder="Tell us about your project, requirements, or any questions..." 
                      className="consultation-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Row 5: Agreement Checkbox & Submit Button */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#64748b', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        required 
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        style={{ accentColor: 'var(--primary-blue)', width: '16px', height: '16px' }}
                      />
                      <span>I agree to the <Link to="#" style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>Privacy Policy</Link> and <Link to="#" style={{ color: 'var(--primary-blue)', textDecoration: 'underline' }}>Terms of Service</Link></span>
                    </label>

                    <button type="submit" className="btn-hero-primary" style={{ padding: '11px 26px', fontSize: '0.92rem' }}>
                      Send Message <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Information */}
            <div className="contact-info-panel">
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                Contact Information
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '28px' }}>
                Reach us through any of the following channels.
              </p>

              {/* 1. Email Us */}
              <div className="contact-channel-row">
                <div className="contact-channel-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-channel-title">Email Us</div>
                  <a href={`mailto:${brand.email}`} className="contact-channel-value" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                    {brand.email}
                  </a>
                  <div className="contact-channel-sub">We typically respond within 24 hours.</div>
                </div>
              </div>

              {/* 2. Call Us */}
              <div className="contact-channel-row">
                <div className="contact-channel-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-channel-title">Call Us</div>
                  <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="contact-channel-value" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>
                    {brand.phone}
                  </a>
                  <div className="contact-channel-sub">Mon - Sat, 9:00 AM - 7:00 PM (IST)</div>
                </div>
              </div>

              {/* 3. Our Office */}
              <div className="contact-channel-row">
                <div className="contact-channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-channel-title">Our Office</div>
                  <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact-channel-value" style={{ color: 'var(--text-main)', textDecoration: 'none', display: 'block', lineHeight: '1.45' }}>
                    {brand.office}
                  </a>
                  <div className="contact-channel-sub">Available for meetings by appointment.</div>
                </div>
              </div>

              {/* 4. Follow Us */}
              <div className="contact-channel-row" style={{ marginBottom: '16px' }}>
                <div className="contact-channel-icon-box">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="contact-channel-title">Follow Us</div>
                  <div className="contact-social-icons-row">
                    <a href={brand.socials?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="contact-social-icon-btn" aria-label="LinkedIn">
                      <LinkedinIcon size={16} />
                    </a>
                    <a href={brand.socials?.twitter || "https://x.com/zarwebcoders"} target="_blank" rel="noopener noreferrer" className="contact-social-icon-btn" aria-label="Twitter">
                      <TwitterIcon size={16} />
                    </a>
                    <a href={brand.socials?.instagram || "https://www.instagram.com/zarwebcoders/"} target="_blank" rel="noopener noreferrer" className="contact-social-icon-btn" aria-label="Instagram">
                      <InstagramIcon size={16} />
                    </a>
                    <a href={brand.socials?.facebook || "https://www.facebook.com/Zarwebcoders/"} target="_blank" rel="noopener noreferrer" className="contact-social-icon-btn" aria-label="Facebook">
                      <FacebookIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* 5. Prefer a Direct Discussion Callout */}
              <div className="contact-call-box">
                <div className="contact-call-box-left">
                  <div className="contact-call-box-icon">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.94rem', fontWeight: '700', color: '#0d1526' }}>Prefer a Direct Discussion?</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>Schedule a free consultation call with our Web3 experts.</div>
                  </div>
                </div>
                <button 
                  className="btn-hero-white" 
                  onClick={onOpenModal}
                  style={{ padding: '8px 18px', fontSize: '0.84rem', flexShrink: 0 }}
                >
                  Book a Call <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: LOCATION MAP SPLIT SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-light" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contact-location-split">
            {/* Left: Ahmedabad Vector Map Graphic */}
            <div className="contact-map-graphic">
              <svg width="100%" height="100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', top: 0, left: 0 }}>
                {/* Land Background */}
                <rect width="600" height="320" fill="#f8fafc" />

                {/* Secondary Roads */}
                <path d="M-20 60 L620 120" stroke="#e2e8f0" strokeWidth="6" />
                <path d="M-20 200 L620 240" stroke="#e2e8f0" strokeWidth="6" />
                <path d="M120 -20 L160 340" stroke="#e2e8f0" strokeWidth="5" />
                <path d="M420 -20 L380 340" stroke="#e2e8f0" strokeWidth="5" />
                <path d="M-20 290 L620 180" stroke="#e2e8f0" strokeWidth="4" />

                {/* Primary Highways (Yellowish / Light Beige as in Google Maps) */}
                <path d="M-20 150 L260 170 L340 180 L620 160" stroke="#fef08a" strokeWidth="8" />
                <path d="M260 -20 L270 170 L280 340" stroke="#fed7aa" strokeWidth="7" />

                {/* Sabarmati River in Light Sky Blue */}
                <path 
                  d="M 330 -20 C 320 60, 350 120, 340 180 C 330 240, 360 280, 345 340" 
                  fill="none" 
                  stroke="#93c5fd" 
                  strokeWidth="32" 
                  strokeLinecap="round" 
                  opacity="0.85"
                />

                {/* River Label */}
                <text x="360" y="80" fill="#3b82f6" fontSize="11" fontWeight="600" letterSpacing="1px" transform="rotate(78 360 80)">
                  Sabarmati River
                </text>

                {/* Landmarks */}
                <circle cx="100" cy="180" r="4" fill="#94a3b8" />
                <text x="110" y="184" fill="#64748b" fontSize="10" fontWeight="600">SARKHEJ</text>

                <circle cx="210" cy="165" r="4" fill="#94a3b8" />
                <text x="170" y="150" fill="#64748b" fontSize="10" fontWeight="600">ISKCON TEMPLE</text>

                <circle cx="450" cy="90" r="4" fill="#94a3b8" />
                <text x="390" y="94" fill="#64748b" fontSize="10" fontWeight="600">Sabarmati Ashram</text>

                <circle cx="430" cy="230" r="4" fill="#94a3b8" />
                <text x="440" y="234" fill="#64748b" fontSize="10" fontWeight="600">SANKARIA</text>

                <circle cx="360" cy="290" r="4" fill="#94a3b8" />
                <text x="370" y="294" fill="#64748b" fontSize="10" fontWeight="600">NAROL</text>

                {/* City Center Label */}
                <text x="440" y="170" fill="#0f172a" fontSize="16" fontWeight="800" fontFamily="Outfit, sans-serif">
                  Ahmedabad
                </text>

                {/* ZarWebCoders Pulsing Marker */}
                <g transform="translate(230, 110)">
                  {/* Radar Pulse Animation */}
                  <circle cx="0" cy="0" r="16" fill="rgba(26,122,255,0.2)">
                    <animate attributeName="r" values="8;24;8" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="7" fill="#1a7aff" stroke="#ffffff" strokeWidth="2.5" />

                  {/* Marker Card */}
                  <g transform="translate(14, -28)">
                    <rect x="0" y="0" width="165" height="42" rx="8" fill="#ffffff" stroke="#e8edf5" strokeWidth="1" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.1))" />
                    <circle cx="16" cy="21" r="7" fill="#ef4444" />
                    <path d="M16 17 L19 22 L13 22 Z" fill="#ffffff" transform="scale(0.8) translate(4, 5)" />
                    <text x="30" y="17" fill="#0d1526" fontSize="11" fontWeight="800" fontFamily="Outfit, sans-serif">ZarWebCoders</text>
                    <text x="30" y="31" fill="#64748b" fontSize="8" fontWeight="500">Signature 2, Sarkhej, Ahmedabad</text>
                  </g>
                </g>
              </svg>
            </div>

            {/* Right: Location Details */}
            <div className="contact-location-info">
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0d1526', marginBottom: '10px', fontFamily: 'Outfit, sans-serif' }}>
                Our Location
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6', marginBottom: '22px' }}>
                We're based in Ahmedabad, Gujarat, and work with clients worldwide. Visit us for an in-person meeting or schedule a virtual call.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#1e293b', fontWeight: '600' }}>
                  <MapPin size={18} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1e293b', textDecoration: 'none', lineHeight: '1.5' }}>{brand.office}</a>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: '#64748b' }}>
                  <Clock size={18} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div>Mon - Sat: 9:00 AM - 7:00 PM (IST)</div>
                    <div style={{ marginTop: '2px', color: '#94a3b8' }}>Sunday: Closed</div>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href={brand.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-hero-white"
                  style={{ display: 'inline-flex', padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  Get Directions <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: FREQUENTLY ASKED QUESTIONS (2x2 GRID)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '50px', paddingBottom: '70px' }}>
        <div className="container">
          {/* FAQ Header with Right Link */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--primary-blue)', marginBottom: '8px' }}>
                FAQ
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0d1526', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginTop: '6px' }}>
                Quick answers to common questions about working with us.
              </p>
            </div>

            <Link 
              to="/about" 
              className="contract-related-link"
              onClick={() => window.scrollTo({top:0})}
              style={{ fontWeight: '600' }}
            >
              View All FAQ <ArrowRight size={15} />
            </Link>
          </div>

          {/* 4 FAQ Accordion Cards in 2x2 Grid */}
          <div className="contact-faq-2x2">
            {faqList.map((faq, idx) => (
              <div 
                key={idx} 
                className="contact-faq-item-card"
                onClick={() => toggleFaq(idx)}
              >
                <div className="contact-faq-top-row">
                  <div className="contact-faq-left-header">
                    <div className="contact-faq-icon-wrap">
                      {faq.icon}
                    </div>
                    <div className="contact-faq-question-text">{faq.q}</div>
                  </div>
                  <div className="contact-faq-toggle-icon">
                    {openFaq === idx ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </div>

                {openFaq === idx && (
                  <div className="contact-faq-answer-text">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: READY TO BUILD? DARK CTA BANNER
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '10px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="contact-dark-cta-card">
            {/* Left Content */}
            <div style={{ maxWidth: '640px', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', letterSpacing: '1.6px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '10px' }}>
                READY TO BUILD?
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.2', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                Turn Your Idea into a Real Web3 Product
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '28px' }}>
                Whether it’s a smart <span style={{ color: '#00d4ff', fontWeight: '600' }}>contract</span>, <span style={{ color: '#00d4ff', fontWeight: '600' }}>dApp</span>, or <span style={{ color: '#00d4ff', fontWeight: '600' }}>full platform</span>, we’re here to help you build secure, scalable, and innovative solutions.
              </p>

              <button 
                className="btn-hero-white" 
                onClick={onOpenModal}
                style={{ 
                  background: '#ffffff', 
                  color: '#0d1526', 
                  fontWeight: '700', 
                  padding: '12px 28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)' 
                }}
              >
                Discuss a Project <ArrowRight size={16} />
              </button>
            </div>

            {/* Right: 3D Isometric Glowing Blockchain Cubes SVG */}
            <div className="dark-cta-svg-cube-wrap" style={{ position: 'relative', zIndex: 2 }}>
              <svg width="100%" height="100%" viewBox="0 0 280 170" fill="none">
                <defs>
                  <linearGradient id="cubeGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1a7aff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="cubeGlow2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a7aff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#05091a" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Large Center Cube */}
                <polygon points="170,45 220,20 270,45 220,70" fill="url(#cubeGlow1)" stroke="#00d4ff" strokeWidth="1.5" />
                <polygon points="170,45 220,70 220,130 170,105" fill="url(#cubeGlow2)" stroke="#1a7aff" strokeWidth="1.5" />
                <polygon points="220,70 270,45 270,105 220,130" fill="url(#cubeGlow2)" stroke="#00d4ff" strokeWidth="1.5" opacity="0.9" />

                {/* Left Floating Cube */}
                <polygon points="70,75 110,55 150,75 110,95" fill="url(#cubeGlow1)" stroke="#00d4ff" strokeWidth="1.2" opacity="0.8" />
                <polygon points="70,75 110,95 110,140 70,120" fill="url(#cubeGlow2)" stroke="#1a7aff" strokeWidth="1.2" opacity="0.8" />
                <polygon points="110,95 150,75 150,120 110,140" fill="url(#cubeGlow2)" stroke="#00d4ff" strokeWidth="1.2" opacity="0.7" />

                {/* Small Top Floating Cube */}
                <polygon points="20,50 45,36 70,50 45,64" fill="url(#cubeGlow1)" stroke="#00d4ff" strokeWidth="1" opacity="0.6" />
                <polygon points="20,50 45,64 45,94 20,80" fill="url(#cubeGlow2)" stroke="#1a7aff" strokeWidth="1" opacity="0.6" />
                <polygon points="45,64 70,50 70,80 45,94" fill="url(#cubeGlow2)" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />

                {/* Connecting Laser Beams */}
                <path d="M70 85 L110 95 M150 95 L170 80" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
