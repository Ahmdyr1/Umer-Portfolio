/**
 * All personal content lives here and in projects.ts / posts.ts.
 * Everything below is placeholder text: replace it with your real details.
 * Numbers are 0 on purpose so no invented figure can go live by accident.
 */

export const site = {
  name: "Your Name",
  firstName: "Your Name",
  title: "Product Designer",
  brand: "YOUR BRAND",
  initials: "YN",
  description: "Portfolio of Your Name: selected work, experience, skills and writing.",
  email: "you@example.com",
  phone: "+00 000 000 0000",
  website: "yourdomain.com",
  location: "Your City, Country",
  /** Path or URL of your CV, for example "/cv.pdf". The download button stays hidden while empty. */
  resumePdf: "",
  footerBlurb: "A short line about who you are, what you do and the kind of work you are looking for.",
  heroQuote: "A short recommendation from a client or colleague goes here.",
  yearsExperience: 0,
  portraits: {
    hero: "/images/portraits/hero.png",
    why: "/images/portraits/why.png",
    banner: "/images/portraits/banner.png",
  },
  /** Leave a url empty to show the icon without a link. */
  social: [
    { label: "Facebook", icon: "facebook", url: "" },
    { label: "YouTube", icon: "youtube", url: "" },
    { label: "WhatsApp", icon: "whatsapp", url: "" },
    { label: "Instagram", icon: "instagram", url: "" },
    { label: "X", icon: "x", url: "" },
  ],
} as const;

export const nav = {
  left: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ],
  right: [
    { label: "Blogs", href: "/blogs" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
};

export const services = [
  { title: "UX / Product Design", image: "/images/services/service-1.png" },
  { title: "Front End", image: "/images/services/service-2.png" },
  { title: "Graphic Design", image: "/images/services/service-1.png" },
  { title: "Your Fourth Field", image: "/images/services/service-2.png" },
];

export const servicesIntro = "One or two sentences on the fields you work across and how they fit together.";

export const experience = [
  { company: "Company One", period: "Start – End", role: "Your Role", summary: "What you owned here and the result you are proudest of." },
  { company: "Company Two", period: "Start – End", role: "Your Role", summary: "What you owned here and the result you are proudest of." },
  { company: "Company Three", period: "Start – Present", role: "Your Role", summary: "What you owned here and the result you are proudest of." },
];

export const whyHire = {
  text: "Two or three lines on what makes working with you different.",
  stats: [
    { value: 0, suffix: "+", label: "Projects Completed" },
    { value: 0, suffix: "+", label: "Happy Clients" },
  ],
};

export const academics = {
  text: "Your degree, institution and graduation year, plus anything notable about your studies.",
  stats: [
    { value: 0, suffix: "", label: "Degrees" },
    { value: 0, suffix: "", label: "Courses Completed" },
  ],
};

export const education = [
  { degree: "Your Degree", school: "Your University", period: "Start – End" },
  { degree: "Your Diploma or Course", school: "Your Institution", period: "Start – End" },
];

export const aboutIntro = {
  eyebrow: "Experience",
  title: "Creative ideas and their solutions",
  body: "Write your story here: how you got started, the problems you like solving, the fields you work in and what you are focused on now. A short paragraph of four to six lines fits this layout best.",
  cards: [
    { value: 0, suffix: "+", label: "Live Products" },
    { value: 0, suffix: "+", label: "Happy Clients" },
    { value: 0, suffix: "+", label: "Awards" },
  ],
};

export const testimonials = [
  { name: "Client Name", role: "Role, Company", rating: 5, text: "Replace this with a real testimonial. Include what you worked on together and the difference it made." },
  { name: "Client Name", role: "Role, Company", rating: 5, text: "Replace this with a real testimonial. Include what you worked on together and the difference it made." },
  { name: "Client Name", role: "Role, Company", rating: 5, text: "Replace this with a real testimonial. Include what you worked on together and the difference it made." },
  { name: "Client Name", role: "Role, Company", rating: 5, text: "Replace this with a real testimonial. Include what you worked on together and the difference it made." },
];

export const testimonialsIntro = "A sentence introducing the people you have worked with.";

export const certifications = [
  { name: "Certification Name", role: "Issuer, Year", text: "What this certification covers and why it matters for your work." },
  { name: "Certification Name", role: "Issuer, Year", text: "What this certification covers and why it matters for your work." },
  { name: "Certification Name", role: "Issuer, Year", text: "What this certification covers and why it matters for your work." },
  { name: "Certification Name", role: "Issuer, Year", text: "What this certification covers and why it matters for your work." },
];

export const certificationsIntro = "A sentence on the qualifications you hold and keep up to date.";

export const skills = [
  { group: "Design", items: ["Skill one", "Skill two", "Skill three", "Skill four"] },
  { group: "Development", items: ["Skill one", "Skill two", "Skill three", "Skill four"] },
  { group: "Tools", items: ["Tool one", "Tool two", "Tool three", "Tool four"] },
];

export const achievements = [
  { year: "Year", title: "Achievement Title", text: "One line on what you achieved and who recognised it." },
  { year: "Year", title: "Achievement Title", text: "One line on what you achieved and who recognised it." },
  { year: "Year", title: "Achievement Title", text: "One line on what you achieved and who recognised it." },
];

export const trust = ["0.0/5 Average Rating", "00+ Awards", "Your Main Certification"];

export const marquee = ["UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];

export const resumeSummary = "A short professional summary: your role, years of experience, fields and what you are looking for next.";
