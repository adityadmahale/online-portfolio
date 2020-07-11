const basePath = process.env.PUBLIC_URL;

const projects = [
  {
    id: 1,
    title: "Web Design for Everbody Capstone: Hiking portfolio",
    image: basePath + "/hiking_portfolio.jpg",
    link: "http://adwde.byethost22.com/wdecapstone/capstone.html",
    description: [
      {
        id: 1,
        point:
          "The project is a hiking portfolio created as a part of the 'Web Design for Everybody' specialization Capstone project on Coursera. The capstone project mainly focuses on building syntactically and semantically correct responsive web design targeted on multiple devices. The web page has been developed from scratch using HTML, CSS, and JavaScript.",
      },
    ],
    skills: ["Web Design", "HTML", "CSS", "JavaScript"],
    associatedCertificates: [
      {
        id: 1,
        label:
          "Web Design for Everybody: Basics of Web Development & Coding Specialization",
        link: "https://coursera.org/share/36f332f2786f6f676d058b8904a26268",
      },
      {
        id: 2,
        label: "Introduction to HTML5",
        link: "https://coursera.org/share/1acbef0d06db727ae022f6ffa9eb6087",
      },
      {
        id: 3,
        label: "Introduction to CSS3",
        link: "https://coursera.org/share/570e90b25ff91466ad2054755ee361df",
      },
      {
        id: 4,
        label: "Interactivity with JavaScript",
        link: "https://coursera.org/share/d22c159fd261d1341d55c54bbe702e92",
      },
      {
        id: 5,
        label: "Web Design for Everybody Capstone",
        link: "https://coursera.org/share/99fe272f4cd5fc590caf56066da8c059",
      },
      {
        id: 6,
        label: "Advanced Styling with Responsive Design",
        link: "https://coursera.org/share/d2896e922b2521550b9fe425ee2754b0",
      },
    ],
  },
  {
    id: 2,
    title: "IBM Data Science Capstone Project",
    image: basePath + "/data_science.jpg",
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
    associatedCertificates: [
      {
        id: 1,
        label: "IBM Data Science Professional Certificate",
        link: "https://coursera.org/share/1cdc9ecd9a67d5d780abb86aac5b7850",
      },
      {
        id: 2,
        label: "Databases and SQL for Data Science",
        link: "https://coursera.org/share/89c41021295d10435311d9466cf4c3b9",
      },
      {
        id: 3,
        label: "Python for Data Science and AI",
        link: "https://coursera.org/share/00af0b33c853c4944c0fe92571b703ab",
      },
      {
        id: 4,
        label: "Data Science Methodology",
        link: "https://coursera.org/share/bdcf66d1e71effccfbbfd871ec577139",
      },
      {
        id: 5,
        label: "Data Analysis with Python",
        link: "https://coursera.org/share/49e5c2959e671fa93d79a60dd642c4c3",
      },
      {
        id: 6,
        label: "What is Data Science?",
        link: "https://coursera.org/share/26e028d2098e0883b596285303a28a5a",
      },
      {
        id: 7,
        label: "Tools for Data Science",
        link: "https://coursera.org/share/4b6fcb6b3b7e0cc54d606c73efa6c246",
      },
      {
        id: 8,
        label: "Data Visualization with Python",
        link: "https://coursera.org/share/d7e97a21643e2ebe1dff2aeb6dc81132",
      },
      {
        id: 9,
        label: "Machine Learning with Python",
        link: "https://coursera.org/share/fea2852284db6b587d462050d8dfdaba",
      },
      {
        id: 10,
        label: "Applied Data Science Capstone",
        link: "https://coursera.org/share/d2c4fab5d1fb6528b9c16e8595162667",
      },
    ],
  },
  {
    id: 3,
    title: "Audio Equalizer",
    image: basePath + "/final_year.jpg",
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
    skills: ["Embedded C", "MATLAB", "LabVIEW"],
  },
  {
    id: 4,
    title: "Eye Gaze Tracking System",
    image: basePath + "/third_year.jpg",
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
    skills: ["MATLAB", "Digital Image Processing"],
  },
];

export function getProjects() {
  return projects;
}
