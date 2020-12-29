module.exports = {
  siteTitle: 'Hi! I\'m Victor!',
  siteDescription: `I\'m a web developer`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Victor Abeledo',
  twitterUsername: 'victordev0',
  githubUsername: 'abeledovictor',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `
  I’m Victor Abeledo, a computer systems analyst graduate and programmer. I freelance using the most suited tools for the project I’m working with. Some of my personal favorites: React, Express, Gatsby & Spring boot.
  
    I live and work in Rosario, one of the most beautiful cities in Argentina.
  I love traveling and learning new languages, up to this moment I know how to speak in English, Spanish and a bit of Italian, which I’m still learning in my spare time.
  I recently started using twitter, to post updates about my side projects.
  I’m available for hire for web development tasks or projects, be it backend or frontend work.
`,
  skills: [
    {
      name: 'HTML',
      level: 90
    },
    {
      name: 'CSS',
      level: 80
    },
    {
      name: 'Javascript',
      level: 90
    },
    {
      name: 'NodeJs',
      level: 90
    },
    {
      name: 'React',
      level: 95
    },
    {
      name: 'Git',
      level: 80
    },
    {
      name: 'Java',
      level: 70
    },
    {
      name: 'Spring Boot',
      level: 60
    },
    {
      name: 'Cordova',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Leniolabs_LLC",
      begin: {
        month: 'feb',
        year: '2020'
      },
      duration: null,
      occupation: "Frontend developer",
      description: "Working for Ellie Mae, responsible for the development and maintenance of the design system used across the company."
  
    },{
      company: "Globant",
      begin: {
        month: 'jan',
        year: '2018'
      },
      duration: '1 yr. 6 mos',
      occupation: "Frontend developer",
      description: "Working at StarmeUp & at a design system used in Globant\'s suite of apps."
  
    },
  ],
  portfolio: [
    {
      image: "/images/app.png",
      description: "Iron Pal workout log",
      url: "https://landing.ironpal.co/"
    },
    {
      image: "/images/blog.jpeg",
      description: "Iron Pal blog",
      url: "https://ironpal.co/"
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: "https://twitter.com/victordev0",
    linkedin: "https://www.linkedin.com/in/victor-abeledo-aa5050ba",
    github: "https://github.com/abeledovictor",
    email: "abeledovictor@gmail.com"
  },
  siteUrl: 'https://abeledovictor.github.io',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'G-11XJRPQW5D',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}