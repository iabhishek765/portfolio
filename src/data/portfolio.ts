// ============================================================
//  PORTFOLIO DATA — Replace all [BRACKET] placeholders
// ============================================================

export const personal = {
  name: "[YOUR NAME]",
  shortName: "[FIRST NAME]",
  headline: "HI, I'M [YOUR NAME]",
  location: "[City, Country]",
  email: "[your@email.com]",
  bio: `[
    Write a 2–3 sentence bio here. For example:
    I'm an AI/ML Engineer passionate about building intelligent systems that solve real-world problems.
    With [X] years of experience, I specialize in deep learning, NLP, and scalable MLOps pipelines.
    I love turning research papers into production-grade solutions.
  ]`,
  roles: [
    "AI / ML Engineer",
    "Deep Learning Enthusiast",
    "Problem Solver",
    "MLOps Practitioner",
    "Computer Vision Engineer",
  ],
  socials: {
    github: "https://github.com/[username]",
    linkedin: "https://linkedin.com/in/[username]",
    twitter: "https://x.com/[username]",
    kaggle: "https://kaggle.com/[username]",
    email: "mailto:[your@email.com]",
  },
};

export const expertise = [
  "Deep Learning",
  "NLP & LLMs",
  "Computer Vision",
  "Reinforcement Learning",
  "MLOps & CI/CD",
  "Data Engineering",
  "Cloud Architecture",
  "Open Source",
];

export const projects = [
  {
    id: 1,
    title: "[Project Alpha]",
    description:
      "[Brief description of what this project does and its impact. Mention dataset size, model accuracy, or other key metrics.]",
    image: "/images/project-placeholder.jpg",
    tags: ["Python", "PyTorch", "FastAPI", "Docker"],
    github: "https://github.com/[username]/[repo]",
    demo: "https://[demo-url].com",
    featured: true,
  },
  {
    id: 2,
    title: "[Project Beta]",
    description:
      "[Description of a computer vision or NLP project. Highlight the challenge it solved.]",
    image: "/images/project-placeholder.jpg",
    tags: ["TensorFlow", "OpenCV", "Streamlit", "GCP"],
    github: "https://github.com/[username]/[repo]",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "[Project Gamma]",
    description:
      "[Description of an MLOps or data engineering pipeline project.]",
    image: "/images/project-placeholder.jpg",
    tags: ["Airflow", "Kubernetes", "MLflow", "AWS"],
    github: "https://github.com/[username]/[repo]",
    demo: "https://[demo-url].com",
    featured: false,
  },
  {
    id: 4,
    title: "[Project Delta]",
    description:
      "[Description of a research implementation or Kaggle competition solution.]",
    image: "/images/project-placeholder.jpg",
    tags: ["HuggingFace", "LangChain", "Pinecone", "Next.js"],
    github: "https://github.com/[username]/[repo]",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "[Project Epsilon]",
    description: "[Description of another impactful project.]",
    image: "/images/project-placeholder.jpg",
    tags: ["Rust", "ONNX", "TensorRT", "CUDA"],
    github: "https://github.com/[username]/[repo]",
    demo: "https://[demo-url].com",
    featured: false,
  },
  {
    id: 6,
    title: "[Project Zeta]",
    description: "[Description of a side project or open-source contribution.]",
    image: "/images/project-placeholder.jpg",
    tags: ["Python", "Pandas", "Plotly", "Dash"],
    github: "https://github.com/[username]/[repo]",
    demo: "",
    featured: false,
  },
];

export const skills = {
  languages: [
    { name: "Python", icon: "🐍", level: 95 },
    { name: "C++", icon: "⚡", level: 75 },
    { name: "Rust", icon: "🦀", level: 60 },
    { name: "SQL", icon: "🗄️", level: 85 },
    { name: "TypeScript", icon: "📘", level: 70 },
  ],
  mlFrameworks: [
    { name: "PyTorch", icon: "🔥", level: 95 },
    { name: "TensorFlow", icon: "🌊", level: 85 },
    { name: "HuggingFace", icon: "🤗", level: 90 },
    { name: "scikit-learn", icon: "🔬", level: 90 },
    { name: "LangChain", icon: "🔗", level: 80 },
    { name: "JAX", icon: "⚙️", level: 65 },
  ],
  tools: [
    { name: "Docker", icon: "🐳", level: 88 },
    { name: "Kubernetes", icon: "☸️", level: 75 },
    { name: "MLflow", icon: "📊", level: 85 },
    { name: "Airflow", icon: "🌬️", level: 80 },
    { name: "Git", icon: "🌿", level: 95 },
    { name: "FastAPI", icon: "🚀", level: 88 },
  ],
  cloud: [
    { name: "AWS", icon: "☁️", level: 80 },
    { name: "GCP", icon: "🌤️", level: 75 },
    { name: "Azure", icon: "💙", level: 65 },
    { name: "Vercel", icon: "▲", level: 85 },
  ],
};

export const certifications = [
  {
    id: 1,
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    date: "[Month Year]",
    credentialUrl: "#",
    icon: "🏅",
    description: "[Brief description of what this certification covers.]",
  },
  {
    id: 2,
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    date: "[Month Year]",
    credentialUrl: "#",
    icon: "📜",
    description: "[Brief description of what this certification covers.]",
  },
  {
    id: 3,
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    date: "[Month Year]",
    credentialUrl: "#",
    icon: "🎓",
    description: "[Brief description of what this certification covers.]",
  },
  {
    id: 4,
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    date: "[Month Year]",
    credentialUrl: "#",
    icon: "⭐",
    description: "[Brief description of what this certification covers.]",
  },
];

export const achievements = [
  {
    id: 1,
    title: "[Achievement Title]",
    description:
      "[Description: e.g., Top 1% in Kaggle competition X, Silver medal, 3,000+ teams.]",
    year: "[Year]",
    icon: "🥇",
    link: "#",
  },
  {
    id: 2,
    title: "[Achievement Title]",
    description: "[Description: e.g., Published research paper at NeurIPS 2024.]",
    year: "[Year]",
    icon: "📄",
    link: "#",
  },
  {
    id: 3,
    title: "[Achievement Title]",
    description:
      "[Description: e.g., Won national hackathon with X participants.]",
    year: "[Year]",
    icon: "🏆",
    link: "#",
  },
  {
    id: 4,
    title: "[Achievement Title]",
    description: "[Description: e.g., 1000+ GitHub stars on open-source repo.]",
    year: "[Year]",
    icon: "⭐",
    link: "#",
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
  { id: "achievements", label: "Achievements", icon: "Trophy" },
  { id: "initiatives", label: "Initiatives", icon: "Globe" },
  { id: "contact", label: "Contact", icon: "Mail" },
];
