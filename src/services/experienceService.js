const experience = [
  {
    id: 1,
    title: "Graduate Teaching Assistant",
    subtitle: "Dalhousie University",
    description: [
      {
        id: 1,
        description:
          "Reporting to Professor Robert Hawkey for course CSCI 4145/5409.",
      },
      {
        id: 2,
        description:
          "Resolved student queries during TA Office Hours on Teams Virtual Session.",
      },
      {
        id: 3,
        description: "Marked project deliverables of the students.",
      },
      {
        id: 4,
        description:
          "Guided seven project groups in developing highly available and resilient cloud apps.",
      },
    ],
    duration: "Apr 2022 – Jul 2022",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    subtitle: "EnterpriseDB",
    description: [
      {
        id: 1,
        description:
          "Developed web application using MERN stack, and contributed significantly to the design and application flow planning and feedback. Architected the application from start to end.",
      },
      {
        id: 2,
        description:
          "Conducted software development research by gathering and analyzing existing technological constraints and client specifications to determine what future opportunities will exist to innovate and improve products.",
      },
      {
        id: 3,
        description:
          "Deployed and maintained applications using AWS services such as EC2, S3, SNS, RDS, SQS, SNS and Lambda, making sure that the services are highly available and scalable.",
      },
      {
        id: 4,
        description:
          "Modified existing software programs by writing functional, product, and software specifications using the Agile software development methodologies as needed.",
      },
      {
        id: 5,
        description:
          "Designed and implemented a CICD workflow from scratch for a HA system using Ansible and Github actions.",
      },
      {
        id: 6,
        description:
          "Migrated existing cloud automation suite to a robust Pytest framework reducing execution time by 70%.",
      },
      {
        id: 7,
        description:
          "Installed and configured recreations of software production environments on different cloud platforms such as AWS, Azure, and OpenStack.",
      },
    ],
    duration: "Mar 2018 – Aug 2021",
  },
  {
    id: 3,
    title: "Software Engineering Analyst",
    subtitle: "Accenture",
    description: [
      {
        id: 1,
        description:
          "Wrote clean, scalable and testable software code using Django Framework.",
      },
      {
        id: 2,
        description:
          "Collaborated with software engineers and product owner in agile environment to prioritize needs, translated business and functional requirements into technical specification and produced high quality software design and architecture.",
      },
      {
        id: 3,
        description:
          "Developed user interfaces with modern JavaScript, HTML5 and CSS3.",
      },
      {
        id: 4,
        description:
          "Oversaw 3-member web development team. Tasks Included: Gathering the requirements, tasks break down, sprint planning, estimations and planning the release dates.",
      },
    ],
    duration: "Dec 2015 – Feb 2018",
  },
  {
    id: 4,
    title: "Associate Software Engineer",
    subtitle: "Accenture",
    description: [
      {
        id: 1,
        description:
          "Researched and optimized existing web application written in HTML, CSS, JavaScript and JQuery. Improved average customer conversion rate by 80%.",
      },
      {
        id: 2,
        description:
          "Developed script in Python to automate page visits required for segment tracking in Adobe Analytics.. ",
      },
      {
        id: 3,
        description:
          "Saved 60 hours of resource bandwidth per month by accelerating the process of merchandising publishing by retrieving data from the website by web-scraping using Python. ",
      },
      {
        id: 4,
        description:
          "Proactively recommended changes in web design to boost shop conversion rates based on analyzed data.",
      },
    ],
    duration: "Aug 2014 – Nov 2015",
  },
];

export function getExperience() {
  return experience;
}
