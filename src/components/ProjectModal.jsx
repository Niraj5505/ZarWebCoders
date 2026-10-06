import React, { useState } from 'react';
import { X, Send, CheckCircle, Shield, Clock, MessageSquare } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Smart Contract Development',
    budget: '$5k - $15k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Smart Contract Development',
        budget: '$5k - $15k',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <div style={{ width: '64px', height: '64px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Project Request Received!</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Thank you for reaching out! Our Web3 lead architect will review your project details and respond within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="badge badge-blue">FREE CONSULTATION</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '10px' }}>Discuss Your Web3 Project</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Fill out the form below to get a technical estimate, architecture plan, and quote.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Type</label>
                  <select
                    className="form-select"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="Smart Contract Development">Smart Contract Development</option>
                    <option value="dApp Development">dApp Development</option>
                    <option value="Blockchain Integration">Blockchain Integration</option>
                    <option value="Security Auditing">Security Auditing</option>
                    <option value="Web3 Infrastructure">Web3 Infrastructure</option>
                    <option value="Consulting & Strategy">Consulting & Strategy</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Budget</label>
                <select
                  className="form-select"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="< $5k">Under $5,000</option>
                  <option value="$5k - $15k">$5,000 - $15,000</option>
                  <option value="$15k - $50k">$15,000 - $50,000</option>
                  <option value="$50k+">$50,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details / Message *</label>
                <textarea
                  required
                  placeholder="Tell us about your project, target blockchain, timeline, or key features needed..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '20px', margin: '20px 0', fontSize: '0.8rem', color: '#64748b' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Shield size={14} color="#0066ff" /> Free Consultation</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} color="#0066ff" /> Fast Response</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MessageSquare size={14} color="#0066ff" /> Confidential NDA</span>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
