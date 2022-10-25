import Header from "./Header"
import Summary from "./Summary"
import Experience from "./Experience"

/**
 * Returns a styled Main component with nested Header, Summary, and Experience
 * components
 * @param {Object} resumeInfo - An object containing all resume info
 * @returns a React component
 */

const Main = ({resumeInfo}) => {
  return (
    <main className="basis-128 ml-8 mr-12" aria-label="Main">
      <Header contactInfo={resumeInfo.contactInfo} />
      <h4 className="sectionHeader">Summary</h4>
      <Summary bio={resumeInfo.contactInfo.bio} />
      <h4 className="sectionHeader">Work Experience</h4>
      <Experience jobs={resumeInfo.jobs} />
    </main>
  )
}

export default Main
