const skills = [
  {
    id: 1,
    domain: "IT Automation",
    names: [
      "Python",
      "Pytest",
      "Docker",
      "Git",
      "Linux",
      "Java",
      "PostgreSQL",
      "Bash",
      "Robot Framework",
      "Selenium WebDriver",
    ],
    profiency: 100,
  },
  {
    id: 2,
    domain: "Web and App Development",
    names: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.js",
      "Node.js",
      "Redux.js",
      "Express.js",
      "React Native",
      "Responsive Web Design",
    ],
    profiency: 85,
  },
  {
    id: 3,
    domain: "Cloud Computing",
    names: ["AWS", "Azure", "OpenStack", "GCP", "Heroku"],
    profiency: 70,
  },
  {
    id: 4,
    domain: "Data Science",
    names: [
      "Numpy",
      "Pandas",
      "Ipython",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Predictive Modelling",
    ],
    profiency: 60,
  },
];

export function getSkills() {
  return skills;
}
