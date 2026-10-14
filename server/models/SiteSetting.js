const mongoose = require('mongoose');

const SiteSettingSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      default: 'ZarWebCoders'
    },
    tagline: {
      type: String,
      default: 'INFINITE SOLUTION. ENDLESS INNOVATION.'
    },
    subTagline: {
      type: String,
      default: 'Web3 Development Agency'
    },
    email: {
      type: String,
      default: 'info@zarwebcoders.in'
    },
    phone: {
      type: String,
      default: '+91 81604 04725'
    },
    office: {
      type: String,
      default: '909-910, A block, Signature 2, Sanand Circle, Sarkhej, Ahmedabad-382210'
    },
    mapsUrl: {
      type: String,
      default: 'https://maps.google.com/?q=909-910,+A+block,+Signature+2,+Sanand+Circle,+Sarkhej,+Ahmedabad-382210'
    },
    socials: {
      linkedin: { type: String, default: 'https://linkedin.com' },
      twitter: { type: String, default: 'https://x.com/zarwebcoders' },
      instagram: { type: String, default: 'https://www.instagram.com/zarwebcoders/' },
      facebook: { type: String, default: 'https://www.facebook.com/Zarwebcoders/' },
      github: { type: String, default: 'https://github.com' },
      telegram: { type: String, default: 'https://t.me' }
    },
    stats: {
      projectsCompleted: { type: String, default: '50+' },
      happyClients: { type: String, default: '40+' },
      smartContractsAudited: { type: String, default: '120+' },
      tvlSecured: { type: String, default: '$100M+' }
    },
    announcement: {
      enabled: { type: Boolean, default: false },
      message: { type: String, default: '🚀 We are accepting new Web3 audit and dApp development projects!' },
      link: { type: String, default: '/contact' }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('SiteSetting', SiteSettingSchema);
