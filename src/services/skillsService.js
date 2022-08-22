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
      "Ansible",
      "Kubernetes",
      "Github Actions",
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
      "Django",
      "Material-UI",
      "TypeScript",
    ],
    profiency: 100,
  },
  {
    id: 3,
    domain: "Cloud Computing",
    names: ["AWS", "Azure", "OpenStack", "GCP", "Heroku"],
    profiency: 100,
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
    profiency: 80,
  },
];

export function getSkills() {
  return skills;
}
