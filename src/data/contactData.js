// Contact Page Data & Configuration - Single Source of Truth

export const CONTACT_INFO = {
  email: 'info@zarwebcoders.in',
  emailSubtext: 'We typically respond within 24 hours.',
  phone: '+91 98765 43210',
  phoneSubtext: 'Mon - Sat, 9:00 AM - 7:00 PM (IST)',
  office: 'Ahmedabad, Gujarat, India',
  officeSubtext: 'Available for meetings by appointment.',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM (IST)\nSunday: Closed',
  mapQuery: 'Ahmedabad, Gujarat, India',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ahmedabad,+Gujarat,+India',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com', key: 'linkedin' },
    { name: 'X', url: 'https://x.com', key: 'x' },
    { name: 'GitHub', url: 'https://github.com', key: 'github' },
    { name: 'YouTube', url: 'https://youtube.com', key: 'youtube' },
    { name: 'Telegram', url: 'https://telegram.org', key: 'telegram' },
  ],
}

export const PROJECT_TYPES = [
  'Select a service',
  'Smart Contract Development',
  'dApp Development',
  'Blockchain Integration',
  'Web3 Infrastructure',
  'Security & Auditing',
  'Consulting & Strategy',
  'Token Development',
  'Other',
]

export const FAQS = [
  {
    id: 1,
    question: 'How soon can you start my project?',
    answer:
      "Project timelines depend on scope, requirements and team availability. After an initial consultation, we'll provide a clear proposed start date.",
  },
  {
    id: 2,
    question: 'What is the project cost?',
    answer:
      'Pricing depends on project complexity, technology stack and delivery requirements. Contact us for a tailored estimate.',
  },
  {
    id: 3,
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. We provide post-launch support, maintenance and ongoing technical assistance.',
  },
  {
    id: 4,
    question: 'Is my project idea kept confidential?',
    answer:
      'Yes. We treat project information as confidential and can work under an NDA when required.',
  },
]
