const projects = [
  {
    id: 1,
    title: "Web Design for Everbody Capstone: Hiking portfolio",
    image: "/hiking_portfolio.jpg",
    link: "http://adwde.byethost22.com/wdecapstone/capstone.html",
    description: [
      {
        id: 1,
        point:
          "The project is a hiking portfolio created as a part of the 'Web Design for Everybody' specialization Capstone project on Coursera. The capstone project mainly focuses on building syntactically and semantically correct responsive web design targeted on multiple devices. The web page has been developed from scratch using HTML, CSS, and JavaScript.",
      },
    ],
    skills: ["Web Design", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "IBM Data Science Capstone Project",
    image: "/data_science.jpg",
    link:
      "https://adityacourse.blogspot.com/2019/11/ibm-data-science-capstone-project.html",
    description: [
      {
        id: 1,
        point:
          "The purpose of this capstone project is to find the most suitable location for the delivery service owner to open limited delivery outlets in different parts of the Pune city. Although several locations can be chosen based on distance, the owner wants to find the most popular types of food consumed across different parts of the city to set up relevant outlets in relevant parts of the city. Also, there is a budgetary restriction to the opening of the number of outlets. By using data science tools and machine learning models such as clustering, this project aims to provide solutions to these problems.",
      },
    ],
    skills: [
      "Data Science",
      "Machine Learning",
      "Python Programming",
      "Data Analysis",
      "Data Visualization",
      "Numpy",
      "Pandas",
      "Ipython",
      "Predictive Modelling",
      "SQL",
    ],
  },
  {
    id: 3,
    title: "Audio Equalizer",
    image: "/final_year.jpg",
    description: [
      {
        id: 1,
        point:
          "- Implemented graphic equalizer on a hardware platform for the processing of real-time audio signals using digital signal processor TDA7315.",
      },
      {
        id: 2,
        point:
          "- Used AVR platform, peripheral interfacing hardware - Keypad and LCD and stereo power amplifier.",
      },
      {
        id: 3,
        point: "- Programmed using Embedded C.",
      },
    ],
    skills: [],
  },
  {
    id: 4,
    title: "Eye Gaze Tracking System",
    image: "/third_year.jpg",
    description: [
      {
        id: 1,
        point:
          "- The project's goal was to provide accessibility to the digital world for people with motor disabilities.",
      },
      {
        id: 2,
        point:
          "- Built pupil tracking glasses mounted with compact IR sensitive camera and IR LED.",
      },
      {
        id: 3,
        point:
          "- Utilized digital video processing techniques to enhance a series of raw images received from the camera.",
      },
      {
        id: 4,
        point: "- MATLAB was used to design the software.",
      },
    ],
    skills: [],
  },
];

export function getProjects() {
  return projects;
}
