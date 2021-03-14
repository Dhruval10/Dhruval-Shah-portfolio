// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: " #ff9b11, #9b59b6, #39b51d, #517a85, #d9578f",
  firstName: "Dhruval",
  middleName: "",
  lastName: "Shah",
  message: " | Software Engineer | Photographer | Content Creator | Open Source Contributor |",
  icons: [
    {
      "id": 0,
      "image": "fa-github",
      "url": "https://github.com/Dhruval10",
      "style": "socialicons"
    },
    {
      "id": 1,
      "image": "fa-facebook",
      "url": "https://www.facebook.com/dhruval10",
      "style": "socialicons"
    },
    {
      "id": 2,
      "image": "fa-instagram",
      "url": "https://www.instagram.com/dhruvals10/",
      "style": "socialicons"
    },
    {
      "id": 3,
      "image": "fa-linkedin",
      "url": "https://www.linkedin.com/in/dhruval10/",
      "style": "socialicons"
    },
    {
      "id": 4,
      "image": "fa-twitter",
      "url": "https://twitter.com/shahdhruval10",
      "style": "socialicons"
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/dhruvalshah.png"),
  imageSize: 375,
  // imageLink: require("https://drive.google.com/file/d/1945M557DOcE2PhSGD_lyNWjGvhmI7gm3/view?usp=sharing"),
  message: "• Currently working as a Graduate Research Assistant at Cal State University - San Marcos  • 2 years of professional experience as a Software Engineer and as a Software Developer • Master's student in Computer Science at California State University - San Marcos graduating in May 2021 • Machine learning enthusiast with experience in all phases of SDLC using Agile Methodologies • Strong understanding of object-oriented programming/design, data structures and algorithms • Full-Stack Web Developer having experience in building web applications in Spring, Hibernate Java, MVC, React.JS, Node.JS • Have experience in Cloud technologies, have used Amazon EC2, S3, Lambda, EBS, CloudTrail, Sagemaker on enormous occasions",
  resume: "https://resume.dhruval.tech/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Dhruval10", //i.e."johnDoe12Gh"
  reposLength: 7,
  specificRepos: [],
};

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images :[],
//   imageSize: {}
//     // images: [
//   //   { 
//   //     img: require("../editable-stuff/dhruvalshah.png"), 
//   //     label: "First slide label", 
//   //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//   //   },
//   //   { 
//   //     img: require("../editable-stuff/dhruvalshah.png"), 
//   //     label: "Second slide label", 
//   //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//   //   },
//   // ],
//   // imageSize: {
//   //   width:"615",
//   //   height:"450"
//   // }
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "Java", value: 90 },
    { name: "Hibernate", value: 90 },
    { name: "Spring boot", value: 90 },
    { name: "Amazon Web Service", value: 90 },
    { name: "Machine Learning", value: 95 },
    { name: "MongoDB", value: 90 },
    { name: "MySQL", value: 90 },
    { name: "Microsoft Azure", value: 88 },
    { name: "Google Cloud and Firebase", value: 88 },
  ],
  softSkills: [
    { name: "Quick Lerner", value: 95 },
    { name: "Adaptability", value: 90 },
    { name: "Positive Attitude", value: 80 },
    { name: "Problem Solving", value: 85 },
    { name: "Time Management", value: 90 },
    { name: "Leadership", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time positions in Software Engineering domain! I can be reached at (760)-410-2676 or at",
  email: "contact@dhruval.co",
};


const experiences = {
  show: true,
  data: [
    {
      role: 'Graduate Research Assistant',
      company: 'CSUSM',
      companylogo: require("C:/Users/Dhruval/Desktop/Dhruval.me/src/editable-stuff/csusm.jpg"),
      date: 'May 2020 – Jan 2021',
      desc:
        '',
      descBullets: [
        'Performed Twitter-based sentiment analysis to determine the winner on the 2020 US elections',
        'Collected and Processed over 10 Million Tweets with 93.48 % accuracy using Long-short term memory',
        'Predicted Joe Biden will win by 55% votes in 2020 Election',
        'Used Amazon Sagemaker for data pre-processing and model training/testing',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'MLveda',
      companylogo: require("C:/Users/Dhruval/Desktop/Dhruval.me/src/editable-stuff/mlveda.jpg"),
      date: 'May 2018 – May 2019',
      desc:
        '',
      descBullets: ['Performed multi-variate linear regression and K-Means clustering to recommend recipes from the list of available ingredients',
        'Recommended similar food items based on the searches of the user by comparing the ingredients in other food items',
        'Developed website using Spring Framework and Hibernate in Java which enables Alexa to automatically generate a formbased web application with the user inputs',
        'Deployed the model in EC2 & S3 and created AWS Lambda functions for sending the user input to the web application',
        ],
    },
    {
      role: 'Software Developer',
      company: 'Softvan',
      companylogo: require("C:/Users/Dhruval/Desktop/Dhruval.me/src/editable-stuff/softvan.png"),
      date: 'Dec 2017 – Mar 2018',
      desc:
        '',
      descBullets: ['Developed an ecommerce website for the apparels using SpringBoot Framework in Java',
        'Created APIs for fetching the apparels based on the user request and integrated payment gateways into the website',
        'Integrated Login APIs of Facebook and Google and leveraged Twilio API for authentication',
        'Developed user interface using ReactJS and handled cross-browser compatibility issues using ReactJS',
    ],
    },
  ]
}


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences};
