import { jsnipper155 } from "./../assets/images";

export const skills: {
  title: string;
  imgSrc: string;
}[] = [
  {
    title: "HTML",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png",
  },
  {
    title: "CSS",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
  },

  {
    title: "JavaScript",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
  },
  {
    title: "ReactJs",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png",
  },
  {
    title: "TypeScript",
    imgSrc:
      "	https://cdn.sanity.io/images/plpo7tl6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png",
  },
  {
    title: "PHP",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/bed93d4b72271d63e165c86eb621bdcd2bac3397-480x480.png",
  },
  {
    title: "Laravel",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/99b0745e176f7ac3ff09ed0211b91e86bc199b64-480x497.png",
  },
  {
    title: "Kendo UI",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3587/3587173.png",
  },
  {
    title: "Postgres",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3069/3069224.png",
  },
  {
    title: "Firebase",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
  },
];

export const works: {
  title: string;
  techs: string[];
  imgSrc: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
}[] = [
  {
    title: "JMovies",
    techs: ["React", "TMDb API"],
    description:
      "Let you watch movies online without having to register or paying.",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/62e9d03bf26f8d502c698a48307a4ad05fdc95cc-1900x795.jpg",
    demoUrl: "https://jmovies.netlify.app/",
    githubUrl: "https://github.com/pusoy/reactjs-movie-app",
  },
  {
    title: "Danao Glass and Aluminum Supply",
    techs: ["React"],
    description: "Demo website",
    imgSrc:
      "https://cdn.sanity.io/images/plpo7tl6/production/0bdd66b9a284a156c9678b3a546b6e8201fa854b-1299x926.png",
    githubUrl: "https://github.com/Jmaglinte-Projects/danao_glass_and_aluminum",
    demoUrl: "https://danao-glass.netlify.app/",
  },
  // {
  //   title: "Simple Resume",
  //   techs: ["React", "MUI"],
  //   description: "Hard coded resume website",
  //   imgSrc:
  //     "https://cdn.sanity.io/images/plpo7tl6/production/a0d5d210eee415915e80b340bc8854a85e062a66-1304x868.png",
  //   demoUrl: "#javascript",
  //   githubUrl: "https://github.com/Jmaglinte-Projects/EuniceBooc",
  // },
  {
    title: "Snipper 155",
    techs: ["React"],
    description: "Simple website for my bike",
    imgSrc: jsnipper155,
    demoUrl: "https://jsnipper155.netlify.app/",
    githubUrl: "https://github.com/Jmaglinte-Projects/sniper155",
  },
];

export const experiences: {
  position: string;
  company: string;
  from: string;
  to: string;
  overview?: string;
  responsibilities: string[];
  projects?: {
    name: string;
    overview: string;
  }[];
}[] = [
  {
    position: "Web Developer",
    company: "Proweaver Inc.",
    from: "August 6, 2019",
    to: "June 30, 2021",
    responsibilities: [
      "Maintain clients website (WordPress, PrestaShop, Shopify, WooCommerce)",
      "Integrate plugin to WordPress as clients need",
      "Convert website layout to WordPress",
    ],
  },
  {
    position: "Software Developer",
    company: "Muramoto Audio Visual Phils., Inc.",
    from: "July 1, 2021",
    to: "February 13 2023",
    overview: `Design and develop features of new and existing software applications. Design stable and
    reliable databases according to organization’s needs. Responsible for developing, testing,
    improving and maintaining new and existing databases.`,
    responsibilities: [
      "Reviewing current systems and presenting ideas for system improvements;",
      "Evaluating and implementing ways to incorporate existing or new technologies;",
      `Develops, plans and coordinate projects as directed by management. Communicate
      changes and progress appropriately;`,
      `Modify and develop existing web applications according to request and new
      requirement;`,
      `Consult with managers/project leader and confer with application user to collect
      specification requirements, identity problems and discuss system evaluation and
      improvements;`,
      `Participate in Team meetings, providing input and suggestions;`,
      `Maintaining the systems once they are up and running;`,
      `Maintain existing applications by making modifications and correcting error as required;`,
      `Assist in any programs designed to improve quality and efficiency of the operational
      processes as well as to reduce costs;`,
    ],
    projects: [
      {
        name: "MPS (MAPLE Production System)",
        overview:
          "An in-house inventory system including: forecast, purchasing and sales",
      },
    ],
  },
  {
    position: "Junior Software Engineer",
    company: "Everbank Vananaz Inc.",
    from: "March 13, 2023",
    to: "Present",
    overview: "",
    responsibilities: [
      "Promote harmony and teamwork in the organization;",
      `Work individually and collaboratively with the team for development and improvement of
      products and features;`,
      `Display high level of professionalism and respect;`,
      "Participate in weekly team meetings and company activities;",
      "Contribute to the professional growth of the company through commitment and quality of work;",
      `Learn how to build Web and Mobile Applications using React Native and other technologies
      deemed necessary by the company;`,
      `Maintain and update codes for products;`,
      `Use best coding practices and follow acceptable standards;`,
      `Participate in the software development life cycle: from planning up to deployment;`,
      `Constantly enhance coding skills and learn new technologies;`,
      `Perform other tasks or assignments that the company will give from time to time within the
      capabilities of the employee;`,
    ],
    projects: [
      {
        name: "VATS",
        overview: "Internal recruitment website",
      },
      {
        name: "Royal Partner",
        overview: "Dating app",
      },
    ],
  },
];
