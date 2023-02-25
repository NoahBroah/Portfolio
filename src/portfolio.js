const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://noahbroah.github.io/portfolio',
  title: 'NBK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: '{ Noah King }',
  role: 'Full Stack Software Engineer',
  description:
  "I'm an Entreprenuer and aspring software developer who enjoy's building applications that help solve problems in the world.",
  resume: 'https://drive.google.com/uc?id=1l9yN4fsP4rkMl5sCDUqYe-fRZ5x5yWN9',
  social: {
    linkedin: 'https://www.linkedin.com/in/noah-b-king/',
    github: 'https://github.com/NoahBroah',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'JobVerify',
    description:
      "Website designed to streamline the hiring process by allowing current and past employees to request employement verifcation from companies, saving time and increasing credibility.",
    stack: ['Rails', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/NoahBroah/JobVerify',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Collabland',
    description:
      "Allows users to create collaborative projects, that other users can be a part of.",
    stack: ['Rails', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/NoahBroah/Phase-4-project',
    // livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Rails',
  'Material UI',
  'Git',
  'SQL',
  'Bootstrap',
  'Python',
]

const hobbies = [
  {
    name: "",
    description: "Created with Blender",
    image: "https://drive.google.com/uc?id=1qo7ePsho685B4dvLhDy2HYT4Hjf_ORp3"
  },
  {
    name: "",
    description: "Created with Blender",
    video: "https://drive.google.com/uc?id=1Hx0lC6H1LPdfxQt2mgpwsOSh19cm9Aha"
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'noahbking1@mail.com',
}

export { header, about, projects, skills, contact, hobbies }
