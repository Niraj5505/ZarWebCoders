require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import models
const Contact = require('./models/Contact');
const Inquiry = require('./models/Inquiry');
const Service = require('./models/Service');
const CaseStudy = require('./models/CaseStudy');
const BlogPost = require('./models/BlogPost');
const TeamMember = require('./models/TeamMember');
const SiteSetting = require('./models/SiteSetting');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB and ensure collections exist
let isInitialized = false;
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  if (!MONGODB_URI) {
    console.error('ERROR: MONGODB_URI is not defined in environment variables.');
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected to zarwebcoders');

    if (!isInitialized) {
      isInitialized = true;
      const models = [
        { name: 'Contact', model: Contact },
        { name: 'Inquiry', model: Inquiry },
        { name: 'Service', model: Service },
        { name: 'CaseStudy', model: CaseStudy },
        { name: 'BlogPost', model: BlogPost },
        { name: 'TeamMember', model: TeamMember },
        { name: 'SiteSetting', model: SiteSetting }
      ];

      try {
        const existingCollections = (await mongoose.connection.db.listCollections().toArray()).map(
          (c) => c.name
        );

        for (const { name, model } of models) {
          const collectionName = model.collection.name;
          if (!existingCollections.includes(collectionName)) {
            await model.createCollection();
            console.log(`✨ Created collection: ${collectionName} (${name})`);
          }
          await model.syncIndexes();
        }

        const settingCount = await SiteSetting.countDocuments();
        if (settingCount === 0) {
          await SiteSetting.create({});
          console.log('✨ Seeded default SiteSetting document');
        }
      } catch (e) {
        console.warn('Collection check warning:', e.message);
      }
    }
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
  }
};

// Initiate connection immediately
connectDB();

// Middleware to ensure DB connection is ready before handling requests
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Health Check
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  res.json({
    status: 'ok',
    database: states[dbState] || 'unknown',
    timestamp: new Date().toISOString()
  });
});

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USER || 'admin';
  const adminPass = process.env.ADMIN_PASS || 'admin123';

  if ((username === adminUser || username === 'admin@zarwebcoders.in') && password === adminPass) {
    return res.json({
      success: true,
      token: 'jwt_admin_zarwebcoders_' + Date.now(),
      user: {
        username: 'admin',
        name: 'Administrator',
        role: 'Super Admin',
        email: 'admin@zarwebcoders.in'
      }
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid admin credentials. (Default: admin / admin123)'
  });
});

// Admin Stats
app.get('/api/admin/stats', async (req, res) => {
  try {
    const [inquiriesCount, contactsCount, servicesCount, caseStudiesCount, blogsCount, teamCount] =
      await Promise.all([
        Inquiry.countDocuments().catch(() => 0),
        Contact.countDocuments().catch(() => 0),
        Service.countDocuments().catch(() => 0),
        CaseStudy.countDocuments().catch(() => 0),
        BlogPost.countDocuments().catch(() => 0),
        TeamMember.countDocuments().catch(() => 0)
      ]);

    const recentInquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(5).catch(() => []);
    const recentContacts = await Contact.find().sort({ createdAt: -1 }).limit(5).catch(() => []);

    res.json({
      success: true,
      stats: {
        inquiries: inquiriesCount,
        contacts: contactsCount,
        services: servicesCount,
        caseStudies: caseStudiesCount,
        blogs: blogsCount,
        team: teamCount
      },
      recentInquiries,
      recentContacts
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Site Settings
app.get('/api/settings', async (req, res) => {
  try {
    let settings = await SiteSetting.findOne();
    if (!settings) {
      settings = await SiteSetting.create({});
    }
    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/settings', async (req, res) => {
  try {
    let settings = await SiteSetting.findOne();
    if (!settings) {
      settings = new SiteSetting(req.body);
    } else {
      Object.assign(settings, req.body);
    }
    const saved = await settings.save();
    res.json({ success: true, message: 'Settings updated successfully', data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// CONTACTS
// ========================
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, phone, and message.'
      });
    }

    const contact = new Contact({ name, email, phone, projectType, message });
    const saved = await contact.save();
    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: saved
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// INQUIRIES
// ========================
app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, email, phone, serviceType, budget, details, message } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and phone.'
      });
    }

    const inquiry = new Inquiry({
      name,
      email,
      phone,
      serviceType,
      budget,
      details: details || message || ''
    });

    const saved = await inquiry.save();
    return res.status(201).json({
      success: true,
      message: 'Project inquiry submitted successfully!',
      data: saved
    });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/inquiries/:id', async (req, res) => {
  try {
    const updated = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: 'Inquiry updated', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/inquiries/:id', async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// SERVICES
// ========================
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json({ success: true, count: services.length, data: services });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/services', async (req, res) => {
  try {
    const newService = new Service(req.body);
    const saved = await newService.save();
    res.status(201).json({ success: true, message: 'Service created successfully', data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/services/:id', async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: 'Service updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/services/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// CASE STUDIES
// ========================
app.get('/api/case-studies', async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
    res.json({ success: true, count: caseStudies.length, data: caseStudies });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/case-studies', async (req, res) => {
  try {
    const newCaseStudy = new CaseStudy(req.body);
    const saved = await newCaseStudy.save();
    res.status(201).json({ success: true, message: 'Case study created successfully', data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/case-studies/:id', async (req, res) => {
  try {
    const updated = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: 'Case study updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/case-studies/:id', async (req, res) => {
  try {
    await CaseStudy.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Case study deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// BLOG POSTS
// ========================
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    const newBlog = new BlogPost(req.body);
    const saved = await newBlog.save();
    res.status(201).json({ success: true, message: 'Blog post created successfully', data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const updated = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: 'Blog post updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ========================
// TEAM MEMBERS
// ========================
app.get('/api/team', async (req, res) => {
  try {
    const team = await TeamMember.find().sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: team.length, data: team });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/team', async (req, res) => {
  try {
    const newMember = new TeamMember(req.body);
    const saved = await newMember.save();
    res.status(201).json({ success: true, message: 'Team member added successfully', data: saved });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/team/:id', async (req, res) => {
  try {
    const updated = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: 'Team member updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/team/:id', async (req, res) => {
  try {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

if (require.main === module || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
