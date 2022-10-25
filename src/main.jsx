import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

const resumeInfo = {
  contactInfo: {
    firstName: "Chad",
    lastName: "Hjelle",
    fullName: function() { return `${this.firstName} ${this.lastName}`},
    jobTitle: "Fullstack Software Engineer",
    streetAddress: "20944 Black Cherry Dr",
    city: "Richmond",
    state: "MN",
    zip: "56368",
    phone: "320-252-5937",
    email: "chadhjelle@gmail.com",
    githubLink: "https://github.com/Mthrboard",
    linkedInLink: "https://www.linkedin.com/in/chadhjelle/",
    bio: "Creative, detail-oriented, software engineer with a passion for \
    databases. Looking to bring my skills to a tech company with a global reach.",
  },
  skills: ["HTML","CSS","JavaScript","React / React Native","Node","MongoDB",
            "SQL","OOP","Git / GitHub"],
  jobs: [{
    companyName: "100Devs",
    location: "Los Angeles, CA",
    title: "Software Engineer",
    duration: "January 2022 - Present",
    accomplishments: [
      "Collaborated with a team of developers to build modern and responsive \
      web applications using best practices",
      "Built semantically structured full-stack web applications",
      "Applied agile methodologies like SCRUM for project management"
    ],
    projects: [{
      projectName: "Pantry Pal",
      projectStack: "Fullstack Web App",
      projectDetails: "Users can track food items in their pantry, cupboards, \
      and other storage locations, storing info such as expiration date, lot \
      number, price, etc. and will be alerted when food is close to expiring."
    },{
      projectName: "Binary Upload Boom",
      projectStack: "Fullsatck Web App",
      projectDetails: "Users can log in to their profile and find their notes, \
      with replies from other users. They can add new notes, edit existing \
      notes, and delete notes and replies."
    }
    ]
    },{
      companyName: "Village Pharmacy",
      location: "Sauk Rapids, MN",
      title: "Software Support",
      duration: "January 2018 - May 2022",
      accomplishments: [
        "Created several automations to increase the efficiency of mailing out \
        prescriptions to patients and scanning paper records into the pharmacy \
        management software",
        "Built a web portal to track mail out prescriptions for audit purposes"
      ]
    },{
      companyName: "RITE Enterprises, Inc",
      location: "Sartell, MN",
      title: "Tech Support Analys",
      duration: "July 2016 - January 2018",
      accomplishments: [
        "Created several custom SQL queries and reports for various clients",
        "Assisted with the customization of software products to accommodate \
        specific client requests"
      ]
    }
  ],
  education: {
    schoolName: "North Hennepin Community College",
    duration: "2014-2016",
    major: "Computer Science"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App resumeInfo={resumeInfo} />
  </React.StrictMode>
)
