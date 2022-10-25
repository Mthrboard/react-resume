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
      <Skills skills={resumeInfo.skills} />
      <Education education={resumeInfo.education} />
    </div>
  )
}

export default Sidebar
