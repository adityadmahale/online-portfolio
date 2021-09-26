const education = [
  {
    id: 1,
    title: "Dalhousie University",
    subtitle:
      "Master's degree, Applied Computer Science",
    description: [
    ],
    duration: "2021 - 2023",
  },
  {
    id: 2,
    title: "Savitribai Phule Pune University",
    subtitle:
      "Bachelor of Engineering - BE, Electronics and Telecommunication Engineering",
    description: [
      {
        id: 1,
        description: "First Class with Distinction, 70.5%",
      },
    ],
    duration: "2010 - 2014",
  },
];

export function getEducation() {
  return education;
}
