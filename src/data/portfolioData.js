export const personal = {
  name: 'Indrajeet Bhujbal',
  role: 'Backend Engineer',
  tagline: 'I architect backend systems — microservices, distributed APIs, and production-grade server-side applications using Java, Spring Boot, NestJS, and Express.',
  email: 'indrajeetbhujbal0@gmail.com',
  phone: '+91 9152746486',
  location: 'Mumbai, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/indrajeet-bhujbal-5b4987285/',
  github: 'https://github.com/indrajeet1705',
};

export const about = {
  summary: `Backend engineer with a strong Java foundation and hands-on production experience building microservices, REST APIs, and distributed systems. I work primarily with Spring Boot, NestJS, and Express — designing systems that are scalable, maintainable, and built right. Currently contributing as an SDE at a US-based product company while pursuing my BE in IT.`,
  highlights: [
    'Core stack: Java · Spring Boot · NestJS · Express.js · PostgreSQL',
    'Built and deployed microservices architectures with Spring Cloud, Docker, and API Gateways',
    'Production experience: HRM automation, healthcare APIs, AI-powered backend agents',
    'BE Information Technology (ongoing)',
    'Oracle Certified: AI Foundations Associate',
  ],
};

// Skills ordered to lead with Java/backend strengths
export const skills = [
  {
    category: 'Primary Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    highlight: true,
  },
  {
    category: 'Backend Frameworks',
    items: ['Spring Boot', 'NestJS', 'Express.js', 'Spring Cloud', 'Flask'],
    highlight: true,
  },
  {
    category: 'Microservices & DevOps',
    items: ['Spring Cloud', 'Docker', 'Eureka', 'API Gateway', 'Config Server', 'Keycloak', 'REST APIs'],
    highlight: true,
  },
  {
    category: 'Databases & ORM',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'TypeORM', 'Hibernate / JPA'],
  },
  {
    category: 'Cloud & Auth',
    items: ['AWS', 'Azure AD', 'Microsoft Graph API', 'OAuth 2.0', 'JWT', 'Keycloak', 'IBM watsonx'],
  },
  {
    category: 'Frontend & Tools',
    items: ['React', 'Tailwind CSS', 'Git', 'GitHub', 'Linux', 'IntelliJ', 'Postman'],
  },
];

export const projects = [
  {
    title: 'Activity Manager — Microservices Platform',
    description:
      'Distributed activity management backend built with Java and Spring Boot. Three independent services (User, Activity, AI) communicate via inter-service calls, secured with Keycloak OAuth 2.0, and use RabbitMQ for async AI recommendation generation — ensuring resilience even when services go offline.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'Keycloak', 'RabbitMQ', 'Gemini API', 'Eureka', 'API Gateway', 'Config Server', 'PostgreSQL', 'MongoDB'],
    highlights: [
      '3 microservices — User, Activity, AI — all registered with Netflix Eureka for service discovery',
      'Centralized Spring Cloud Config Server serves application.properties to all services for easy scaling',
      'OAuth 2.0 secured via Keycloak; all requests routed through a common API Gateway',
      'Activity creation triggers inter-service call to User Service to verify the user exists',
      'Gemini API generates AI recommendations per activity; published to RabbitMQ queue and consumed asynchronously by AI Service — recommendations are created even after service recovery',
      'User Service uses PostgreSQL; Activity and AI Services use MongoDB',
    ],
    github: 'https://github.com/indrajeet1705',
    demo: null,
    featured: true,
    badge: 'Microservices',
  },
  {
    title: 'Prescripto — Doctor Appointment System',
    description:
      'Full-stack MERN healthcare platform with three role-based portals for patients, doctors, and admins. Patients browse doctors by specialization, book and pay for appointments, and track history. Doctors manage appointments and write digital prescriptions. Admins oversee the entire platform via a dedicated dashboard.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Tailwind CSS'],
    highlights: [
      'Three role-based portals: Patient, Doctor, and Admin — each with distinct capabilities and protected routes',
      'Patients can browse doctors by specialization, book appointments, view booking history, and cancel bookings',
      'Doctors can view scheduled appointments and write digital prescriptions per patient',
      'Admin dashboard to add/manage doctors, monitor all appointments, and track platform analytics',
      'Razorpay payment gateway integration (test mode) for secure online appointment payments',
      'JWT + bcrypt authentication with role-based authorization enforced across all portals',
    ],
    github: 'https://github.com/indrajeet1705/Prescripto',
    demo: 'https://prescripto-g143.onrender.com/',
    featured: true,
    badge: 'Full-Stack',
  },
  {
    title: 'AI Brain Tumor Detection & Cancer Assistant',
    description:
      'End-to-end medical AI platform combining VGG16-based MRI tumor classification with a RAG-powered cancer assistance chatbot. Dynamically adapts responses based on detected tumor type with persistent user context.',
    tech: ['React', 'Flask', 'CNN / VGG16', 'LangChain', 'Pinecone', 'PostgreSQL', 'JWT'],
    highlights: [
      'MRI classification using VGG16 fine-tuned CNN model',
      'RAG pipeline over verified oncology textbooks via Pinecone vector store',
      'Persistent chat history + ML predictions stored in PostgreSQL',
      'Secure JWT auth with hashed password storage',
    ],
    github: 'https://github.com/indrajeet1705',
    demo: null,
    featured: true,
    badge: 'AI / ML',
  },
];

export const experience = [
  {
    company: 'Perceptive Solutions Inc.',
    role: 'Software Development Engineer (Intern)',
    period: 'Jan 2026 – Present',
    location: 'St. Paul, Minnesota, USA (Remote)',
    bullets: [
      'Automated HRM interview scheduling by building Express.js features that auto-create Outlook Calendar events and send interview emails via Azure AD and Microsoft Graph API.',
      'Engineered an AI data-insight agent on IBM watsonx that converts natural language prompts into database queries and returns business-ready insights via a Flask backend.',
      'Resolved production bugs and extended features in a live ASP.NET MVC enterprise application.',
    ],
    tech: ['Express.js', 'Azure AD', 'Microsoft Graph API', 'IBM watsonx', 'Flask', 'ASP.NET MVC'],
  },
  {
    company: 'PearlThoughts',
    role: 'Backend Developer Intern',
    period: 'Sept 2025 – Nov 2025',
    location: 'Remote',
    bullets: [
      'Developed and maintained secure REST APIs for a healthcare management system using NestJS, PostgreSQL, OAuth 2.0, and TypeORM.',
      'Designed normalized relational database schemas, improving query performance and data scalability.',
      'Contributed to SaaS platform backend integration ensuring reliable data flow between services.',
      'Collaborated in an Agile team with Git/GitHub-based version control and peer code reviews.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'OAuth 2.0', 'TypeORM', 'Git'],
  },
];

export const education = [
  {
    institution: "Padmabhushan Vasantdada Patil Pratishthan's College of Engineering",
    degree: 'Bachelor of Engineering — Information Technology',
    period: 'Aug 2023 – May 2027',
    location: 'Chunabhatti, Mumbai',
    detail: 'CGPA: 8.90',
  },
  {
    institution: 'D.G. Ruparel College of Arts, Science and Commerce',
    degree: 'HSC — Science',
    period: 'Aug 2021 – May 2023',
    location: 'Matunga, Mumbai',
    detail: 'Percentage: 80.00%',
  },
];

export const certifications = [
  {
    name: 'OCI 2025 AI Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    date: 'Oct 2025',
    detail: 'AI fundamentals, ML concepts, and OCI AI services',
  },
  {
    name: 'Cloud Computing — Elite',
    issuer: 'NPTEL · IIT Kharagpur',
    date: 'Jul – Oct 2025',
    detail: 'Consolidated score: 71% · 12-week course',
  },
];
