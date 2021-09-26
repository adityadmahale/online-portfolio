const experience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    subtitle: "EnterpriseDB",
    description: [
      {
        id: 1,
        description:
          "Designed and implemented a complete CICD workflow from scratch for testing a distributed system using Ansible, Docker, and Github actions.",
      },
      {
        id: 2,
        description:
          "Created a Python program for automatic deployment and configuration of highly available PostgreSQL clusters.",
      },
      {
        id: 3,
        description:
          "Developed a dashboard using ReactJs for displaying statistics collected from a CICD run.",
      },
      {
        id: 4,
        description:
          "Migrated existing cloud infrastructure automation suite to a more robust Pytest framework reducing execution time by 70%.",
      },
      {
        id: 5,
        description:
          "Installed and configured recreations of software production environments on different cloud platforms such as AWS, Azure, and OpenStack.",
      }
    ],
    duration: "Mar 2018 – Aug 2021",
  },
  {
    id: 2,
    title: "Software Engineering Analyst",
    subtitle: "Accenture",
    description: [
      {
        id: 1,
        description:
          "Wrote clean, scalable and testable software code using Django/Python.",
      },
      {
        id: 2,
        description:
          "Developed user interfaces with modern JavaScript, HTML5 and CSS3.",
      },
      {
        id: 3,
        description:
          "Oversaw 3-member team developing and executing automation scripts.",
      }
    ],
    duration: "Dec 2015 – Feb 2018",
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    subtitle: "Accenture",
    description: [
      {
        id: 1,
        description:
          "Accelerated the process of merchandising publishing by retrieving data from the website by web-scraping using Python.",
      },
      {
        id: 2,
        description:
          "Developed script in Python to automate page visits required for segment tracking. ",
      },
      {
        id: 3,
        description:
          "Proactively recommended changes in web design to boost shop conversion rates based on analyzed data.",
      }
    ],
    duration: "Aug 2014 – Nov 2015",
  },
];

export function getExperience() {
  return experience;
}
