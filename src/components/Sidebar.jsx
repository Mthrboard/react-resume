import Contact from "./Contact"
import Skills from "./Skills"
import Education from "./Education"

/**
 * Returns a styled Sidebar component with nested Contact, Skills and Education
 * components
 * @param {Object} resumeInfo - An object containing all resume info
 * @returns A React component
 */

const Sidebar = ({resumeInfo}) => {
  return (
    <div className="basis-32" aria-label="Sidebar">
      <Contact contactInfo={resumeInfo.contactInfo} />
      <h4 className="sectionHeader">Skills</h4>
      <Skills skills={resumeInfo.skills} />
      <h4 className="sectionHeader">Education</h4>
      <Education education={resumeInfo.education} />
    </div>
  )
}

export default Sidebar
