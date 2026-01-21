const config = {
  title: "Potateo's Portfolio",
  description: {
    long: "Explore the portfolio of Brian Teo, a Junior AI/ML Engineer and Backend Developer specializing in intelligent systems, ML pipelines, and scalable backend architecture. Discover my work including ATS systems with Claude API, OCR-powered document processing, custom geolocation tracking, and AI-powered educational tools. Let's build something innovative together!",
    short:
      "Discover the portfolio of Brian Teo, an AI/ML Engineer building intelligent systems and scalable backend solutions.",
  },
  keywords: [
    "Brian Teo",
    "Teo Kah Hien",
    "AI/ML Engineer",
    "Backend Developer",
    "Machine Learning",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Anthropic Claude API",
    "OCR",
    "Computer Vision",
    "ATS System",
    "Docker",
    "PyTorch",
    "Cognitive Science",
    "Miri Sarawak",
    "Malaysia",
  ],
  author: "Teo Kah Hien",
  email: "brian04teo@gmail.com",
  site: "https://brianteo.vercel.app", // Update this when you have your domain

  // for github stars button (removed - not needed)
  githubUsername: "kimimura",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "https://www.instagram.com/brn_tkhh/",
    github: "https://github.com/kimimura",
    linkedin: "https://www.linkedin.com/in/kah-hien-teo-6a4b9a23b/",
  },
};
export { config };
