/** DONE: Java, C, Python, Objective C, Jena, Play, PG, Mongo
 * NOT INCLUDED: BASH, ETL, Apache POI, word API, AWS Lambda, S3
 * C, Java, Python, Objective C (ios), ML
 * May 2013 - August 2013 Semantic Web / Apache Jena                            Semantic Web Research
 * Sep 2014 - Dec 2015 Play Framework / Java                                    CDG Web forms
 * May 2014 - May 2015 Play Framework / Java / MongoDB / PostgreSQL / JUNIT             Data Profiling Reports
 * May 2015 - August 2015 Play Framework / JavaScript / Java / Jasmine                    Core Enterprise Application
 * August 2015 - May 2016 Play Framework / Java / Apache POI (heavy)            RG PROJ
 * May 2016 - August 2016 Bash Scripting / Java Script / ETL / MongoDB / PostgreSQL   Migration Script
 * 2017                                                                         Define.xml tool
 * JS ^
 * RG in Word Prototype: JS / Word API
 * XML/XSD                                                                      RG XML Project
 * Jenkins
 * 2018 CoreDF Project: Java (heavy), JavaScript (light)
 * CircleCI
 * Q4 2018-end Q1 2019: Electron, JS, React/Redux, CircleCI, AWS Lambda, Java, S3,        Community
 * Q2-Q4 Issue Management Rewrite: React/Redux, JS, PostgreSQL, Play Framework, Jest
 * Git
 */

//    TODO: Tool Preferences: macOS, IntelliJ IDEA, Jira (Atlassian), Git (GitHub or Bitbucket), Postman, Virtual Box, Slack
    // TODO: Patterns: Adapter/ServiceLoader, Event Sourcing, Customization vs Personalization … other?

export const getUniqueExperiences = () => {
  return [
    `Experienced a startup grow from the beginning to acquisition at $310 Million`,
    `First developer to join PowerPay full time (sole-developer for awhile).`,
    `Represented the Pinnacle21 Engineering on the company Leadership Team. Consulting from <a href="https://www.tablegroup.com/">Patrick Lencioni's Table Group</a>`,
    `Merge Owner of entire code bases (50+ repositories)`,
    `Created interview processes and interviewed 100's of candidates`,
    `Designed and documented major pieces of Engineering processes and Software Development Lifecycle`,
    `Scrum Master (Certified Twice). Designed and rolled out SCRUM process for organization with a focus on continuous improvement`,
    `Project Management and client facing in many projects`,
    `Engineering Management experience such as one-on-one meetings and setting OKR's at department and individual level`,
    `GitHub, AWS, CircleCI, and Jira Administration`,
    `HealthCare and FinTech Compliant SDLC Audits (preparation and participation)`
  ]
};

export const getLanguages = () => {
  return [
    {
      id: 'Java',
      data: [
        { x: '2013-01', y: 1 },
        { x: '2013-06', y: 1 },
        { x: '2014-01', y: 1 },
        { x: '2014-06', y: 2 },
        { x: '2015-01', y: 2 },
        { x: '2015-06', y: 3 },
        { x: '2016-01', y: 3 },
        { x: '2016-06', y: 3 },
        { x: '2017-01', y: 4 },
        { x: '2017-06', y: 4 },
        { x: '2018-01', y: 5 },
        { x: '2018-06', y: 5 },
        { x: '2019-01', y: 4.5 },
        { x: '2019-06', y: 4.5 },
        { x: '2020-01', y: 4.5 },
        { x: '2020-06', y: 4.5 },
        { x: '2021-01', y: 4.0 },
        { x: '2021-06', y: 3.5 },
      ],
      color: '#007bff'
    },
    {
      id: 'JavaScript',
      data: [
        { x: '2015-01', y: 1 },
        { x: '2015-06', y: 2 },
        { x: '2016-01', y: 3 },
        { x: '2016-06', y: 3 },
        { x: '2017-01', y: 3 },
        { x: '2017-06', y: 4 },
        { x: '2018-01', y: 3 },
        { x: '2018-06', y: 3 },
        { x: '2019-01', y: 4 },
        { x: '2019-06', y: 5 },
        { x: '2020-01', y: 5 },
        { x: '2020-01', y: 5 },
        { x: '2020-06', y: 5 },
        { x: '2021-01', y: 5 },
        { x: '2021-06', y: 5 },
      ],
      color: '#868e96'
    },
    {
      id: 'C',
      data: [
        { x: '2013-01', y: 1 },
        { x: '2013-06', y: 1.5 }
      ],
      color: '#28a745'
    },
    {
      id: 'Python',
      data: [
        { x: '2013-01', y: 1 },
        { x: '2013-06', y: 1.1 },
        { x: '2019-01', y: null },
        { x: '2019-06', y: 1.5 },
        { x: '2020-01', y: 2.0 },
        { x: '2020-06', y: 2.5 },
        { x: '2021-01', y: 3.0 },
        { x: '2021-06', y: 3.0 },
      ],
      color: '#ffc107'
    },
    {
      id: 'Objective C (IOS)',
      data: [
        { x: '2013-01', y: 1 },
        { x: '2013-06', y: 1.25 }
      ],
      color: '#eda4e3'
    },
    {
      id: 'SQL',
      data: [
        { x: '2014-06', y: 1 },
        { x: '2015-01', y: 1.5 },
        { x: '2015-06', y: 2 },
        { x: '2016-01', y: 2 },
        { x: '2016-06', y: 2.5 },
        { x: '2017-01', y: 3 },
        { x: '2017-06', y: 3 },
        { x: '2018-01', y: 4 },
        { x: '2018-06', y: 4 },
        { x: '2019-01', y: 4.5 },
        { x: '2019-06', y: 4.0 },
        { x: '2020-01', y: 4.0 },
        { x: '2020-06', y: 4.0 },
        { x: '2021-01', y: 4.0 },
        { x: '2021-06', y: 4.5 },
      ],
      color: '#17a2b8'
    },
    {
      id: 'Ruby',
      data: [
        { x: '2021-01', y: 0.5 },
        { x: '2021-06', y: 1.0 }
      ],
      color: '#dc3545'
    }, // TODO: Scala??
  ];
};

export const getSkills = () => {
  return [
    {
      id: 'React/Redux',
      data: [
        { x: '2018-01', y: 1 },
        { x: '2018-06', y: 2 },
        { x: '2019-01', y: 4 },
        { x: '2019-06', y: 4.5 },
        { x: '2020-01', y: 4.5 },
        { x: '2020-06', y: 4.5 },
        { x: '2021-01', y: 5 },
        { x: '2021-06', y: 5 }
      ],
      color: '#007bff'
    },
    {
      id: 'Apache Jena (Semantic Web)',
      data: [
        { x: '2013-06', y: 1.5 },
        { x: '2014-01', y: 2 },
        { x: '2014-06', y: 2.25 }
      ],
      color: '#868e96'
    },
    {
      id: 'Play Framework',
      data: [
        { x: '2014-06', y: 1 },
        { x: '2015-01', y: 2 },
        { x: '2015-06', y: 3 },
        { x: '2016-01', y: 3 },
        { x: '2016-06', y: 4 },
        { x: '2017-01', y: 4 },
        { x: '2017-06', y: 5 },
        { x: '2018-01', y: 5 },
        { x: '2018-06', y: 5 },
        { x: '2019-01', y: 5 },
        { x: '2019-06', y: 5 },
        { x: '2020-01', y: 5 },
        { x: '2020-06', y: 4 }
      ],
      color: '#28a745'
    },
    {
      id: 'PostgreSQL',
      data: [
        { x: '2014-06', y: 1 },
        { x: '2015-01', y: 2 },
        { x: '2015-06', y: 3 },
        { x: '2016-01', y: 3 },
        { x: '2016-06', y: 3 },
        { x: '2017-01', y: 4 },
        { x: '2017-06', y: 4 },
        { x: '2018-01', y: 5 },
        { x: '2018-06', y: 5 },
        { x: '2019-01', y: 5 },
        { x: '2019-06', y: 5 },
        { x: '2020-01', y: 5 },
        { x: '2020-06', y: 5 },
        { x: '2021-01', y: 5 },
        { x: '2021-06', y: 5 }
      ],
      color: '#ffc107'
    },
    {
      id: 'MongoDB',
      data: [
        { x: '2014-06', y: 1 },
        { x: '2015-01', y: 2 },
        { x: '2015-06', y: 2 },
        { x: '2016-01', y: 3 },
        { x: '2016-06', y: 2 },
        { x: '2017-01', y: 2.5}
      ],
      color: '#dc3545'
    },
    {
      id: 'JUNIT',
      data: [
        { x: '2014-06', y: 2 },
        { x: '2015-01', y: 2 },
        { x: '2015-06', y: 2 },
        { x: '2016-01', y: 3 },
        { x: '2016-06', y: 3 },
        { x: '2017-01', y: 3 },
        { x: '2017-06', y: 3 },
        { x: '2018-01', y: 3 },
        { x: '2018-06', y: 3 },
        { x: '2019-01', y: 3 },
        { x: '2019-06', y: 3 },
        { x: '2020-01', y: 3 }
      ],
      color: '#5c2aa4'
    },
    {
      id: 'XML/XSD',
      data: [
        { x: '2018-06', y: 3 },
        { x: '2019-01', y: 3.5 },
        { x: '2020-01', y: 4 },
        { x: '2020-06', y: 4 },
        { x: '2021-01', y: 4.5 },
        { x: '2021-06', y: 4.5 }
      ],
      color: '#38d78a'
    },
    {
      id: 'Electron',
      data: [
        { x: '2019-01', y: 3 },
        { x: '2019-06', y: 3.25 }
      ],
      color: '#885468'
    },
    {
      id: 'Jest',
      data: [
        { x: '2019-01', y: 2 },
        { x: '2019-06', y: 2 },
        { x: '2020-01', y: 2.5 }
      ],
      color: '#38d78a'
    },
    {
      id: 'Bash (Scripting)',
      data: [
        { x: '2013-01', y: 1.0 },
        { x: '2013-06', y: 1.0 },
        { x: '2014-01', y: 1.5 },
        { x: '2014-06', y: 1.75 },
        { x: '2015-01', y: 2.0 },
        { x: '2015-06', y: 2.25 },
        { x: '2016-01', y: 2.5 },
        { x: '2016-06', y: 2.75 },
        { x: '2017-01', y: 3.0 },
        { x: '2017-06', y: 3.25 },
        { x: '2018-01', y: 3.5 },
        { x: '2018-06', y: 3.75 },
        { x: '2019-01', y: 4.0 },
        { x: '2019-06', y: 4.25 },
        { x: '2020-01', y: 4.25 },
        { x: '2020-06', y: 4 },
        { x: '2021-01', y: 4 },
        { x: '2021-06', y: 4 }
      ],
      color: '#f2945b'
    },
    {
      id: 'Jenkins',
      data: [
        { x: '2015-01', y: 1.0 },
        { x: '2015-06', y: 1.5 },
        { x: '2016-01', y: 1.5 },
        { x: '2016-06', y: 1.75 },
        { x: '2017-01', y: 2.0 },
        { x: '2017-06', y: 3.0 },
        { x: '2018-01', y: 3.0 },
        { x: '2018-06', y: 3.0 }
      ],
      color: '#ab1d7a'
    },
    {
      id: 'CircleCI',
      data: [
        { x: '2018-06', y: 1.0 },
        { x: '2019-01', y: 2.0 },
        { x: '2019-06', y: 3.0 },
        { x: '2020-01', y: 4.0 },
        { x: '2020-06', y: 4 },
        { x: '2021-01', y: 4.1 },
        { x: '2021-06', y: 4.1 }
      ],
      color: '#eda4e3'
    },
    {
      id: 'Git',
      data: [
        { x: '2013-01', y: 1.0 },
        { x: '2013-06', y: 1.0 },
        { x: '2014-01', y: 1.5 },
        { x: '2014-06', y: 1.5 },
        { x: '2015-01', y: 2.0 },
        { x: '2015-06', y: 2.0 },
        { x: '2016-01', y: 2.5 },
        { x: '2016-06', y: 3.0 },
        { x: '2017-01', y: 3.0 },
        { x: '2017-06', y: 4.0 },
        { x: '2018-01', y: 4.5 },
        { x: '2018-06', y: 4.5 },
        { x: '2019-01', y: 5.0 },
        { x: '2019-06', y: 5.0 },
        { x: '2020-01', y: 5.0 },
        { x: '2020-06', y: 4.9 },
        { x: '2021-01', y: 4.9 },
        { x: '2021-06', y: 4.9 }
      ],
      color: '#4295ba'
    },
    {
      id: 'Docker',
      data: [
        { x: '2020-01', y: 1.0 },
        { x: '2020-06', y: 1.5 },
        { x: '2021-01', y: 2.0 },
        { x: '2021-06', y: 2.0 }
      ],
      color: '#bb2501'
    }
  ];
};

export const getAWSSkills = () => {
  return [
    {
      id: 'Lambda/AWS Gateway',
      data: [
        { x: '2018-01', y: 0.5 },
        { x: '2018-06', y: 0.75 },
        { x: '2019-01', y: 1 },
        { x: '2019-06', y: 1.25 },
        { x: '2020-01', y: 2 },
        { x: '2020-06', y: 3 },
        { x: '2021-01', y: 4 },
        { x: '2021-06', y: 4 },
      ],
      color: '#007bff'
    },
    {
      id: 'EC2/ECS/Elastic Bean Stalk',
      data: [
        { x: '2016-01', y: 0.5 },
        { x: '2016-06', y: 1 },
        { x: '2017-01', y: 1 },
        { x: '2017-06', y: 1 },
        { x: '2018-01', y: 1.5 },
        { x: '2018-06', y: 1.5 },
        { x: '2019-01', y: 2 },
        { x: '2019-06', y: 2.5 },
        { x: '2020-01', y: 3 },
        { x: '2020-06', y: 3.5 },
        { x: '2021-01', y: 4 },
        { x: '2021-06', y: 4.5 },
      ],
      color: '#868e96'
    },
    {
      id: 'RDS',
      data: [
        { x: '2018-01', y: 0.5 },
        { x: '2018-06', y: 1.0 },
        { x: '2019-01', y: 1.0 },
        { x: '2019-06', y: 1.0 },
        { x: '2020-01', y: 2 },
        { x: '2020-06', y: 3 },
        { x: '2021-01', y: 3 },
        { x: '2021-06', y: 3.5 },
      ],
      color: '#28a745'
    },
    {
      id: 'Cognito',
      data: [
        { x: '2020-01', y: 1 },
        { x: '2020-06', y: 2 },
        { x: '2021-01', y: 3 },
        { x: '2021-06', y: 3 },
      ],
      color: '#ffc107'
    },
    {
      id: 'RedShift',
      data: [
        { x: '2021-01', y: 1 },
        { x: '2021-06', y: 2.5 },
      ],
      color: '#dc3545'
    },
    {
      id: 'Glue',
      data: [
        { x: '2021-01', y: 1 },
        { x: '2021-06', y: 1.5 },
      ],
      color: '#5c2aa4'
    },
    {
      id: 'QuickSight',
      data: [        
        { x: '2021-01', y: 1 },
        { x: '2021-06', y: 2 },
      ],
      color: '#17a2b8'
    }
  ];
};

export const getProjects = () => {
  return [
    {
      title: 'Data Analytics Pipeline',
      description: `<p>Oversaw a Data Analytics project, although I was not actively building I learned a lot about
      AWS Glue / Apache Spark, RedShift, and related services. Helped build the data model for the data warehouse.</p>`,
      timeFrame: '2 months (part time)',
      outCome: 'Still in production.',
      skills: ['Glue', 'RedShift', 'QuickSight', 'Lambda/AWS Gateway']
    },
    {
      title: 'Address Verification Chrome Extension',
      description: `<p>Built a <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">Chrome Extension</a> to 
      facilitate address verification during the underwriting process.
       This tool leveraged the HouseCanary and Google APIs. Successfully published to the Chrome Store but the 
       extension is private access for internal users only.</p>`,
      timeFrame: '3 weeks (part time)',
      outCome: 'Still in production.',
      skills: ['JavaScript', 'Git', 'Chrome Extension', 'REST API']
    },
    {
      title: 'Google Drive Scripting',
      description: `<p>Wrote Google App Scripts to manipulate and move Google Doc files to support daily document processing.</p>`,
      timeFrame: '1 week (part time)',
      outCome: 'Still in production.',
      skills: ['JavaScript', 'Google Script']
    },
    {
      title: 'Loan Management System',
      description: `<p>Sole Developer of the internal Loan Management System. This project is used every day by 
      internal teams to track loan updates, ACH transfer millions of dollars out to contractors, and review analytics.
      Initially inherited as a small Python/Django prototype, I built the final project using a Node/Express backend, 
      a React front end, and a PostgreSQL database. I also used Amazon Web Services heavily for 
      this project including a secure VPC architecture deployed to EC2 servers, Cognito authorization 
      and user management, Simple Email Service for notifications, Route 53 for DNS lookup / forwarding, 
      and RDS for database management. This project leverages <a href="https://material-ui.com/">MaterialUI</a> 
      for clean, easy to use components.</p>`,
      timeFrame: '1 year (part time)',
      outCome: 'Still in production, on-going enhancements.',
      skills: ['React/Redux', 'JavaScript', 'CSS Grid', 'MaterialUI', 'Lodash', 'Axios', 'Node.js', 'npm', 'Webpack', 'Babel',
          'Apache POI', 'Jest/Enzyme', 'Git', 'Route 53', 'VPC', 'EC2', 'RDS', 'PostgreSQL', 'Cognito']
    },
    {
      title: 'Issue Management Rewrite',
      description: `<p>Rewrite of the core module of Pinnacle 21 Enterprise to move toward a Jira
        like issue management system. Because of the complexity of the new functionality introduced
        we migrated this piece of the UI to React/Redux. The main screen, a complex three 
        panel synchronized view, was built using <a href="https://split.js.org">Split.js</a>. 
        Originally planned in CSS Grid, was completed using Flexbox to support IE 11. 
        Our services communicated with the backend via <a href="https://github.com/axios/axios">Axios</a>
        which greatly reduced the boilerplate of our http requests. The Backend API was completely 
        redesigned and simplified. This was my first time leading a major production React/Redux project.
        Some of the biggest challenges we faced were CSS related.</p><br/><p>Investigated websockets 
        but end up using local storage for cross tab synchronization</p>`,
      timeFrame: '1 year',
      outCome: 'I left before project was complete but has since been moved to production.',
      skills: ['React/Redux', 'JavaScript', 'Java', 'Play Framework', 'CircleCI', 'CSS Grid', 'Flexbox', 'SplitJS',
          'AtlasKit', 'React Bootstrap', 'Lodash', 'Highcharts', 'Axios', 'Node.js', 'npm', 'Webpack', 'Babel',
          'Apache POI', 'Jest/Enzyme', 'Cognito', 'Git']
    },
    {
      title: 'Community Rewrite',
      subtitle: 'Open Source Desktop Application converted to Electron with React',
      description: `<p>Rewrite open source desktop app into Electron and React. I mostly oversaw
          this project, but had to jump in due to time constraints. My major
          contributions include setting up multiple CircleCI builds with cascading
          builds as well as writing a custom .bat uninstall script. I did get to spend
          some time working with React and Electron, specifically the <a
          href="https://www.electron.build"> Electron Builder</a>library which enabled
          us to auto-update our clients installations. We also heavily leveraged AWS
          services for this project including S3, Lambda, and Cognito.</p>`,
      timeFrame: '6 months',
      outCome: 'Still in production, with patches and enhancements.',
      skills: ['Electron', 'Node.js', 'React/Redux', 'Java', 'JavaScript', 'CircleCI', 'Apache POI', 'RxJava', 'Lambda/AWS Gateway', 'Cognito', 'Git']
    },
    {
      title: 'Self Service Data Fitness',
      subtitle: 'Dynamic UI built by json config file',
      description: `Led the core project of 2018 to build an enhanced reporting suite to improve usability of 
        the system for FDA reviewers. This required a well-organized back end mostly from 
        scratch that takes a personalized internal configuration file and dynamically generates 
        a suite of reports. We created a custom JSON schema with a parser that would translate each of the 
        JSON objects into executable classes using Java Reflection. The core of this project was choosing 
        a pattern of Personalization instead of Customization. In this way, our subject matter experts 
        created a personalized user experience including filtered results and localized text language based on the user.</p>`,
      timeFrame: '6 months',
      outCome: 'Still in production, planned major enhancements.',
      skills: ['Play Framework', 'Java', 'JavaScript', 'Apache POI', 'React/Redux', 'PostgreSQL', 'JUNIT', 'Jest', 'Domain Knowledge', 'Git']
    },
    {
      title: 'Define.xml Tool',
      subtitle: 'Second successful core module of the paid product',
      description: `<p>Define.xml Tool: Inherited the leadership of this massive project and 
        was responsible for core features such as metadata extraction, merging, and history.
        As the team lead I was in charge of meeting timelines and filling in gaps across the 
        module as needed. Built an excel like editor using <a href="https://handsontable.com">Handsontable</a>.</p>`,
        timeFrame: '1 year',
        outCome: 'Actively maintained and updated with new features.',
        skills: ['Play Framework', 'Java', 'JavaScript', 'Apache POI', 'Jenkins', 'JUNIT', 'Jasmine', 'PostgreSQL', 'Domain Knowledge', 'Git']
    },
    {
      title: 'Time Zones',
      description: `<p>Time Zone: Small feature added to allow users to set and adjust their time zone 
        that impacted the reporting of dates and times across the system.</p>`,
      timeFrame: '1 month (part time)',
      outCome: 'Still active. In retrospect, would discourage server side timezone formatting in favor of client side',
      skills: ['Play Framework', 'Java', 'JavaScript', 'Git']
    },
    {
      title: 'License Agreement',
      description: `<p>License Agreement: Custom feature that required a wide understanding of our 
        existing system's use of the Play Framework. Integrated into our authentication services to 
        detect users who haven't agreed to licensing based on email domain.</p>`,
      timeFrame: '3 months (part time)',
      outCome: 'Only used by a couple clients, still active',
      skills: ['Play Framework', 'Java', 'JUNIT', 'Git']
    },
    {
      title: 'Custom Adapters',
      description: `<p>Custom Adapters: Organized and built custom adapters for several clients 
        to help integrate their internal processes with Pinnacle 21 Enterprise. This required a deep dive 
        into understanding the metadata management process and associated standards. I also had to work 
        extensively with the Java Service Loader pattern.</p>`,
      timeFrame: '6 months (part time)',
      outCome: 'Still open for public review here: https://www.phusewiki.org/wiki/index.php?title=Data_Reviewer%27s_Guide_in_XML',
      skills: ['Domain Knowledge', 'XML', 'XSD', 'Git', 'Service Loader']
    },
    {
      title: 'Reviewer’s Guide in XML Project',
      description: `<p>Volunteered on an external industry team to take the Reviewer’s 
        Guide word document submitted to the FDA during clinical review 
        and translate it into an XML format that is machine readable. I directly created the XSD 
        schema file for the XML and made significant contributions to the design of the XML. 
        This will hopefully make the document easier to consume at the FDA and allow for tools 
        to be built around the XML format to improve the creation process.</p>`,
      timeFrame: '6 months (part time)',
      outCome: 'Still open for public review here: https://www.phusewiki.org/wiki/index.php?title=Data_Reviewer%27s_Guide_in_XML',
      skills: ['Domain Knowledge', 'XML', 'XSD']
    },
    {
      title: 'Database Migration',
      description: `<p>Wrote critical ETL migration scripts to move data between MongoDB 
        and PostgreSQL. This was built as a bash script that calls a suite of JavaScript 
        scripts that accessed MongoDB records, performed transformations, built SQL statements, 
        which we're then executed against the PostgreSQL database through STDOUT to load the 
        new records. This was built to be dropped as a zip file on AWS EC2 instances to perform
        production database migrations.</p>`,
      takeAway: 'My main lesson here was the importance of batching database ' +
        'writes which significantly improved time of completion (by units of hours).',
      timeFrame: '6 months (on going maintenance of production)',
      outCome: 'Still in Production over 5 years with minor maintenance',
      skills: ['SQL', 'Bash', 'JavaScript', 'PostgreSQL', 'MongoDB', 'ETL']
    },
    {
      title: 'Reviewer’s Guide Generator Tool',
      description: `<p>Created a new module to help users create Reviewer’s 
        Guide documents which are submitted with clinical data to the FDA by 
        aggregating information across our system and then generating a 
        Microsoft Word document. This project relied heavily on the 
        <a href="https://poi.apache.org">Apache POI</a> Word API to build a 
        completed document from a template file. I used a bookmarking 
        system to select pieces of the document</p>`,
      takeAway: 'I largely took this project from research, through requirements, ' +
          'brainstorming, implementation, and delivery. This was my first project ' +
          'where I was exposed to this full process and the joy that comes with ' +
          'leading an idea through to a successful product.',
      timeFrame: '6 months',
      outCome: 'Still in Production over 5 years with minor maintenance. Considered for tool enhancements.',
      skills: ['Java', 'JavaScript', 'SQL', 'jQuery', 'Play Framework', 'PostgreSQL', 'MongoDB', "JUNIT", 'Apache POI', 'Microsoft Word', 'XML', 'Git']
    },
    {
      title: 'Core Enterprise Product',
      description: `<p>Wrote the first implementations of many vital 
        pieces of our core, paid product including: Issue Filters,  
        Validation / Task Logs, Score Calculation, Metrics Collection, 
        and many reporting screens. Relied on <a href="https://poi.apache.org">Apache POI</a> 
        for Excel Import/Export processes.</p>`,
      takeAway: 'My main take away from this project is the balancing act of ' +
          'requirements with speed. We moved very quickly as a small team, with ' +
          'direction directly from founding team, but we were making decisions ' +
          'quickly without considering the implications on maintenance years in the future.',
      timeFrame: '1.5 years (part-time, across several releases)',
      outCome: 'Still in Production over 5 years. Rewrote front end in react in 2019/2020.',
      skills: ['Java', 'JavaScript', 'SQL', 'jQuery', 'Play Framework', 'PostgreSQL', 'MongoDB', "JUNIT", 'Apache POI', 'Git']
    },
    {
      title: 'Analytics',
      description: `<p>Set up Google Analytics to collect metrics.</p>`,
      timeFrame: '3 months (part-time)',
      outCome: 'Still Live, but replaced Analytics vendor in 2019 with App Rewrite.',
      skills: ['Google Analytics', 'JavaScript']
    },
    {
      title: 'Data Profiling Reports',
      description: `<p>Built a suite of data extraction tools to enhance reporting. 
        This is maintained as its own internal library, built and distributed through maven.
        Originally extracted to MongoDB. Once PostgreSQL added support for JSON values, 
        we migrated these records to PostgreSQL so we only rely on one database.</p>`,
      takeAway: 'My main lesson here was just an understanding of Java and ' +
          'Play Framework as this was my first major production Java library',
      timeFrame: '1 year to production (On going expansion)',
      outCome: 'Project discontinued as the technology was too young and it wasn\'t right for our use case',
      skills: ['Java', 'Play Framework', 'JUNIT', 'MongoDB', 'PostgreSQL', 'OOP', 'Git']
    },
    {
      title: 'Semantic Web Research',
      description: `<p>Research project into the feasibility of leveraging semantic web 
        technologies to model Clinical Data Standards. Specifically investigated the Apache Jena API.</p>`,
      timeFrame: '6 months (part-time)',
      outCome: 'Still in Production over 6 years with minor maintenance and new reports added every year.',
      skills: ['Apache Jena (Semantic Web)', 'TDB', 'SPARQL', 'Semantic Web']
    }
  ];
};

export const getOtherSkills = () => {
  return [
    {
      id: 'TDB',
      color: '#141e65'
    },
    {
      id: 'SPARQL',
      color: '#fa74fc'
    },
    {
      id: 'Semantic Web',
      color: '#f8ee3a'
    },
    {
      id: 'OOP',
      color: '#bfb3e5'
    },
    {
      id: 'Google Analytics',
      color: '#703d74'
    },
    {
      id: 'Apache POI',
      color: '#e38740'
    },
    {
      id: 'jQuery',
      color: '#ace0f9'
    },
    {
      id: 'XML',
      color: '#ec20b4'
    },
    {
      id: 'Microsoft Word',
      color: '#26a3ac'
    },
    {
      id: 'ETL',
      color: '#7b41ef'
    },
    {
      id: 'Bash',
      color: '#c3f3c5'
    },
    {
      id: 'XSD',
      color: '#7f031d'
    },
    {
      id: 'Domain Knowledge',
      color: '#2b8a26'
    },
    {
      id: 'Service Loader',
      color: '#796780'
    },
    {
      id: 'Node.js',
      color: '#82b42b'
    },
    {
      id: 'RxJava',
      color: '#607057'
    },
    {
      id: 'Cognito',
      color: '#1831fe'
    },
    {
      id: 'CSS Grid',
      color: '#4e9789'
    },
    {
      id: 'Flexbox',
      color: '#c23d8b'
    },
    {
      id: 'SplitJS',
      color: '#dd140b'
    },
    {
      id: 'AtlasKit',
      color: '#ffaabb'
    },
    {
      id: 'React Bootstrap',
      color: '#b45aff'
    },
    {
      id: 'Lodash',
      color: '#707b94'
    },
    {
      id: 'Highcharts',
      color: '#97e11b'
    },
    {
      id: 'Axios',
      color: '#381ea6'
    },
    {
      id: 'npm',
      color: '#16b5ad'
    },
    {
      id: 'Webpack',
      color: '#fea689'
    },
    {
      id: 'AtlasKit',
      color: '#07138c'
    },
    {
      id: 'Babel',
      color: '#813d98'
    },
    {
      id: 'Jest/Enzyme',
      color: '#ddbaf9'
    },
    {
      id: 'Route 53',
      color: '#607057'
    },
    {
      id: 'VPC',
      color: '#1831fe'
    },
    {
      id: 'EC2',
      color: '#4e9789'
    },
    {
      id: 'RDS',
      color: '#82b42b'
    },
    {
      id: 'Chrome Extension',
      color: '#bfb3e5'
    },
    {
      id: 'Glue',
      color: '#885468'
    },
    {
      id: 'RedShift',
      color: '#dc3545'
    },
    {
      id: 'QuickSight',
      color: '#17a2b8'
    },
    {
      id: 'Lambda/AWS Gateway',
      color: '#007bff'
    },
    {
      id: 'Google Script',
      color: '#703d74'
    }
  ]
};