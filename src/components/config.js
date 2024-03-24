module.exports = {
  email: 'rusiyasid26@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sidrusiya',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sidrusiya',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SiddharthaRusi1',
    },
    {
      name: 'Linkedin',
      url: 'https://in.linkedin.com/in/siddhartha-rusiya-79478a185',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  jobsData: [
    { 
      node: {
        title: 'Associate Software Engineer',
        company: 'Oracle',
        location: 'Hyderabad, IN',
        range: 'July 2022 - Present',
        url: 'https://www.oracle.com/',
        html: '<ul>'+
        '<li>Developed Import Data framework, focusing on implementing chunking techniques and a robust uploading mechanism to efficiently handle large file uploads within the application.</li>'+
        '<li>Develop various Customer Relationship Management features involving memberships, profiles and stays.</li>'+
        '</ul>'
      }
    },
    { 
      node: {
        title: 'Project Intern',
        company: 'Oracle',
        location: 'Hyderabad, IN',
        range: 'Jan 2022 - July 2022',
        url: 'https://www.oracle.com/',
        html: '<ul>'+
        '<li>Developed membership features for the hospitality app.</li>'+
        '<li>Explored software architecture of existing hospitality applications along with tools and technologies involved.</li>'+
        '<li>Explored existing frameworks which are involved in building hospitality applications.</li>'+
        '</ul>'
      }
    }
  ],

  projects: [
    {
      node: {
        title: 'MISP Raipur',
        github: '',
        external: 'https://www.researchgate.net/publication/377074222_Implementation_of_Legal_Documents_Text_Summarization_and_Classification_by_Applying_Neural_Network_Technique',
        tech:[
          'Deep Learning',
          'NLP',
          'Python'
        ],
        html: "<p>Deep Learning Models for Summarization and Classification of Legal Documents that help in building efficient search functionality for legal documents.</p>"
      }
    },
    {
      node: {
        title: 'FIRE-2021 CEUR',
        github: '',
        external: 'http://ceur-ws.org/Vol-3159/T2-8.pdf',
        tech:[
          'Deep Learning',
          'NLP',
          'Python'
        ],
        html: "<p>Deep Learning Models for classification of Legal Documents that helps users to efficently organise legal documents.</p>"
      }
    }
  ],

  featuredProjects: [
    {
      node: {
        title: "Legal Documents Summarization \& Classification",
        cover : "legal",
        github: 'https://github.com/sidrusiya/AILA_Tasks',
        external: 'https://github.com/sidrusiya/AILA_Tasks',
        tech:[
            'VS Code',
            'Deep Learning',
            'Python',
            'NLP',
            'Tokenization'],
        cta: false,
        html: "<p>Build deep learning model for classification & summarization, so that using them we can build search functionality and analysis of documents in huge storage.</p>"
      }
    },
    {
      node: {
        title: "Decentralized Verification of Articles",
        cover : "decenter",
        github: 'https://github.com/sidrusiya/Fake-News-Detector',
        external: 'https://github.com/sidrusiya/Fake-News-Detector',
        tech:[
            'VS Code',
            'Blockchain',
            'Python',
            'NLP'],
        cta: false,
        html: "<p>Implemented a secure and tamper-proof record-keeping system on the blockchain to ensure the integrity of data. Enabled transparent verification of news articles by providing users with access to the blockchain.</p>"
      }
    }
  ],

  colors: {
    green: '#ffd700',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
