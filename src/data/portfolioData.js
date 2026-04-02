export const personal = {
  name: 'Indrajeet Bhujbal',
  role: 'Backend Engineer',
  tagline: 'I architect backend systems — microservices, distributed APIs, and production-grade server-side applications using Java, Spring Boot, NestJS, and Express.',
  email: 'indrajeetbhujbal0@gmail.com',
  phone: '+91 9152746486',
  location: 'Mumbai, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/indrajeetbhujbal-5b4987285',
  github: 'https://github.com/indrajeet',
};

export const about = {
  summary: `Backend engineer with a strong Java foundation and hands-on production experience building microservices, REST APIs, and distributed systems. I work primarily with Spring Boot, NestJS, and Express — designing systems that are scalable, maintainable, and built right. Currently contributing as an SDE at a US-based product company while pursuing my BE in IT.`,
  highlights: [
    'Core stack: Java · Spring Boot · NestJS · Express.js · PostgreSQL',
    'Built and deployed microservices architectures with Spring Cloud, Docker, and API Gateways',
    'Production experience: HRM automation, healthcare APIs, AI-powered backend agents',
    '8.90 CGPA — BE Information Technology (ongoing)',
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
    title: 'eCommerce Microservices Platform',
    description:
      'Production-grade distributed eCommerce backend built with Java and Spring Boot. Implements a full microservices architecture with independent services for users, products, orders, and notifications — secured with Keycloak, deployed on AWS, and orchestrated via Docker.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'Keycloak', 'Docker', 'AWS', 'API Gateway', 'Eureka', 'Config Server', 'React'],
    highlights: [
      '6 independent microservices: User, Product, Order, Notification, API Gateway, Config Server',
      'Spring Cloud Gateway for routing + Netflix Eureka for service discovery and registration',
      'Centralized config management via Spring Cloud Config Server',
      'Keycloak for OAuth2/OpenID Connect authentication across all services',
      'Dockerized services with Docker Compose; deployed on AWS',
    ],
    github: 'https://github.com/indrajeet',
    demo: null,
    featured: true,
    badge: 'Microservices',
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
    github: 'https://github.com/indrajeet',
    demo: null,
    featured: true,
    badge: 'AI / ML',
  },
  {
    title: 'Prescripto — Doctor Appointment System',
    description:
      'Full-stack healthcare appointment platform with role-based access for patients and admins. Features real-time booking, Razorpay payment integration, and a comprehensive admin dashboard.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay'],
    highlights: [
      'User & admin role-based authorization with JWT',
      'Secure Razorpay payment gateway for appointment bookings',
      'Admin dashboard: manage doctors, appointments, analytics',
      'Fully responsive UI across patient and admin flows',
    ],
    github: 'https://github.com/indrajeet',
    demo: null,
    featured: false,
    badge: 'Full-Stack',
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
    name: 'OCI AI Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    detail: 'AI fundamentals, ML concepts, and OCI AI services',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL — IIT',
    detail: 'Cloud architecture, virtualization, distributed systems, IaaS/PaaS/SaaS',
  },
];
