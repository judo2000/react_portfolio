export const profile = {
  name: "Stephen Scott Moore",
  firstName: "Stephen",
  role: "Full-Stack Developer",
  tagline:
    "I build high-performance web and mobile platforms — and I bring a champion's discipline to every line of code.",
  location: "Denver, Colorado",
  email: "judo2000@comcast.net",
  resume: "/files/Stephen_Scott_Moore_resume.pdf",
  profileImage: "/img/stephen_moore_london_2012.jpg",

  // Developer-forward "dossier" readouts shown in the hero,
  // with one memorable judo highlight.
  stats: [
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Stack", value: "React · Next.js · Node · MongoDB" },
    { label: "Flagship", value: "MatScout — web & mobile" },
    { label: "Beyond Code", value: "World & Paralympic judo champion" },
  ],

  about: [
    "I'm a full-stack web developer based in Denver. I started out self-taught — HTML, CSS, and Classic ASP — and went on to earn a Certificate in Full-Stack Web Development from the University of Denver coding bootcamp. Today I build complete products end to end, from data models and APIs to the interfaces people actually use.",
    "I learn fast and I love helping others get there too — I spent a lot of the bootcamp walking classmates through problems, and teaching is still how I sharpen my own understanding. My flagship project, MatScout, grew straight out of that mindset: a real platform solving a real problem for the combat-sports world.",
    "My other life is judo. I've practiced for over three decades, hold the rank of 6th-degree black belt, and teach alongside my wife at Denver Judo. I'm a former World and Paralympic champion and have served as head coach of the USA Paralympic Judo Team since 2010. The discipline, preparation, and attention to detail that the sport demands are exactly what I bring to engineering.",
  ],

  skills: [
    {
      group: "Frontend",
      items: [
        "React",
        "React Native",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "jQuery",
        "Handlebars",
      ],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express", "GraphQL", "MongoDB", "MySQL", "Sequelize"],
    },
    {
      group: "Tooling",
      items: ["Git", "Vite", "REST APIs", "Cloudinary", "EmailJS"],
    },
  ],

  socials: [
    {
      label: "GitHub",
      handle: "judo2000",
      href: "https://github.com/judo2000",
    },
    {
      label: "LinkedIn",
      handle: "stephen-moore",
      href: "https://www.linkedin.com/in/stephen-moore-ply-mcis-b94bab18/",
    },
  ],
};

export const emailjsConfig = {
  serviceId: "service_50q7t4j",
  templateId: "template_0a3rkwk",
  publicKey: "Ks2sBCa5CIPhtiwHp",
};
