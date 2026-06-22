// The flagship project gets its own dedicated section.
export const featured = {
  name: "MatScout",
  year: "2024 — Present",
  status: "Live",
  summary:
    "A full-stack platform for scouting and managing combat-sport athletes — built across web and mobile.",
  description:
    "MatScout gives coaches and athletes a single home for match reporting, encrypted scouting reports, video analysis, and team collaboration. Coaches build teams and track their athletes; athletes log results and manage their own profiles. It ships as both a web app and a native mobile app, with tiered subscriptions for individuals and clubs.",
  stack: ["Next.js", "React Native", "MongoDB", "Node.js"],
  features: [
    "Match reporting & result tracking",
    "Encrypted scouting reports",
    "Video analysis",
    "Team collaboration & roles",
    "Web + native mobile apps",
    "Tiered subscriptions",
  ],
  image: "/img/matscout_screenshot.png",
  links: {
    live: "https://matscout.com",
    repo: null, // private
  },
};

export const projects = [
  {
    name: "Amazona",
    blurb:
      "A full e-commerce store where sellers list products with images on Cloudinary and buyers check out through the PayPal API.",
    stack: ["Express", "MongoDB", "React", "JavaScript"],
    image: "/img/amazona-home.png",
    links: {
      repo: "https://github.com/judo2000/amazona-2",
      live: null,
    },
  },
  {
    name: "Weather Dashboard",
    blurb:
      "A 5-day forecast app powered by the OpenWeatherMap API, with recently searched cities saved to local storage.",
    stack: ["JavaScript", "jQuery", "Bootstrap"],
    image: "/img/weather_dashboard.png",
    links: {
      repo: "https://github.com/judo2000/weather_dashboard",
      live: null,
    },
  },
  {
    name: "The Judo Quiz",
    blurb:
      "A timed quiz game built in vanilla JavaScript — every wrong answer costs ten seconds off the clock.",
    stack: ["JavaScript", "jQuery", "CSS"],
    image: "/img/the_judo_quiz.png",
    links: {
      repo: "https://github.com/judo2000/Judo-Quiz",
      live: "https://judo2000.github.io/Judo-Quiz/",
    },
  },
  {
    name: "Password Generator",
    blurb:
      "A configurable password generator — pick character types and length, get a strong random password.",
    stack: ["JavaScript", "HTML"],
    image: "/img/password_generator.png",
    links: {
      repo: "https://github.com/judo2000/password-generator",
      live: "https://judo2000.github.io/Password-Generator/",
    },
  },
  {
    name: "Day Planner",
    blurb:
      "A daily scheduler that lays out working hours with Moment.js and persists your plan in local storage.",
    stack: ["JavaScript", "jQuery", "Moment.js"],
    image: "/img/day_planner.png",
    links: {
      repo: "https://github.com/judo2000/day_planner",
      live: "https://judo2000.github.io/day_planner/",
    },
  },
];
