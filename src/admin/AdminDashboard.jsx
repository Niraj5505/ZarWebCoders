import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  Mail,
  Code2,
  FolderGit2,
  BookOpen,
  Users,
  Settings,
  LogOut,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
  Search,
  CheckCircle,
  AlertCircle,
  Shield,
  Globe,
  Lock,
  Eye,
  EyeOff,
  Menu,
  X,
  RefreshCw,
  Send
} from 'lucide-react';
import { adminService } from './adminService';
import './admin.css';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(adminService.isAuthenticated());
  const [authUser, setAuthUser] = useState(adminService.getAuthUser());

  // Navigation State
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // System Health
  const [systemHealth, setSystemHealth] = useState({ online: false, database: 'Checking...' });

  // Data States
  const [inquiries, setInquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [team, setTeam] = useState([]);
  const [settings, setSettings] = useState(null);

  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('all');

  // Modals
  const [modalType, setModalType] = useState(null); // 'service', 'caseStudy', 'blog', 'team', 'inquiryDetail', 'contactDetail', 'deleteConfirm'
  const [editingItem, setEditingItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Toast
  const [toastMessage, setToastMessage] = useState(null);

  // Login Form
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Show Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const checkHealth = async () => {
    const health = await adminService.checkHealth();
    setSystemHealth(health);
  };

  const loadAllData = async () => {
    try {
      const [inqRes, conRes, srvRes, csRes, blgRes, tmRes, setRes] = await Promise.all([
        adminService.getInquiries(),
        adminService.getContacts(),
        adminService.getServices(),
        adminService.getCaseStudies(),
        adminService.getBlogs(),
        adminService.getTeam(),
        adminService.getSettings()
      ]);

      setInquiries(inqRes.data || []);
      setContacts(conRes.data || []);
      setServices(srvRes.data || []);
      setCaseStudies(csRes.data || []);
      setBlogs(blgRes.data || []);
      setTeam(tmRes.data || []);
      setSettings(setRes.data || {});
    } catch (err) {
      console.error('Error loading admin data:', err);
    }
  };

  // Check Auth & Initial Load
  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
      checkHealth();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const res = await adminService.login(loginUsername, loginPassword);
    if (res.success) {
      setIsAuthenticated(true);
      setAuthUser(res.user);
      showToast('Welcome back, Administrator!');
    } else {
      setLoginError(res.error || 'Invalid credentials');
    }
  };

  const handleLogout = () => {
    adminService.logout();
    setIsAuthenticated(false);
    setAuthUser(null);
  };

  // Inquiry Status Handler
  const handleUpdateInquiryStatus = async (id, newStatus) => {
    const updated = await adminService.updateInquiry(id, { status: newStatus });
    if (updated) {
      setInquiries(inquiries.map((inq) => ((inq._id || inq.id) === id ? { ...inq, status: newStatus } : inq)));
      showToast(`Inquiry status updated to ${newStatus}`);
    }
  };

  // Delete Action Confirm
  const confirmDelete = async () => {
    if (!itemToDelete) return;
    const { type, id } = itemToDelete;

    if (type === 'inquiry') {
      await adminService.deleteInquiry(id);
      setInquiries(inquiries.filter((i) => (i._id || i.id) !== id));
      showToast('Inquiry removed');
    } else if (type === 'contact') {
      await adminService.deleteContact(id);
      setContacts(contacts.filter((c) => (c._id || c.id) !== id));
      showToast('Contact message deleted');
    } else if (type === 'service') {
      await adminService.deleteService(id);
      setServices(services.filter((s) => (s._id || s.id) !== id));
      showToast('Service deleted');
    } else if (type === 'caseStudy') {
      await adminService.deleteCaseStudy(id);
      setCaseStudies(caseStudies.filter((cs) => (cs._id || cs.id) !== id));
      showToast('Case study deleted');
    } else if (type === 'blog') {
      await adminService.deleteBlog(id);
      setBlogs(blogs.filter((b) => (b._id || b.id) !== id));
      showToast('Blog post deleted');
    } else if (type === 'team') {
      await adminService.deleteTeamMember(id);
      setTeam(team.filter((t) => (t._id || t.id) !== id));
      showToast('Team member deleted');
    }

    setModalType(null);
    setItemToDelete(null);
    loadAllData();
  };

  // ==========================================
  // LOGIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="admin-login-backdrop">
        <div className="admin-login-glow"></div>
        <div className="admin-login-card">
          <div className="admin-login-header">
            <img
              src="/images/logo_zarwebcoders_transparent.png"
              alt="ZarWebCoders"
              style={{ height: '42px', width: 'auto', margin: '0 auto 16px', display: 'block' }}
            />
            <div className="admin-login-badge">
              <Shield size={13} /> Admin Command Center
            </div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
              Sign In to Admin
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.88rem', marginTop: '6px' }}>
              Manage website services, inquiries, blog posts, and settings
            </p>
          </div>

          {loginError && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#dc2626',
              padding: '10px 14px',
              borderRadius: '10px',
              fontSize: '0.86rem',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <AlertCircle size={16} /> {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="admin-input-group">
              <label className="admin-label">Username or Email</label>
              <input
                type="text"
                className="admin-input"
                placeholder="Enter username or email"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
            </div>

            <div className="admin-input-group">
              <label className="admin-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="admin-input"
                  placeholder="Enter password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginTop: '10px' }}
            >
              <Lock size={16} /> Sign In to Dashboard
            </button>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <Link to="/" style={{ color: '#1a7aff', fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
                ← Return to Public Website
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Count unread / new items
  const newInquiriesCount = inquiries.filter((i) => i.status === 'new').length;

  return (
    <div className="admin-root">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="admin-toast">
          <CheckCircle size={18} color="#1a7aff" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ────────── Sidebar ────────── */}
      <aside className={`admin-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/images/logo_zarwebcoders_transparent.png"
              alt="ZarWebCoders"
              style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                ZarWebCoders
              </div>
              <div style={{ fontSize: '0.72rem', color: '#1a7aff', fontWeight: 600, textTransform: 'uppercase' }}>
                Admin Portal
              </div>
            </div>
          </div>
          <button
            className="admin-btn-icon"
            onClick={() => setMobileMenuOpen(false)}
            style={{ display: window.innerWidth <= 900 ? 'flex' : 'none', color: '#64748b' }}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="admin-sidebar-nav">
          <button
            className={`admin-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => { setActiveTab('overview'); setMobileMenuOpen(false); }}
          >
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => { setActiveTab('inquiries'); setMobileMenuOpen(false); }}
          >
            <Inbox size={18} />
            <span>Project Inquiries</span>
            {newInquiriesCount > 0 && <span className="badge">{newInquiriesCount} new</span>}
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => { setActiveTab('contacts'); setMobileMenuOpen(false); }}
          >
            <Mail size={18} />
            <span>Contact Messages</span>
            <span className="badge" style={{ background: '#e2e8f0', color: '#475569' }}>{contacts.length}</span>
          </button>

          <div style={{ height: '1px', background: '#e2e8f0', margin: '8px 6px' }}></div>

          <button
            className={`admin-nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
          >
            <Code2 size={18} />
            <span>Web3 Services</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'caseStudies' ? 'active' : ''}`}
            onClick={() => { setActiveTab('caseStudies'); setMobileMenuOpen(false); }}
          >
            <FolderGit2 size={18} />
            <span>Case Studies</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => { setActiveTab('blogs'); setMobileMenuOpen(false); }}
          >
            <BookOpen size={18} />
            <span>Blog Articles</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => { setActiveTab('team'); setMobileMenuOpen(false); }}
          >
            <Users size={18} />
            <span>Team Members</span>
          </button>

          <div style={{ height: '1px', background: '#e2e8f0', margin: '8px 6px' }}></div>

          <button
            className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => { setActiveTab('settings'); setMobileMenuOpen(false); }}
          >
            <Settings size={18} />
            <span>Website Settings</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <Link
            to="/"
            target="_blank"
            className="admin-btn admin-btn-secondary"
            style={{ width: '100%', fontSize: '0.84rem' }}
          >
            <ExternalLink size={15} /> Visit Live Site
          </Link>
          <button
            onClick={handleLogout}
            className="admin-btn admin-btn-danger"
            style={{ width: '100%', fontSize: '0.84rem' }}
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      {/* ────────── Main Content ────────── */}
      <main className="admin-main">
        {/* Top Header */}
        <header className="admin-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              className="admin-btn-icon"
              onClick={() => setMobileMenuOpen(true)}
              style={{ display: window.innerWidth <= 900 ? 'flex' : 'none', color: '#0d1526' }}
            >
              <Menu size={20} />
            </button>
            <div>
              <div style={{ fontSize: '1.18rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                {activeTab === 'overview' && 'Dashboard Overview'}
                {activeTab === 'inquiries' && 'Client Project Inquiries'}
                {activeTab === 'contacts' && 'Contact Form Messages'}
                {activeTab === 'services' && 'Web3 Services Manager'}
                {activeTab === 'caseStudies' && 'Case Studies & Portfolio'}
                {activeTab === 'blogs' && 'Blog & Articles Manager'}
                {activeTab === 'team' && 'Team & Leadership Roster'}
                {activeTab === 'settings' && 'Global Website Settings'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                Logged in as <span style={{ color: '#1a7aff', fontWeight: 600 }}>{authUser?.name || 'Administrator'}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Status Pill */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: systemHealth.online ? '#22c55e' : '#eab308'
              }}></span>
              <span style={{ color: '#475569', fontWeight: 500 }}>
                {systemHealth.online ? 'Backend Connected' : 'Local Storage Mode'}
              </span>
            </div>

            <button
              onClick={() => { loadAllData(); checkHealth(); showToast('Data refreshed'); }}
              className="admin-btn admin-btn-secondary admin-btn-icon"
              title="Refresh Data"
            >
              <RefreshCw size={15} />
            </button>

            <Link
              to="/"
              className="admin-btn admin-btn-primary admin-btn-sm"
              style={{ display: window.innerWidth > 640 ? 'inline-flex' : 'none' }}
            >
              <Globe size={14} /> View Site
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <div className="admin-content">
          {/* ========================================================
              TAB: OVERVIEW
             ======================================================== */}
          {activeTab === 'overview' && (
            <div>
              {/* Stats Cards */}
              <div className="admin-stats-grid">
                <div className="admin-stat-card" onClick={() => setActiveTab('inquiries')} style={{ cursor: 'pointer' }}>
                  <div className="admin-stat-icon-wrap" style={{ background: 'rgba(26, 122, 255, 0.08)', color: '#1a7aff' }}>
                    <Inbox size={22} />
                  </div>
                  <div className="admin-stat-number">{inquiries.length}</div>
                  <div className="admin-stat-label">Project Inquiries</div>
                  <div style={{ fontSize: '0.75rem', color: '#1a7aff', marginTop: '6px', fontWeight: 600 }}>
                    {newInquiriesCount} pending review →
                  </div>
                </div>

                <div className="admin-stat-card" onClick={() => setActiveTab('contacts')} style={{ cursor: 'pointer' }}>
                  <div className="admin-stat-icon-wrap" style={{ background: 'rgba(0, 212, 255, 0.1)', color: '#008fb8' }}>
                    <Mail size={22} />
                  </div>
                  <div className="admin-stat-number">{contacts.length}</div>
                  <div className="admin-stat-label">Contact Submissions</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                    General feedback & leads →
                  </div>
                </div>

                <div className="admin-stat-card" onClick={() => setActiveTab('services')} style={{ cursor: 'pointer' }}>
                  <div className="admin-stat-icon-wrap" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#9333ea' }}>
                    <Code2 size={22} />
                  </div>
                  <div className="admin-stat-number">{services.length}</div>
                  <div className="admin-stat-label">Web3 Services</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                    Active catalog offerings →
                  </div>
                </div>

                <div className="admin-stat-card" onClick={() => setActiveTab('caseStudies')} style={{ cursor: 'pointer' }}>
                  <div className="admin-stat-icon-wrap" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
                    <FolderGit2 size={22} />
                  </div>
                  <div className="admin-stat-number">{caseStudies.length}</div>
                  <div className="admin-stat-label">Case Studies</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                    Featured portfolio projects →
                  </div>
                </div>

                <div className="admin-stat-card" onClick={() => setActiveTab('blogs')} style={{ cursor: 'pointer' }}>
                  <div className="admin-stat-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                    <BookOpen size={22} />
                  </div>
                  <div className="admin-stat-number">{blogs.length}</div>
                  <div className="admin-stat-label">Blog Posts</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                    Published technical articles →
                  </div>
                </div>

                <div className="admin-stat-card" onClick={() => setActiveTab('team')} style={{ cursor: 'pointer' }}>
                  <div className="admin-stat-icon-wrap" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#db2777' }}>
                    <Users size={22} />
                  </div>
                  <div className="admin-stat-number">{team.length}</div>
                  <div className="admin-stat-label">Team Members</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                    Engineers & Leadership →
                  </div>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px 24px',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
              }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#0d1526', fontSize: '1.05rem', fontFamily: 'Outfit, sans-serif' }}>
                    Quick Content Actions
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Instantly create or edit website sections
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    className="admin-btn admin-btn-primary admin-btn-sm"
                    onClick={() => { setEditingItem(null); setModalType('service'); }}
                  >
                    <Plus size={14} /> Add Service
                  </button>
                  <button
                    className="admin-btn admin-btn-secondary admin-btn-sm"
                    onClick={() => { setEditingItem(null); setModalType('caseStudy'); }}
                  >
                    <Plus size={14} /> Add Case Study
                  </button>
                  <button
                    className="admin-btn admin-btn-secondary admin-btn-sm"
                    onClick={() => { setEditingItem(null); setModalType('blog'); }}
                  >
                    <Plus size={14} /> Write Blog Post
                  </button>
                  <button
                    className="admin-btn admin-btn-secondary admin-btn-sm"
                    onClick={() => { setEditingItem(null); setModalType('team'); }}
                  >
                    <Plus size={14} /> Add Team Member
                  </button>
                </div>
              </div>

              {/* Two Column Grid: Recent Inquiries + Contacts */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '24px' }}>
                {/* Recent Inquiries */}
                <div className="admin-panel" style={{ margin: 0 }}>
                  <div className="admin-panel-header">
                    <div className="admin-panel-title">
                      <Inbox size={18} color="#1a7aff" /> Recent Inquiries
                    </div>
                    <button
                      className="admin-btn admin-btn-secondary admin-btn-sm"
                      onClick={() => setActiveTab('inquiries')}
                    >
                      View All ({inquiries.length})
                    </button>
                  </div>
                  <div className="admin-panel-body" style={{ padding: '0' }}>
                    {inquiries.length === 0 ? (
                      <div style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>
                        No inquiries yet.
                      </div>
                    ) : (
                      <div className="admin-table-container">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Client</th>
                              <th>Service</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {inquiries.slice(0, 5).map((inq) => {
                              const id = inq._id || inq.id;
                              return (
                                <tr key={id}>
                                  <td>
                                    <div style={{ fontWeight: 600, color: '#0d1526' }}>{inq.name}</div>
                                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{inq.email}</div>
                                  </td>
                                  <td>
                                    <div style={{ fontSize: '0.84rem', color: '#334155' }}>{inq.serviceType || 'General'}</div>
                                    <div style={{ fontSize: '0.76rem', color: '#1a7aff', fontWeight: 600 }}>{inq.budget || ''}</div>
                                  </td>
                                  <td>
                                    <select
                                      className={`status-pill ${inq.status || 'new'}`}
                                      value={inq.status || 'new'}
                                      onChange={(e) => handleUpdateInquiryStatus(id, e.target.value)}
                                      style={{ background: '#ffffff', border: '1px solid #cbd5e1', cursor: 'pointer' }}
                                    >
                                      <option value="new">New</option>
                                      <option value="contacted">Contacted</option>
                                      <option value="closed">Closed</option>
                                    </select>
                                  </td>
                                  <td>
                                    <button
                                      className="admin-btn admin-btn-secondary admin-btn-sm"
                                      onClick={() => { setEditingItem(inq); setModalType('inquiryDetail'); }}
                                    >
                                      Details
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent Contacts */}
                <div className="admin-panel" style={{ margin: 0 }}>
                  <div className="admin-panel-header">
                    <div className="admin-panel-title">
                      <Mail size={18} color="#008fb8" /> Recent Contact Messages
                    </div>
                    <button
                      className="admin-btn admin-btn-secondary admin-btn-sm"
                      onClick={() => setActiveTab('contacts')}
                    >
                      View All ({contacts.length})
                    </button>
                  </div>
                  <div className="admin-panel-body" style={{ padding: '0' }}>
                    {contacts.length === 0 ? (
                      <div style={{ padding: '32px', textAlign: 'center', color: '#64748b' }}>
                        No messages yet.
                      </div>
                    ) : (
                      <div className="admin-table-container">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>From</th>
                              <th>Subject</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {contacts.slice(0, 5).map((con) => {
                              const id = con._id || con.id;
                              return (
                                <tr key={id}>
                                  <td>
                                    <div style={{ fontWeight: 600, color: '#0d1526' }}>{con.name}</div>
                                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{con.email}</div>
                                  </td>
                                  <td>
                                    <div style={{ fontSize: '0.84rem', color: '#475569', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                      {con.projectType ? `[${con.projectType}] ` : ''}{con.message}
                                    </div>
                                  </td>
                                  <td>
                                    <button
                                      className="admin-btn admin-btn-secondary admin-btn-sm"
                                      onClick={() => { setEditingItem(con); setModalType('contactDetail'); }}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: PROJECT INQUIRIES
             ======================================================== */}
          {activeTab === 'inquiries' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-filter-bar">
                  <div className="admin-search-box">
                    <Search size={16} className="icon" />
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="Search inquiries by client, email, or service..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {['all', 'new', 'contacted', 'closed'].map((st) => (
                      <button
                        key={st}
                        className={`admin-btn admin-btn-sm ${inquiryStatusFilter === st ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
                        onClick={() => setInquiryStatusFilter(st)}
                        style={{ textTransform: 'capitalize' }}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: '0.86rem', color: '#64748b' }}>
                  Total Inquiries: <strong style={{ color: '#0d1526' }}>{inquiries.length}</strong>
                </div>
              </div>

              <div className="admin-panel-body" style={{ padding: '0' }}>
                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Client Details</th>
                        <th>Service Requested</th>
                        <th>Budget</th>
                        <th>Submission Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries
                        .filter((item) => {
                          const matchesFilter = inquiryStatusFilter === 'all' || item.status === inquiryStatusFilter;
                          const matchesQuery =
                            !searchQuery ||
                            item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.serviceType?.toLowerCase().includes(searchQuery.toLowerCase());
                          return matchesFilter && matchesQuery;
                        })
                        .map((inq) => {
                          const id = inq._id || inq.id;
                          return (
                            <tr key={id}>
                              <td>
                                <div style={{ fontWeight: 600, color: '#0d1526' }}>{inq.name}</div>
                                <div style={{ fontSize: '0.8rem', color: '#1a7aff' }}>{inq.email}</div>
                                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{inq.phone}</div>
                              </td>
                              <td>
                                <div style={{ fontWeight: 500, color: '#334155' }}>{inq.serviceType || 'Not specified'}</div>
                              </td>
                              <td>
                                <span style={{
                                  background: 'rgba(26, 122, 255, 0.08)',
                                  color: '#1a7aff',
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  fontSize: '0.78rem',
                                  fontWeight: 600
                                }}>
                                  {inq.budget || 'Flexible'}
                                </span>
                              </td>
                              <td>
                                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                                  {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'Recent'}
                                </div>
                              </td>
                              <td>
                                <select
                                  className={`status-pill ${inq.status || 'new'}`}
                                  value={inq.status || 'new'}
                                  onChange={(e) => handleUpdateInquiryStatus(id, e.target.value)}
                                  style={{ background: '#ffffff', border: '1px solid #cbd5e1' }}
                                >
                                  <option value="new">New</option>
                                  <option value="contacted">Contacted</option>
                                  <option value="closed">Closed</option>
                                </select>
                              </td>
                              <td>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                  <button
                                    className="admin-btn admin-btn-secondary admin-btn-sm"
                                    onClick={() => { setEditingItem(inq); setModalType('inquiryDetail'); }}
                                  >
                                    View
                                  </button>
                                  <button
                                    className="admin-btn admin-btn-danger admin-btn-sm"
                                    onClick={() => { setItemToDelete({ type: 'inquiry', id, name: inq.name }); setModalType('deleteConfirm'); }}
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: CONTACT MESSAGES
             ======================================================== */}
          {activeTab === 'contacts' && (
            <div className="admin-panel">
              <div className="admin-panel-header">
                <div className="admin-search-box">
                  <Search size={16} className="icon" />
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Search contact messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div style={{ fontSize: '0.86rem', color: '#64748b' }}>
                  Total Messages: <strong style={{ color: '#0d1526' }}>{contacts.length}</strong>
                </div>
              </div>

              <div className="admin-panel-body" style={{ padding: '0' }}>
                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Sender</th>
                        <th>Project Type</th>
                        <th>Message Preview</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts
                        .filter((c) =>
                          !searchQuery ||
                          c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.message?.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((con) => {
                          const id = con._id || con.id;
                          return (
                            <tr key={id}>
                              <td>
                                <div style={{ fontWeight: 600, color: '#0d1526' }}>{con.name}</div>
                                <div style={{ fontSize: '0.8rem', color: '#1a7aff' }}>{con.email}</div>
                                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{con.phone}</div>
                              </td>
                              <td>
                                <span style={{
                                  background: 'rgba(26, 122, 255, 0.08)',
                                  color: '#1a7aff',
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  fontSize: '0.78rem',
                                  fontWeight: 500
                                }}>
                                  {con.projectType || 'General'}
                                </span>
                              </td>
                              <td>
                                <div style={{ color: '#334155', maxWidth: '350px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {con.message}
                                </div>
                              </td>
                              <td>
                                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                                  {con.createdAt ? new Date(con.createdAt).toLocaleDateString() : 'Recent'}
                                </div>
                              </td>
                              <td>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                  <button
                                    className="admin-btn admin-btn-secondary admin-btn-sm"
                                    onClick={() => { setEditingItem(con); setModalType('contactDetail'); }}
                                  >
                                    Read
                                  </button>
                                  <a
                                    href={`mailto:${con.email}`}
                                    className="admin-btn admin-btn-secondary admin-btn-sm"
                                    title="Reply via Email"
                                  >
                                    <Send size={13} />
                                  </a>
                                  <button
                                    className="admin-btn admin-btn-danger admin-btn-sm"
                                    onClick={() => { setItemToDelete({ type: 'contact', id, name: con.name }); setModalType('deleteConfirm'); }}
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: SERVICES MANAGER
             ======================================================== */}
          {activeTab === 'services' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
                <div className="admin-search-box">
                  <Search size={16} className="icon" />
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  className="admin-btn admin-btn-primary"
                  onClick={() => { setEditingItem(null); setModalType('service'); }}
                >
                  <Plus size={16} /> Create New Service
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
                {services
                  .filter((s) => !searchQuery || s.title?.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((srv) => {
                    const id = srv._id || srv.id;
                    return (
                      <div key={id} className="admin-panel" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <div className="admin-panel-header">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: 'rgba(26, 122, 255, 0.08)',
                              color: '#1a7aff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Code2 size={18} />
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, color: '#0d1526', fontSize: '1rem', fontFamily: 'Outfit, sans-serif' }}>
                                {srv.title}
                              </div>
                              <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                                Slug: /{srv.slug}
                              </div>
                            </div>
                          </div>

                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button
                              className="admin-btn admin-btn-secondary admin-btn-sm"
                              onClick={() => { setEditingItem(srv); setModalType('service'); }}
                            >
                              <Edit3 size={13} />
                            </button>
                            <button
                              className="admin-btn admin-btn-danger admin-btn-sm"
                              onClick={() => { setItemToDelete({ type: 'service', id, name: srv.title }); setModalType('deleteConfirm'); }}
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>

                        <div className="admin-panel-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
                            {srv.description}
                          </p>

                          <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                              {(srv.features || []).map((f, i) => (
                                <span
                                  key={i}
                                  style={{
                                    fontSize: '0.74rem',
                                    padding: '3px 8px',
                                    background: 'rgba(26, 122, 255, 0.08)',
                                    color: '#1a7aff',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(26, 122, 255, 0.18)',
                                    fontWeight: 500
                                  }}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f1f5f9', fontSize: '0.82rem' }}>
                              <span style={{ color: '#64748b' }}>Starting Rate:</span>
                              <span style={{ color: '#16a34a', fontWeight: 600 }}>{srv.price || 'Custom Quote'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: CASE STUDIES
             ======================================================== */}
          {activeTab === 'caseStudies' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
                <div className="admin-search-box">
                  <Search size={16} className="icon" />
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  className="admin-btn admin-btn-primary"
                  onClick={() => { setEditingItem(null); setModalType('caseStudy'); }}
                >
                  <Plus size={16} /> Add Case Study
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px' }}>
                {caseStudies
                  .filter((cs) => !searchQuery || cs.title?.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((cs) => {
                    const id = cs._id || cs.id;
                    return (
                      <div key={id} className="admin-panel" style={{ margin: 0, overflow: 'hidden' }}>
                        {cs.imageUrl && (
                          <div style={{ height: '160px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                            <img
                              src={cs.imageUrl}
                              alt={cs.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                              position: 'absolute',
                              bottom: '10px',
                              left: '12px',
                              background: 'rgba(255, 255, 255, 0.95)',
                              border: '1px solid #e2e8f0',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              color: '#1a7aff',
                              fontWeight: 600,
                              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                            }}>
                              Client: {cs.client || 'Confidential'}
                            </div>
                          </div>
                        )}

                        <div className="admin-panel-body">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                              {cs.title}
                            </h3>
                            <div style={{ display: 'flex', gap: '6px' }}>
                              <button
                                className="admin-btn admin-btn-secondary admin-btn-sm"
                                onClick={() => { setEditingItem(cs); setModalType('caseStudy'); }}
                              >
                                <Edit3 size={13} />
                              </button>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => { setItemToDelete({ type: 'caseStudy', id, name: cs.title }); setModalType('deleteConfirm'); }}
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>

                          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', marginBottom: '14px' }}>
                            {cs.description}
                          </p>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {(cs.techStack || []).map((t, idx) => (
                              <span
                                key={idx}
                                style={{
                                  fontSize: '0.74rem',
                                  padding: '2px 8px',
                                  borderRadius: '4px',
                                  background: '#f8fafc',
                                  color: '#334155',
                                  border: '1px solid #e2e8f0',
                                  fontWeight: 500
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: BLOG POSTS
             ======================================================== */}
          {activeTab === 'blogs' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
                <div className="admin-search-box">
                  <Search size={16} className="icon" />
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  className="admin-btn admin-btn-primary"
                  onClick={() => { setEditingItem(null); setModalType('blog'); }}
                >
                  <Plus size={16} /> Publish New Article
                </button>
              </div>

              <div className="admin-panel">
                <div className="admin-panel-body" style={{ padding: '0' }}>
                  <div className="admin-table-container">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Post</th>
                          <th>Author</th>
                          <th>Tags</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogs
                          .filter((b) => !searchQuery || b.title?.toLowerCase().includes(searchQuery.toLowerCase()))
                          .map((post) => {
                            const id = post._id || post.id;
                            return (
                              <tr key={id}>
                                <td>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {post.coverImage && (
                                      <img
                                        src={post.coverImage}
                                        alt=""
                                        style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover' }}
                                      />
                                    )}
                                    <div>
                                      <div style={{ fontWeight: 600, color: '#0d1526' }}>{post.title}</div>
                                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>/{post.slug}</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div style={{ fontSize: '0.86rem', color: '#334155' }}>{post.author}</div>
                                </td>
                                <td>
                                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                                    {(post.tags || []).map((tg, idx) => (
                                      <span key={idx} style={{ fontSize: '0.72rem', padding: '2px 6px', background: 'rgba(26, 122, 255, 0.08)', color: '#1a7aff', borderRadius: '4px', fontWeight: 500 }}>
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                </td>
                                <td>
                                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Published'}
                                  </div>
                                </td>
                                <td>
                                  <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                      className="admin-btn admin-btn-secondary admin-btn-sm"
                                      onClick={() => { setEditingItem(post); setModalType('blog'); }}
                                    >
                                      <Edit3 size={13} />
                                    </button>
                                    <button
                                      className="admin-btn admin-btn-danger admin-btn-sm"
                                      onClick={() => { setItemToDelete({ type: 'blog', id, name: post.title }); setModalType('deleteConfirm'); }}
                                    >
                                      <Trash2 size={13} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: TEAM MEMBERS
             ======================================================== */}
          {activeTab === 'team' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
                <div className="admin-search-box">
                  <Search size={16} className="icon" />
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Search team members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  className="admin-btn admin-btn-primary"
                  onClick={() => { setEditingItem(null); setModalType('team'); }}
                >
                  <Plus size={16} /> Add Team Member
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
                {team
                  .filter((t) => !searchQuery || t.name?.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((tm) => {
                    const id = tm._id || tm.id;
                    return (
                      <div key={id} className="admin-panel" style={{ margin: 0 }}>
                        <div className="admin-panel-body" style={{ textAlign: 'center', padding: '28px 20px' }}>
                          <img
                            src={tm.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                            alt={tm.name}
                            style={{
                              width: '84px',
                              height: '84px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              margin: '0 auto 16px',
                              border: '2px solid #1a7aff',
                              boxShadow: '0 4px 14px rgba(26, 122, 255, 0.15)'
                            }}
                          />
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                            {tm.name}
                          </h3>
                          <div style={{ fontSize: '0.84rem', color: '#1a7aff', fontWeight: 600, marginTop: '2px', marginBottom: '12px' }}>
                            {tm.role}
                          </div>
                          <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.5', marginBottom: '20px' }}>
                            {tm.bio}
                          </p>

                          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <button
                              className="admin-btn admin-btn-secondary admin-btn-sm"
                              onClick={() => { setEditingItem(tm); setModalType('team'); }}
                            >
                              <Edit3 size={14} /> Edit
                            </button>
                            <button
                              className="admin-btn admin-btn-danger admin-btn-sm"
                              onClick={() => { setItemToDelete({ type: 'team', id, name: tm.name }); setModalType('deleteConfirm'); }}
                            >
                              <Trash2 size={14} /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: WEBSITE SETTINGS
             ======================================================== */}
          {activeTab === 'settings' && settings && (
            <div className="admin-panel" style={{ maxWidth: '850px' }}>
              <div className="admin-panel-header">
                <div className="admin-panel-title">
                  <Settings size={20} color="#1a7aff" /> Global Brand & Website Configurations
                </div>
              </div>

              <div className="admin-panel-body">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await adminService.updateSettings(settings);
                    showToast('Website settings saved successfully!');
                  }}
                >
                  <h4 style={{ color: '#1a7aff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px', fontWeight: 700 }}>
                    1. Brand Identity
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="admin-input-group">
                      <label className="admin-label">Company Brand Name</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.brandName || ''}
                        onChange={(e) => setSettings({ ...settings, brandName: e.target.value })}
                      />
                    </div>
                    <div className="admin-input-group">
                      <label className="admin-label">Sub Tagline</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.subTagline || ''}
                        onChange={(e) => setSettings({ ...settings, subTagline: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="admin-input-group">
                    <label className="admin-label">Primary Tagline</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={settings.tagline || ''}
                      onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                    />
                  </div>

                  <h4 style={{ color: '#1a7aff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '28px 0 16px', fontWeight: 700 }}>
                    2. Official Contact Information
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="admin-input-group">
                      <label className="admin-label">Official Support Email</label>
                      <input
                        type="email"
                        className="admin-input"
                        value={settings.email || ''}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      />
                    </div>
                    <div className="admin-input-group">
                      <label className="admin-label">Direct Phone Number</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.phone || ''}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="admin-input-group">
                    <label className="admin-label">Office Physical Address</label>
                    <textarea
                      className="admin-textarea"
                      rows={2}
                      value={settings.office || ''}
                      onChange={(e) => setSettings({ ...settings, office: e.target.value })}
                    />
                  </div>

                  <div className="admin-input-group">
                    <label className="admin-label">Google Maps Location Link</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={settings.mapsUrl || ''}
                      onChange={(e) => setSettings({ ...settings, mapsUrl: e.target.value })}
                    />
                  </div>

                  <h4 style={{ color: '#1a7aff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '28px 0 16px', fontWeight: 700 }}>
                    3. Social Media URLs
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="admin-input-group">
                      <label className="admin-label">X / Twitter</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.socials?.twitter || ''}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socials: { ...(settings.socials || {}), twitter: e.target.value }
                          })
                        }
                      />
                    </div>
                    <div className="admin-input-group">
                      <label className="admin-label">LinkedIn</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.socials?.linkedin || ''}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socials: { ...(settings.socials || {}), linkedin: e.target.value }
                          })
                        }
                      />
                    </div>
                    <div className="admin-input-group">
                      <label className="admin-label">Instagram</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.socials?.instagram || ''}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socials: { ...(settings.socials || {}), instagram: e.target.value }
                          })
                        }
                      />
                    </div>
                    <div className="admin-input-group">
                      <label className="admin-label">Facebook</label>
                      <input
                        type="text"
                        className="admin-input"
                        value={settings.socials?.facebook || ''}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            socials: { ...(settings.socials || {}), facebook: e.target.value }
                          })
                        }
                      />
                    </div>
                  </div>

                  <h4 style={{ color: '#1a7aff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '28px 0 16px', fontWeight: 700 }}>
                    4. Announcement Banner
                  </h4>

                  <div className="admin-input-group" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input
                      type="checkbox"
                      id="announcementCheck"
                      checked={settings.announcement?.enabled || false}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          announcement: { ...(settings.announcement || {}), enabled: e.target.checked }
                        })
                      }
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <label htmlFor="announcementCheck" style={{ color: '#0d1526', fontSize: '0.9rem', cursor: 'pointer', fontWeight: 500 }}>
                      Enable Announcement Banner on Website Header
                    </label>
                  </div>

                  <div className="admin-input-group">
                    <label className="admin-label">Banner Message</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={settings.announcement?.message || ''}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          announcement: { ...(settings.announcement || {}), message: e.target.value }
                        })
                      }
                    />
                  </div>

                  <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className="admin-btn admin-btn-primary" style={{ padding: '12px 28px' }}>
                      <CheckCircle size={16} /> Save All Website Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ========================================================
          MODAL: SERVICE (CREATE / EDIT)
         ======================================================== */}
      {modalType === 'service' && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                {editingItem ? 'Edit Web3 Service' : 'Create New Web3 Service'}
              </h3>
              <button onClick={() => setModalType(null)} style={{ color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const title = formData.get('title');
                const slug = formData.get('slug') || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const description = formData.get('description');
                const price = formData.get('price');
                const featuresRaw = formData.get('features');
                const features = featuresRaw ? featuresRaw.split(',').map((f) => f.trim()) : [];

                const payload = { title, slug, description, price, features };

                if (editingItem) {
                  const id = editingItem._id || editingItem.id;
                  await adminService.updateService(id, payload);
                  showToast('Service updated successfully');
                } else {
                  await adminService.createService(payload);
                  showToast('Service created successfully');
                }
                setModalType(null);
                loadAllData();
              }}
            >
              <div className="admin-input-group">
                <label className="admin-label">Service Title</label>
                <input
                  type="text"
                  name="title"
                  className="admin-input"
                  defaultValue={editingItem?.title || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">URL Slug (e.g. smart-contract-development)</label>
                <input
                  type="text"
                  name="slug"
                  className="admin-input"
                  defaultValue={editingItem?.slug || ''}
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Description</label>
                <textarea
                  name="description"
                  className="admin-textarea"
                  defaultValue={editingItem?.description || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Pricing Label (e.g. From $5,000 / Custom Quote)</label>
                <input
                  type="text"
                  name="price"
                  className="admin-input"
                  defaultValue={editingItem?.price || 'Custom quote'}
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Key Features (comma-separated tags)</label>
                <input
                  type="text"
                  name="features"
                  className="admin-input"
                  defaultValue={(editingItem?.features || []).join(', ')}
                  placeholder="Gas Optimization, Formal Verification, Audit-Ready"
                />
              </div>

              <div className="admin-modal-footer">
                <button type="button" className="admin-btn admin-btn-secondary" onClick={() => setModalType(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {editingItem ? 'Save Changes' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: CASE STUDY (CREATE / EDIT)
         ======================================================== */}
      {modalType === 'caseStudy' && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                {editingItem ? 'Edit Case Study' : 'Add Case Study'}
              </h3>
              <button onClick={() => setModalType(null)} style={{ color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const title = formData.get('title');
                const slug = formData.get('slug') || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const client = formData.get('client');
                const description = formData.get('description');
                const imageUrl = formData.get('imageUrl');
                const techStackRaw = formData.get('techStack');
                const techStack = techStackRaw ? techStackRaw.split(',').map((t) => t.trim()) : [];

                const payload = { title, slug, client, description, imageUrl, techStack };

                if (editingItem) {
                  const id = editingItem._id || editingItem.id;
                  await adminService.updateCaseStudy(id, payload);
                  showToast('Case study updated successfully');
                } else {
                  await adminService.createCaseStudy(payload);
                  showToast('Case study added successfully');
                }
                setModalType(null);
                loadAllData();
              }}
            >
              <div className="admin-input-group">
                <label className="admin-label">Case Study Title</label>
                <input
                  type="text"
                  name="title"
                  className="admin-input"
                  defaultValue={editingItem?.title || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Client Name</label>
                <input
                  type="text"
                  name="client"
                  className="admin-input"
                  defaultValue={editingItem?.client || ''}
                  placeholder="e.g. Aegis Finance / Vanguard Collectibles"
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Description / Summary</label>
                <textarea
                  name="description"
                  className="admin-textarea"
                  defaultValue={editingItem?.description || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Cover Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  className="admin-input"
                  defaultValue={editingItem?.imageUrl || 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'}
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Tech Stack (comma-separated)</label>
                <input
                  type="text"
                  name="techStack"
                  className="admin-input"
                  defaultValue={(editingItem?.techStack || []).join(', ')}
                  placeholder="Solidity, Ethereum, Hardhat, Ethers.js"
                />
              </div>

              <div className="admin-modal-footer">
                <button type="button" className="admin-btn admin-btn-secondary" onClick={() => setModalType(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {editingItem ? 'Save Changes' : 'Publish Case Study'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: BLOG (CREATE / EDIT)
         ======================================================== */}
      {modalType === 'blog' && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                {editingItem ? 'Edit Blog Post' : 'Write New Blog Article'}
              </h3>
              <button onClick={() => setModalType(null)} style={{ color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const title = formData.get('title');
                const slug = formData.get('slug') || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const author = formData.get('author');
                const content = formData.get('content');
                const coverImage = formData.get('coverImage');
                const tagsRaw = formData.get('tags');
                const tags = tagsRaw ? tagsRaw.split(',').map((t) => t.trim()) : [];

                const payload = { title, slug, author, content, coverImage, tags };

                if (editingItem) {
                  const id = editingItem._id || editingItem.id;
                  await adminService.updateBlog(id, payload);
                  showToast('Blog article updated');
                } else {
                  await adminService.createBlog(payload);
                  showToast('Blog article published');
                }
                setModalType(null);
                loadAllData();
              }}
            >
              <div className="admin-input-group">
                <label className="admin-label">Article Title</label>
                <input
                  type="text"
                  name="title"
                  className="admin-input"
                  defaultValue={editingItem?.title || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Author Name</label>
                <input
                  type="text"
                  name="author"
                  className="admin-input"
                  defaultValue={editingItem?.author || 'Abuzar Munshi'}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Article Excerpt / Content</label>
                <textarea
                  name="content"
                  className="admin-textarea"
                  rows={4}
                  defaultValue={editingItem?.content || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Cover Image URL</label>
                <input
                  type="url"
                  name="coverImage"
                  className="admin-input"
                  defaultValue={editingItem?.coverImage || 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'}
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Tags / Categories (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  className="admin-input"
                  defaultValue={(editingItem?.tags || []).join(', ')}
                  placeholder="Solidity, Web3, Smart Contracts"
                />
              </div>

              <div className="admin-modal-footer">
                <button type="button" className="admin-btn admin-btn-secondary" onClick={() => setModalType(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {editingItem ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: TEAM (CREATE / EDIT)
         ======================================================== */}
      {modalType === 'team' && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                {editingItem ? 'Edit Team Member' : 'Add Team Member'}
              </h3>
              <button onClick={() => setModalType(null)} style={{ color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const role = formData.get('role');
                const bio = formData.get('bio');
                const imageUrl = formData.get('imageUrl');
                const linkedin = formData.get('linkedin');
                const twitter = formData.get('twitter');

                const payload = { name, role, bio, imageUrl, linkedin, twitter };

                if (editingItem) {
                  const id = editingItem._id || editingItem.id;
                  await adminService.updateTeamMember(id, payload);
                  showToast('Team member updated');
                } else {
                  await adminService.createTeamMember(payload);
                  showToast('Team member added');
                }
                setModalType(null);
                loadAllData();
              }}
            >
              <div className="admin-input-group">
                <label className="admin-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="admin-input"
                  defaultValue={editingItem?.name || ''}
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Role / Title</label>
                <input
                  type="text"
                  name="role"
                  className="admin-input"
                  defaultValue={editingItem?.role || ''}
                  placeholder="e.g. Lead Blockchain Engineer"
                  required
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Short Bio</label>
                <textarea
                  name="bio"
                  className="admin-textarea"
                  rows={3}
                  defaultValue={editingItem?.bio || ''}
                />
              </div>

              <div className="admin-input-group">
                <label className="admin-label">Profile Avatar Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  className="admin-input"
                  defaultValue={editingItem?.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="admin-input-group">
                  <label className="admin-label">LinkedIn URL</label>
                  <input
                    type="url"
                    name="linkedin"
                    className="admin-input"
                    defaultValue={editingItem?.linkedin || 'https://linkedin.com'}
                  />
                </div>
                <div className="admin-input-group">
                  <label className="admin-label">Twitter / X URL</label>
                  <input
                    type="url"
                    name="twitter"
                    className="admin-input"
                    defaultValue={editingItem?.twitter || 'https://x.com/zarwebcoders'}
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button type="button" className="admin-btn admin-btn-secondary" onClick={() => setModalType(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {editingItem ? 'Save Changes' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: INQUIRY DETAIL
         ======================================================== */}
      {modalType === 'inquiryDetail' && editingItem && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                Inquiry Details
              </h3>
              <button onClick={() => setModalType(null)} style={{ color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Client Name</div>
                  <div style={{ fontWeight: 700, color: '#0d1526', fontSize: '1.05rem', marginTop: '2px' }}>{editingItem.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Status</div>
                  <div style={{ marginTop: '2px' }}>
                    <span className={`status-pill ${editingItem.status || 'new'}`}>
                      {editingItem.status || 'new'}
                    </span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                  <a href={`mailto:${editingItem.email}`} style={{ color: '#1a7aff', fontSize: '0.9rem', fontWeight: 500 }}>{editingItem.email}</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Phone</div>
                  <a href={`tel:${editingItem.phone}`} style={{ color: '#334155', fontSize: '0.9rem' }}>{editingItem.phone}</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Service Requested</div>
                  <div style={{ color: '#0d1526', fontWeight: 600 }}>{editingItem.serviceType || 'General Inquiry'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Estimated Budget</div>
                  <div style={{ color: '#16a34a', fontWeight: 600 }}>{editingItem.budget || 'Open / Discussion'}</div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#475569', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
                  Project Requirements & Message
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', color: '#334155', lineHeight: '1.6', fontSize: '0.92rem', whiteSpace: 'pre-wrap' }}>
                  {editingItem.details || editingItem.message || 'No additional details provided.'}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    className="admin-btn admin-btn-sm admin-btn-secondary"
                    onClick={() => {
                      handleUpdateInquiryStatus(editingItem._id || editingItem.id, 'contacted');
                      setEditingItem({ ...editingItem, status: 'contacted' });
                    }}
                  >
                    Mark Contacted
                  </button>
                  <button
                    className="admin-btn admin-btn-sm admin-btn-secondary"
                    onClick={() => {
                      handleUpdateInquiryStatus(editingItem._id || editingItem.id, 'closed');
                      setEditingItem({ ...editingItem, status: 'closed' });
                    }}
                  >
                    Mark Closed
                  </button>
                </div>

                <a
                  href={`mailto:${editingItem.email}?subject=Regarding your project inquiry at ZarWebCoders`}
                  className="admin-btn admin-btn-primary admin-btn-sm"
                >
                  <Send size={14} /> Send Direct Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: CONTACT DETAIL
         ======================================================== */}
      {modalType === 'contactDetail' && editingItem && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
                Contact Message
              </h3>
              <button onClick={() => setModalType(null)} style={{ color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>From</div>
                  <div style={{ fontWeight: 700, color: '#0d1526' }}>{editingItem.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Project Type</div>
                  <div style={{ color: '#1a7aff', fontWeight: 600 }}>{editingItem.projectType || 'General'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                  <div style={{ color: '#334155' }}>{editingItem.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Phone</div>
                  <div style={{ color: '#334155' }}>{editingItem.phone}</div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#475569', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
                  Message Content
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', color: '#334155', lineHeight: '1.6', fontSize: '0.92rem', whiteSpace: 'pre-wrap' }}>
                  {editingItem.message}
                </div>
              </div>

              <div className="admin-modal-footer">
                <a
                  href={`mailto:${editingItem.email}?subject=Re: Your message to ZarWebCoders`}
                  className="admin-btn admin-btn-primary"
                >
                  <Send size={15} /> Reply by Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: DELETE CONFIRMATION
         ======================================================== */}
      {modalType === 'deleteConfirm' && itemToDelete && (
        <div className="admin-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="admin-modal" style={{ maxWidth: '420px', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Trash2 size={24} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0d1526', fontFamily: 'Outfit, sans-serif' }}>
              Confirm Deletion
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '10px 0 24px', lineHeight: '1.5' }}>
              Are you sure you want to permanently delete <strong style={{ color: '#0d1526' }}>"{itemToDelete.name}"</strong>? This action cannot be undone.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button className="admin-btn admin-btn-secondary" onClick={() => setModalType(null)}>
                Cancel
              </button>
              <button className="admin-btn admin-btn-danger" onClick={confirmDelete}>
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
