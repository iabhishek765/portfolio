// ============================================================
//  PORTFOLIO DATA — Replace all [BRACKET] placeholders
// ============================================================

export const personal = {
  name: "Abhishek Singh",
  shortName: "Abhishek",
  headline: "HI, I'M ABHISHEK",
  location: "Varanasi, India",
  email: "222sabhishek@gmail.com",
  bio: `
     
     
    

  `,
  roles: [
    "Machine Learning Engineer",
    "Deep Learning Enthusiast",
    "MLOps Practitioner",
  ],
  socials: {
    github: "https://github.com/iabhishek765",
    linkedin: "https://www.linkedin.com/in/abhisheksingh--aiml/",
    email: "mailto:222sabhishek@gmail.com",
  },
};

export const expertise = [
  "Deep Learning",
  "Machine Learning",
  "Python",
  "SQL",
  "LLMs",
  "Data Engineering",
  "AI Domain Integration",
];

export const projects = [
  {
    id: 1,
    title: "Career Compass",
    description:
      "An ML-driven end-to-end student career guidance platform that estimates placement readiness from academic, technical, project, and problem-solving attributes. Built the pipeline from data generation and validation through preprocessing, feature engineering, model training, evaluation, prediction serving, and personalized recommendation generation, with safeguards against target leakage during model development & Groq-powered GenAI used to transform model outputs into personalized career reports.",
    image: "/images/career-compass.jpeg",
    tags: ["Python", "Scikitlearn", "FastAPI", "NumPy", "GenAI"],
    github: "https://github.com/iabhishek765/career-compass",
    demo: "https://career-compass-frontend-ybm8.onrender.com/",
    featured: true,
  },
  {
    id: 2,
    title: "TruePixel",
    description:
      "A full-stack computer vision system for detecting manipulated and AI-generated media through automated image analysis. Designed an inference pipeline integrating deep learning models with a FastAPI backend, image preprocessing, confidence scoring, authentication, result management, and a dedicated frontend for real-time analysis.",
    image: "/images/truepixel.jpeg",
    tags: ["Python","TensorFlow", "OpenCV", "FastAPI", "DeepLearning"],
    github: "https://github.com/iabhishek765/TruePixel-AI-deepfake-image-video-detection-",
    demo: "https://neon-verify-3.preview.emergentagent.com/",
    featured: true,
  },
  {
    id: 3,
    title: "EchoSense",
    description:
      "A real-time speech emotion recognition web application that analyzes voice recordings and classifies emotional states using a fine-tuned Wav2Vec2 deep learning model. The system combines browser-based microphone recording and audio uploads with a lightweight Flask API, automated audio preprocessing, emotion classification, confidence scoring, and an interactive dashboard for visualizing results and session history.",
    image: "/images/echo.jpeg",
    tags: ["Python", "Flask", "DeepLearning", "NLP", "Wav2Vec2"],
    github: "https://github.com/iabhishek765/EchoSense",
    featured: true,
  },
  {
    id: 4,
    title: "CourSee",
    description:
      "An AI-powered course recommendation system that matches learners with relevant courses using TF-IDF vectorization and cosine similarity. The system supports recommendations based on either a selected course or a user's skill set, with confidence scoring, model serialization, and a modular Python-based recommendation pipeline.",
    image: "/images/courseee.jpeg",
    tags: ["Python", "Pandas", "TFIDF", "NLP", "CosineSimilarity", "Joblib"],
    github: "https://github.com/iabhishek765/CourSee",
    featured: false,
  },
  {
    id: 5,
    title: "AI Complaint Management System",
    description: "An AI-powered complaint management platform that automates the extraction, structuring, and tracking of customer complaints from text and PDF documents. Built an end-to-end workflow using Groq LLM for intelligent information extraction, pdfplumber for document processing, FastAPI for backend APIs, React for the dashboard, and SQLite for persistent complaint management.",
    image: "/images/cms.jpeg",
    tags: ["Python", "FastAPI", "LLM", "GroqAPI", "SQLite", "PDFProcessing"],
    github: "https://github.com/iabhishek765/AI-Complaint-Management-System",
    
    featured: false,
  },
];

export const skills = {
  languages: [
    { name: "Python", icon: "🐍", level: 80 },
    { name: "C++", icon: "⚡", level: 40 },
    { name: "SQL", icon: "🗄️", level: 85 },
  ],
  
  AI: [
    { name: "LLM", icon: "🧠", level: 60 },
    { name: "AI Agents", icon: "👾", level: 50 },
    { name: "NLP & RAG", icon: "⌨", level: 65 },
    { name: "Gen AI", icon: "💬", level: 70 },
    { name: "Machine Learning", icon: "⌨️", level: 80 },
    { name: "Deep Learning", icon: "🌀", level: 55 }
  ],

  mlFrameworksAndLibraries: [
    { name: "TensorFlow", icon: "🌊", level: 75 },
    { name: "XGBoost", icon: "🐉", level: 50 },
    { name: "scikit-learn", icon: "🔬", level: 85 },
    { name: "Pandas", icon: "🐼", level: 70 },
    { name: "NumPy", icon: "🔢", level: 80 },
    { name: "Matplotlib", icon: "📊", level: 80 },
    { name: "Hugging Face", icon: "🤗", level: 60 },
    { name: "LangChain", icon: "🔗", level: 20 }
  ],
  tools: [
    { name: "Google Colab", icon: "🗂️", level: 75 },
    { name: "Azure", icon: "☁️", level: 65 },
    { name: "Power BI", icon: "📊", level: 75 },
    { name: "MLflow", icon: "📊", level: 80 },
    { name: "VS Code", icon: "💻", level: 95 },
    { name: "Vercel", icon: "▲", level: 80 },
    { name: "Git & Git Hub", icon: "📓", level: 75 },
  ],
  softwareDevelopment: [
    { name: "RESTful APIs", icon: "▲", level: 70 },
    { name: "FastAPI", icon: "🚀", level: 75 },
    { name: "Databases", icon: "🗂️", level: 80 },
    { name: "MySQL", icon: "🛢", level: 80 },
    { name: "Backend Development,", icon: "🕸️", level: 65 },
  ],
};

export const certifications = [
  {
    id: 1,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "2026",
    credentialUrl: "https://coursera.org/share/36c52cf4373c528d6160a51bb655fd17",
    icon: "🐍",
    description: "Learned Python programming fundamentals, data structures, and basic algorithms for problem-solving.",
  },
  {
    id: 2,
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2026",
    credentialUrl: "https://coursera.org/share/16941d4a81330925ddeb557cccf9bed2",
    icon: "📜",
    description: "Learned core machine learning concepts, algorithms, and practical implementation using Python.",
  },
  {
    id: 3,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "2026",
    credentialUrl: "https://coursera.org/share/63c060b3789cb461d1b164ba425b327d",
    icon: "🎓",
    description: "Learned  popular machine learning libraries NumPy & scikit-learn, regression and classification algorithms and model evaluation",
  },
  {
    id: 4,
    title: "Deep Learning with TensorFlow",
    issuer: "IBM",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1D6Tn6B4x7snJWsz9qgO39XSxuyVG7tHi/view?usp=drive_link",
    icon: "🌐",
    description: "Learned deep learning concepts, neural network architectures, and practical implementation using TensorFlow.",
  },
  {
    id: 5,
    title: "Introduction to Microsoft Azure Cloud Services",
    issuer: "Coursera",
    date: "2026",
    credentialUrl: "https://coursera.org/share/a2394ed0bd1cbd180e69eecea24998db",
    icon: "☁️",
    description: "Learned core cloud concepts and core Microsoft Azure services & architect components.",
  },
  {
    id: 6,
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "2026",
    credentialUrl: "https://www.linkedin.com/learning/certificates/2a5986e7fb9e8df682dbaacd23eae8735fc7f86bf4feed291eaac5e736d37ab4?trk=share_certificate",
    icon: "⌨️",
    description: "Learned SQL fundamentals, including querying, filtering, sorting, and aggregating data from relational databases.",
  },
  {
    id: 7,
    title: "Software Development Life Cycle",
    issuer: "LinkedIn Learning",
    date: "2024",
    credentialUrl: "https://www.linkedin.com/learning/certificates/15e0eb1eedb4e17bf78109e1a1458d4c26bae126bbf689190c685a8f8b1de7ba?trk=share_certificate",
    icon: "☯",
    description: "Learned core knowledge about the stages of the software development life cycle process.",
  },
  {
    id: 8,
    title: "People & Soft Skills: Essential for Professional Success",
    issuer: "Coursera",
    date: "2026",
    credentialUrl: "https://coursera.org/share/ef8e12b9a22e6f321af3f10934f2c49d",
    icon: "🗣️",
    description: "Learned about core Soft skills like Collaboration, Communication, Leadership, Teamwork and more.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Technical Writing",
    description:
      "Sharing insights and knowledge across Artificial Intelligence, Machine Learning, Emerging Technologies, and Computer Science through technical articles and educational content.",
    icon: "📄",
    link: "#",
  },
  {
    id: 2,
    title: "JUCA - JECRC University Cricket Association",
    role: "Co-Founder & Organizer",
    description: "Co-founded the JECRC University Cricket Association to build and manage a student-led sports community. Contributed to Match planning, team coordination, and community engagement across university-level sports activities.",
    year: "2024-Present",
    icon: "🥇",
    link: "#",
  },
  {
    id: 3,
    title: "Hackathons",
    description:
      "Participated in Hackathonss focused on solving real-world problems using machine learning, artificial intelligence, and software engineering.",
    year: "2025",
    icon: "🏆",
    link: "#",
  },
  {
    id: 4,
    title: "Open Source Contributions",
    description: "Contribute to software and AI/ML projects through GitHub, focusing on practical implementations, project development, documentation, experimentation, and collaborative development.",
    icon: "⭐",
    link: "",
  },
];

export const initiatives = [
  {
    id: 1,
    title: "[Initiative Name]",
    role: "[Your Role — e.g., Founder, Lead, Mentor]",
    description:
      "[Describe the initiative: a community, study group, open-source org, newsletter, etc.]",
    impact: "[e.g., 500+ members, 20+ contributors]",
    link: "#",
    icon: "🌐",
  },
  {
    id: 2,
    title: "[Initiative Name]",
    role: "[Your Role]",
    description: "[Description of this initiative and what it accomplishes.]",
    impact: "[Impact metric]",
    link: "#",
    icon: "🤝",
  },
  {
    id: 3,
    title: "[Initiative Name]",
    role: "[Your Role]",
    description: "[Description of this initiative.]",
    impact: "[Impact metric]",
    link: "#",
    icon: "💡",
  },
];

export const navItems = [
  { id: "hero", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "projects", label: "Projects", icon: "FolderOpen" },
  { id: "skills", label: "Skills", icon: "Cpu" },
  { id: "certifications", label: "Certifications", icon: "Award" },
  { id: "achievements", label: "Achievements & Initiatives", icon: "Trophy" },
  { id: "contact", label: "Contact", icon: "Mail" },
];
