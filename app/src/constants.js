// Resume Data - Centralized content for the portfolio
// All content mapped from Unika Bista's Resume

export const personalInfo = {
  name: "Unika Bista",
  title: "Computer Science Student & AI Developer",
  tagline: "Building intelligent solutions that make a real-world impact",
  location: "Monroe, Louisiana",
  phone: "318-350-8760",
  email: "unika.bista0@gmail.com",
  linkedin: "https://linkedin.com/in/unikabista",
  github: "https://github.com/unikabista",
  summary: "Computer Science junior with hands-on experience developing Python-based diagnostic tools and automated data pipelines that improved system accuracy by 30%. Strong foundation in machine learning, deep learning, and NLP, including direct experience working with LLMs, agentic frameworks, and model validation."
};

export const projects = [
  {
    id: 1,
    title: "Dristi",
    subtitle: "AI Accessibility Agent",
    description: "An AI-driven accessibility application that uses GPT-4o vision to automatically process visual data into real-time audio, helping visually impaired users navigate their environment.",
    achievements: [
      "Built an AI-driven agent using GPT-4o vision that automatically processes visual data into real-time audio",
      "Optimized the data pipeline to cut response delays by 20%, ensuring fast and reliable performance under heavy loads",
      "Debugged and refined AI prompts to ensure accurate performance in complex, real-world environments"
    ],
    techStack: ["Python", "GPT-4o Vision", "AI Agents", "Real-time Processing"],
    category: "AI/ML",
    github: "https://github.com/unikabista",
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "Athlyze",
    subtitle: "ACL Injury Prevention Platform",
    description: "A predictive Computer Vision platform that monitors athlete movement and provides real-time injury risk assessments to prevent ACL injuries.",
    achievements: [
      "Developed a predictive Computer Vision pipeline using MediaPipe to monitor movement and provide real-time injury risk assessments",
      "Engineered a secure React and Firebase application to bridge movement data and medical analysis"
    ],
    techStack: ["React", "Firebase", "MediaPipe", "Computer Vision", "Python"],
    category: "Health Tech",
    github: "https://github.com/unikabista",
    demo: null,
    featured: true
  }
];

export const experiences = [
  {
    id: 1,
    role: "Technology & UX Insights Intern",
    company: "Design Arts Seminars, Inc",
    location: null,
    duration: "January 2026 - Present",
    type: "Internship",
    description: "Analyzing marketing KPIs and technical ecosystems to optimize digital customer journeys.",
    highlights: [
      "Leveraged SQL queries and Python with scikit-learn to analyze marketing KPIs and technical ecosystems",
      "Identified and resolved user friction points to optimize the digital customer journey",
      "Proposed AWS-based solutions to modernize digital infrastructure and increase system resilience",
      "Research and implement innovative AI technologies including NLP models and deep learning architectures"
    ]
  },

];

export const leadership = [
  {
    id: 1,
    role: "Vice President",
    organization: "Girls Who Code",
    description: "Leading initiatives to empower women in technology and foster inclusive coding communities on campus.",
    icon: "Code2"
  },
  {
    id: 2,
    role: "Treasurer",
    organization: "Nepalese Student Association (NSA)",
    description: "Managing finances and budget allocation for cultural events and student activities.",
    icon: "Wallet"
  },
  {
    id: 3,
    role: "Campus Ambassador",
    organization: "Intern Insider",
    description: "Connecting students with internship opportunities and professional development resources.",
    icon: "Users"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML/CSS", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "C", level: "Intermediate" }
  ],
  frameworks: [
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "PyTorch", level: "Intermediate" },
    { name: "Scikit-Learn", level: "Advanced" },
    { name: "Pandas", level: "Advanced" },
    { name: "NumPy", level: "Advanced" },
    { name: "MediaPipe", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" }
  ],
  aiAndML: [
    { name: "Computer Vision", level: "Advanced" },
    { name: "Deep Learning", level: "Intermediate" },
    { name: "NLP", level: "Intermediate" },
    { name: "LLMs", level: "Intermediate" },
    { name: "AI Agentic Frameworks", level: "Intermediate" },
    { name: "Model Validation", level: "Intermediate" },
    { name: "BLIP", level: "Intermediate" }
  ],
  tools: [
    { name: "Git/GitHub", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Azure DevOps", level: "Intermediate" },
    { name: "Linux", level: "Intermediate" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Apache Spark", level: "Intermediate" },
    { name: "Advanced Excel", level: "Advanced" }
  ],
  dataScience: [
    { name: "ETL Pipelines", level: "Advanced" },
    { name: "Data Cleaning", level: "Advanced" },
    { name: "Data Querying", level: "Intermediate" },
    { name: "Real-time Data Streams", level: "Intermediate" },
    { name: "EDA Tools", level: "Intermediate" }
  ]
};

export const education = {
  school: "University of Louisiana at Monroe",
  degree: "Bachelor of Science, Computer Science",
  duration: "August 2023 - May 2027",
  coursework: [
    "Python",
    "Data Structures",
    "Java",
    "Algorithms",
    "Object-Oriented Programming",
    "Cybersecurity",
    "Internet Programming"
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
