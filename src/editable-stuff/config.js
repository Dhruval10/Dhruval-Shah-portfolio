// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dhruval",
  middleName: "",
  lastName: "Shah",
  message: " | Software Engineer | Programmer | Developer | Photographer | Creator |",
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
  resume: "http://resume.dhruval.tech/",
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
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images :[],
  imageSize: {}
    // images: [
  //   { 
  //     img: require("../editable-stuff/dhruvalshah.png"), 
  //     label: "First slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  //   { 
  //     img: require("../editable-stuff/dhruvalshah.png"), 
  //     label: "Second slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  // ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "Amazon Web Service", value: 90 },
    { name: "JAVA", value: 90 },
    { name: "Machine Learning", value: 95 },
    { name: "MongoDB", value: 85 },
    { name: "Google Cloud and Firebase", value: 85 },
  ],
  softSkills: [
    { name: "Quick Lerner", value: 95 },
    { name: "Adaptability", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "contact@dhruval.tech",
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
