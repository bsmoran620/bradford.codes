import Card from "react-bootstrap/Card";
import React from "react";

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
        { x: '2020-01', y: 4.5 }
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
        { x: '2020-01', y: 5 }
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
        { x: '2013-06', y: 1.1 }
      ],
      color: '#ffc107'
    },
    {
      id: 'Objective C (IOS)',
      data: [
        { x: '2013-01', y: 1 },
        { x: '2013-06', y: 1.25 }
      ],
      color: '#dc3545'
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
        { x: '2020-01', y: 4.0 }
      ],
      color: '#17a2b8'
    } // TODO: Scala??
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
        { x: '2020-01', y: 4.5 }
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
        { x: '2020-01', y: 5 }
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
        { x: '2020-01', y: 5 }
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
      id: 'Jasmine',
      data: [{ x: '2015-06', y: 2 }],
      color: '#17a2b8'
    },
    {
      id: 'XML/XSD',
      data: [
        { x: '2018-06', y: 3 },
        { x: '2019-01', y: 3.5 }
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
        { x: '2020-01', y: 4.25 }
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
        { x: '2020-01', y: 4.0 }
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
        { x: '2020-01', y: 5.0 }
      ],
      color: '#4295ba'
    },
    {
      id: 'AWS Services (S3, Lambda)',
      data: [
        { x: '2018-06', y: 1.0 },
        { x: '2019-01', y: 1.25 },
        { x: '2019-06', y: 1.5 },
        { x: '2020-01', y: 1.75 }
      ],
      color: '#2f3187'
    },
    {
      id: 'Docker',
      data: [
        { x: '2020-01', y: 1.0 }
      ],
      color: '#bb2501'
    }
  ];
};

export const getProjects = () => {
    // unique exp: jira admin, scrum master certs,
    // Scrum master training: Completed two Scrum Master certification courses
    //         from Scrum Alliance and Daily Agile. Then lead the Scrum process integration of the team and
    //          how it worked with other processes in the company like performance reviews...etc
    // todo: skill name and link? Make these tags (badges)
  return [
    {
      company: 'TODO',
      title: 'Issue Management Rewrite',
      subtitle: '',
      description: `<p>Rewrite of the core module of Pinnacle 21 Enterprise to move toward a Jira
        like issue management system. Because of the complexity of the new functionality introduced
        we migrated this piece of the UI to React/Redux. The main screen, a complex three 
        panel synchronized view, was built using <a href="https://split.js.org">Split.js</a>. 
        Originally planned in CSS Grid, was completed using Flexbox to support IE 11. 
        Our services communicated with the backend via <a href="https://github.com/axios/axios">Axios</a>
        which greatly reduced the boilerplate of our http requests. The Backend API was completely 
        redesigned and simplified. This was my first time leading a major production React/Redux project.
        Some of the biggest challenges we faced were CSS (TODO).</p><br/><p>Investigate websockets 
        but end up using local storage for cross tab synchronization</p>`,
      start: '',
      end: '',
      skills: 'Webpack, Node.js, npm, React/Redux, Java, Play Framework, CSS Grid, Flexbox, ' +
          'SplitJS, AtlasKit, Jest/Enzyme, React Bootstrap, Lodash, Moment, Highcharts, Axios, Babel'
    },
    {
      company: 'TODO',
      title: 'Community Rewrite',
      subtitle: 'Open Source Desktop Application to Electron with React',
      description: `<p>Rewrite open source desktop app into Electron and React. I mostly oversaw
          this project, but had to jump in due to time constraints. My major
          contributions include setting up multiple CircleCI builds with cascading
          builds as well as writing a custom .bat uninstall script. I did get to spend
          some time working with React and Electron, specifically the <a
          href="https://www.electron.build"> Electron Builder</a>library which enabled
          us to auto-update our clients installations. We also heavily leveraged AWS
          services for this project including S3, Lambda, and Cognito.</p>`,
      start: '',
      end: '',
      skills: 'TODO'
    },
    {
      company: 'TODO',
      title: 'Self Service Data Fitness',
      subtitle: 'Dynamic UI built by json config file',
      description: `TODO: See architecture write up (personalization vs customization)<p>: Led 
        the core project of 2018 to build an enhanced reporting suite to improve usability of 
        the system for FDA reviewers. This required a well-organized back end mostly from 
        scratch that takes a personalized internal configuration file and dynamically generates 
        a suite of reports. We also re-organized the feel of our UI during this project. 
        The structural design of this project will be used re-used in upcoming projects.</p>`,
      start: '',
      end: '',
      skills: 'TODO'
    },   // Reviewers Guide in word prototype? // Under the Hills site?
    {
      company: 'TODO',
      title: 'Define.xml Tool',
      subtitle: '',
      description: `<p>Define.xml Tool: Inherited the leadership of this massive project and 
        was responsible for core features such as metadata extraction, merging, and history.
        As the team lead I was in charge of meeting timelines and filling in gaps across the 
        module as needed.</p>`,
      start: '',
      end: '',
      skills: 'TODO'
    },
    {
      company: 'TODO',
      title: 'Time Zone Feature',
      subtitle: '',
      description: `<p>Time Zone: Small feature added to allow users to set and adjust their time zone 
        that impacted the reporting of dates and times across the system.</p>`,
      start: '',
      end: '',
      skills: 'TODO'
    },
    {
      company: 'TODO',
      title: 'License Agreement',
      subtitle: '',
      description: `<p>License Agreement: Custom feature that required a wide understanding of our 
        existing system.</p>`,
      start: '',
      end: '',
      skills: 'TODO'
    },
    {
      title: 'Custom Adapters',
      description: `<p>Custom Adapters: Organized and built custom adapters for several clients 
        to help integrate their internal processes with Pinnacle 21 Enterprise. This required a deep dive 
        into understanding the metadata management process and associated standards.</p>`,
      timeFrame: '6 months (part time)',
      outCome: 'Still open for public review here: https://www.phusewiki.org/wiki/index.php?title=Data_Reviewer%27s_Guide_in_XML',
      skills: ['Domain Knowledge', 'XML', 'XSD']
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
      skills: ['Java', 'JavaScript', 'SQL', 'jQuery', 'Play Framework', 'PostgreSQL', 'MongoDB', "JUNIT", 'Apache POI', 'Microsoft Word', 'XML']
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
      skills: ['Java', 'JavaScript', 'SQL', 'jQuery', 'Play Framework', 'PostgreSQL', 'MongoDB', "JUNIT", 'Apache POI']
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
      skills: ['Java', 'Play Framework', 'JUNIT', 'MongoDB', 'PostgreSQL', 'OOP']
    },
    {
      title: 'Semantic Web Research',
      description: `<p>Research project into the feasibility of leveraging semantic web 
        technologies to model Clinical Data Standards. Specifically investigated the Apache Jena API.</p>`,
      timeFrame: '6 months (part-time)',
      outCome: 'Still in Production over 6 years with minor maintenance and new reports added every year.',
      skills: ['Apache Jena', 'TDB', 'SPARQL', 'Semantic Web']
    }
  ];
};