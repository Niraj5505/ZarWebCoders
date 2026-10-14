import { services as defaultServices, caseStudies as defaultCaseStudies, blogPosts as defaultBlogPosts, teamMembers as defaultTeamMembers, brand as defaultBrand } from '../data/websiteData';

const STORAGE_KEYS = {
  AUTH: 'zar_admin_auth',
  INQUIRIES: 'zar_admin_inquiries',
  CONTACTS: 'zar_admin_contacts',
  SERVICES: 'zar_admin_services',
  CASE_STUDIES: 'zar_admin_case_studies',
  BLOGS: 'zar_admin_blogs',
  TEAM: 'zar_admin_team',
  SETTINGS: 'zar_admin_settings',
};

// Seed initial mock inquiries and contacts for rich experience if storage empty
const initialInquiries = [
  {
    _id: 'inq-1',
    name: 'Vikram Malhotra',
    email: 'vikram@nexusexchange.io',
    phone: '+91 98201 54321',
    serviceType: 'Smart Contract Development',
    budget: '$5,000 - $10,000',
    details: 'Need ERC-20 staking contract with dynamic yield calculations and audit readiness for upcoming token sale.',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    _id: 'inq-2',
    name: 'Elena Rostova',
    email: 'elena@aurorafi.com',
    phone: '+1 415 889 2314',
    serviceType: 'Security & Auditing',
    budget: '$10,000 - $25,000',
    details: 'Looking for a comprehensive formal verification and reentrancy audit on our multi-sig vault protocol.',
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    _id: 'inq-3',
    name: 'David Chen',
    email: 'david@metaquest.xyz',
    phone: '+65 9123 4567',
    serviceType: 'dApp Development',
    budget: '$15,000 - $30,000',
    details: 'Building an on-chain gaming dApp with seamless gasless transactions using ERC-4337 account abstraction.',
    status: 'closed',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString()
  }
];

const initialContacts = [
  {
    _id: 'con-1',
    name: 'Siddharth Patel',
    email: 'siddharth@blockventures.in',
    phone: '+91 99870 11223',
    projectType: 'Blockchain Consultation',
    message: 'Hello team, we would like to schedule an introductory call to discuss enterprise supply chain tracking on Polygon.',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
  },
  {
    _id: 'con-2',
    name: 'Sarah Jenkins',
    email: 's.jenkins@cryptoassets.uk',
    phone: '+44 20 7946 0912',
    projectType: 'Token Engineering',
    message: 'Interested in partnering on liquidity pool modeling and custom token vesting contracts for our DAO.',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

// Helper to safely fetch from API or fallback
async function fetchWithFallback(url, options = {}, storageKey, initialData = []) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });
    if (res.ok) {
      const json = await res.json();
      return { data: json.data || json, fromApi: true };
    }
  } catch (err) {
    // API not reachable, fallback to localStorage
  }

  // Fallback to localStorage
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      return { data: JSON.parse(saved), fromApi: false };
    } catch {
      // ignore
    }
  }

  // Initialize storage with initial data
  localStorage.setItem(storageKey, JSON.stringify(initialData));
  return { data: initialData, fromApi: false };
}

export const adminService = {
  // Authentication
  login: async (username, password) => {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const json = await res.json();
        const authData = {
          token: json.token,
          user: json.user,
          loggedInAt: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(authData));
        return { success: true, user: json.user };
      }
    } catch {
      // API down fallback
    }

    // Default demo login check
    if (
      (username === 'admin' || username === 'admin@zarwebcoders.in') &&
      (password === 'admin123' || password === 'admin')
    ) {
      const authData = {
        token: 'local_token_' + Date.now(),
        user: {
          username: 'admin',
          name: 'Administrator',
          role: 'Super Admin',
          email: 'admin@zarwebcoders.in'
        },
        loggedInAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(authData));
      return { success: true, user: authData.user };
    }

    return {
      success: false,
      error: 'Invalid credentials. Default credentials: admin / admin123'
    };
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  },

  isAuthenticated: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
    return Boolean(saved);
  },

  getAuthUser: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
      return saved ? JSON.parse(saved).user : null;
    } catch {
      return null;
    }
  },

  // Health and System Stats
  checkHealth: async () => {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        const data = await res.json();
        return { online: true, database: data.database };
      }
    } catch {
      // fallback
    }
    return { online: false, database: 'offline (Local Storage Mode)' };
  },

  getStats: async () => {
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const json = await res.json();
        return { success: true, stats: json.stats, recentInquiries: json.recentInquiries, recentContacts: json.recentContacts };
      }
    } catch {
      // fallback
    }

    // Local calculation
    const inquiries = (await adminService.getInquiries()).data;
    const contacts = (await adminService.getContacts()).data;
    const services = (await adminService.getServices()).data;
    const caseStudies = (await adminService.getCaseStudies()).data;
    const blogs = (await adminService.getBlogs()).data;
    const team = (await adminService.getTeam()).data;

    return {
      success: true,
      stats: {
        inquiries: inquiries.length,
        contacts: contacts.length,
        services: services.length,
        caseStudies: caseStudies.length,
        blogs: blogs.length,
        team: team.length
      },
      recentInquiries: inquiries.slice(0, 5),
      recentContacts: contacts.slice(0, 5)
    };
  },

  // Inquiries
  getInquiries: async () => {
    return fetchWithFallback('/api/inquiries', {}, STORAGE_KEYS.INQUIRIES, initialInquiries);
  },

  updateInquiry: async (id, updates) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    // Fallback
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || JSON.stringify(initialInquiries));
    const idx = saved.findIndex((item) => item._id === id || item.id === id);
    if (idx !== -1) {
      saved[idx] = { ...saved[idx], ...updates };
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(saved));
      return saved[idx];
    }
    return null;
  },

  deleteInquiry: async (id) => {
    try {
      await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
    } catch {}
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || JSON.stringify(initialInquiries));
    const filtered = saved.filter((item) => (item._id || item.id) !== id);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(filtered));
    return true;
  },

  // Contacts
  getContacts: async () => {
    return fetchWithFallback('/api/contacts', {}, STORAGE_KEYS.CONTACTS, initialContacts);
  },

  deleteContact: async (id) => {
    try {
      await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
    } catch {}
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACTS) || JSON.stringify(initialContacts));
    const filtered = saved.filter((item) => (item._id || item.id) !== id);
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(filtered));
    return true;
  },

  // Services
  getServices: async () => {
    const formattedDefaults = defaultServices.map((s, idx) => ({
      _id: 'srv-' + (idx + 1),
      title: s.title,
      slug: s.id,
      description: s.shortDesc || s.fullDesc,
      icon: s.id === 'smart-contract-development' ? 'Code2' : s.id === 'security-auditing' ? 'ShieldCheck' : 'Globe',
      price: 'Custom quote',
      features: s.badges || ['Production Ready', 'Audited']
    }));
    return fetchWithFallback('/api/services', {}, STORAGE_KEYS.SERVICES, formattedDefaults);
  },

  createService: async (serviceData) => {
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getServices()).data;
    const newItem = {
      ...serviceData,
      _id: 'srv-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    list.unshift(newItem);
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(list));
    return newItem;
  },

  updateService: async (id, serviceData) => {
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getServices()).data;
    const idx = list.findIndex((i) => (i._id || i.id) === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...serviceData };
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  deleteService: async (id) => {
    try {
      await fetch(`/api/services/${id}`, { method: 'DELETE' });
    } catch {}
    const list = (await adminService.getServices()).data;
    const filtered = list.filter((i) => (i._id || i.id) !== id);
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(filtered));
    return true;
  },

  // Case Studies
  getCaseStudies: async () => {
    const formattedDefaults = defaultCaseStudies.map((cs, idx) => ({
      _id: 'cs-' + (idx + 1),
      title: cs.title,
      slug: cs.id,
      client: cs.category || 'Web3 Partner',
      description: cs.desc,
      imageUrl: cs.image,
      techStack: cs.tags || ['Solidity', 'Ethereum'],
      results: [
        { metric: 'Timeline', value: cs.tags?.[2] || '3 Months' },
        { metric: 'Category', value: cs.category || 'Smart Contracts' }
      ]
    }));
    return fetchWithFallback('/api/case-studies', {}, STORAGE_KEYS.CASE_STUDIES, formattedDefaults);
  },

  createCaseStudy: async (caseStudyData) => {
    try {
      const res = await fetch('/api/case-studies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseStudyData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getCaseStudies()).data;
    const newItem = {
      ...caseStudyData,
      _id: 'cs-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    list.unshift(newItem);
    localStorage.setItem(STORAGE_KEYS.CASE_STUDIES, JSON.stringify(list));
    return newItem;
  },

  updateCaseStudy: async (id, caseStudyData) => {
    try {
      const res = await fetch(`/api/case-studies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(caseStudyData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getCaseStudies()).data;
    const idx = list.findIndex((i) => (i._id || i.id) === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...caseStudyData };
      localStorage.setItem(STORAGE_KEYS.CASE_STUDIES, JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  deleteCaseStudy: async (id) => {
    try {
      await fetch(`/api/case-studies/${id}`, { method: 'DELETE' });
    } catch {}
    const list = (await adminService.getCaseStudies()).data;
    const filtered = list.filter((i) => (i._id || i.id) !== id);
    localStorage.setItem(STORAGE_KEYS.CASE_STUDIES, JSON.stringify(filtered));
    return true;
  },

  // Blogs
  getBlogs: async () => {
    const formattedDefaults = defaultBlogPosts.map((b, idx) => ({
      _id: 'blog-' + (idx + 1),
      title: b.title,
      slug: b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      author: b.author,
      content: b.excerpt,
      tags: [b.category],
      coverImage: b.image,
      publishedAt: b.date || new Date().toLocaleDateString()
    }));
    return fetchWithFallback('/api/blogs', {}, STORAGE_KEYS.BLOGS, formattedDefaults);
  },

  createBlog: async (blogData) => {
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getBlogs()).data;
    const newItem = {
      ...blogData,
      _id: 'blog-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    list.unshift(newItem);
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(list));
    return newItem;
  },

  updateBlog: async (id, blogData) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getBlogs()).data;
    const idx = list.findIndex((i) => (i._id || i.id) === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...blogData };
      localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  deleteBlog: async (id) => {
    try {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
    } catch {}
    const list = (await adminService.getBlogs()).data;
    const filtered = list.filter((i) => (i._id || i.id) !== id);
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(filtered));
    return true;
  },

  // Team
  getTeam: async () => {
    const formattedDefaults = defaultTeamMembers.map((tm, idx) => ({
      _id: 'tm-' + (idx + 1),
      name: tm.name,
      role: tm.role,
      bio: `${tm.name} is a core specialist leading ${tm.role.toLowerCase()} initiatives at ZarWebCoders.`,
      imageUrl: tm.avatar,
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com/zarwebcoders',
      order: idx + 1
    }));
    return fetchWithFallback('/api/team', {}, STORAGE_KEYS.TEAM, formattedDefaults);
  },

  createTeamMember: async (memberData) => {
    try {
      const res = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getTeam()).data;
    const newItem = {
      ...memberData,
      _id: 'tm-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    list.push(newItem);
    localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(list));
    return newItem;
  },

  updateTeamMember: async (id, memberData) => {
    try {
      const res = await fetch(`/api/team/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    const list = (await adminService.getTeam()).data;
    const idx = list.findIndex((i) => (i._id || i.id) === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...memberData };
      localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  deleteTeamMember: async (id) => {
    try {
      await fetch(`/api/team/${id}`, { method: 'DELETE' });
    } catch {}
    const list = (await adminService.getTeam()).data;
    const filtered = list.filter((i) => (i._id || i.id) !== id);
    localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(filtered));
    return true;
  },

  // Settings
  getSettings: async () => {
    const defaultSettings = {
      brandName: defaultBrand.name,
      tagline: defaultBrand.tagline,
      subTagline: defaultBrand.subTagline,
      email: defaultBrand.email,
      phone: defaultBrand.phone,
      office: defaultBrand.office,
      mapsUrl: defaultBrand.mapsUrl,
      socials: defaultBrand.socials || {
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com/zarwebcoders',
        instagram: 'https://www.instagram.com/zarwebcoders/',
        facebook: 'https://www.facebook.com/Zarwebcoders/'
      },
      stats: {
        projectsCompleted: '50+',
        happyClients: '40+',
        smartContractsAudited: '120+',
        tvlSecured: '$100M+'
      },
      announcement: {
        enabled: true,
        message: '🚀 Accepting new Web3 audit and dApp development inquiries for Q2/Q3!',
        link: '/contact'
      }
    };
    return fetchWithFallback('/api/settings', {}, STORAGE_KEYS.SETTINGS, defaultSettings);
  },

  updateSettings: async (settingsData) => {
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settingsData)
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {}

    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settingsData));
    return settingsData;
  }
};
