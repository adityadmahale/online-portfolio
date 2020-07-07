const experience = [
  {
    id: 1,
    title: "Software Engineer",
    subtitle: "EnterpriseDB",
    description: [
      {
        id: 1,
        description:
          "Develop automation suite utilising Python programming language and Docker containers.",
      },
      {
        id: 2,
        description:
          "Write clean and scalable automation code using Pytest framework.",
      },
      {
        id: 3,
        description:
          "Use different cloud platforms such as AWS, Azure and OpenStack.",
      },
      {
        id: 4,
        description: "Write SQL queries using knowledge of PostgreSQL.",
      },
      {
        id: 5,
        description:
          "Migrated existing cloud infrastructure automation suite to a more robust framework reducing execution time by 70%.",
      },
      {
        id: 6,
        description:
          "Simplified code implementation by applying knowledge of design patterns.",
      },
      {
        id: 7,
        description:
          "Optimized Dockerfile instructions to efficiently build a Docker image.",
      },
    ],
    duration: "Mar 2018 – Present",
  },
  {
    id: 2,
    title: "Software Engineering Analyst",
    subtitle: "Accenture",
    description: [
      {
        id: 1,
        description:
          "Promoted to software engineering analyst based on success with optimisation tests that boosted portal traffic.",
      },
      {
        id: 2,
        description:
          "Oversaw 3-member team developing and executing automation scripts.",
      },
      {
        id: 3,
        description:
          "Upgraded an existing automation framework by integrating with ALM reducing a significant amount of manual efforts.",
      },
      {
        id: 4,
        description:
          "Created a framework from scratch using Java and Robot framework to auto-generate SQL full load queries from a standardized input file by a data-driven approach.",
      },
      {
        id: 5,
        description: "Aided two trainees using pair programming technique.",
      },
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
          "Created reusable scripts in Perfecto to automate testing on Android and iOS platforms.",
      },
      {
        id: 2,
        description:
          "Analyzed web browsing data on Adobe target and performed A/B and multivariate testing to optimize the customer experience.",
      },
      {
        id: 3,
        description:
          "Proactively recommended changes in web design to boost shop conversion rates based on analyzed data.",
      },
      {
        id: 4,
        description:
          "Accelerated the process of merchandising publishing by retrieving data from the website by web-scraping using Python language.",
      },
      {
        id: 5,
        description:
          "Developed script in Python to automate page visits required for segment tracking.",
      },
    ],
    duration: "Aug 2014 – Nov 2015",
  },
];

export function getExperience() {
  return experience;
}
