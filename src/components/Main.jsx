import Header from "./Header"
import Summary from "./Summary"
import Experience from "./Experience"

/**
 * Returns a styled Main component with nested Header, Summary, and Experience
 * components
 * @param {Object} resumeInfo - An object containing all resume info
 * @returns a styled component
 */

const Main = ({resumeInfo}) => {
  return (
    <main className="basis-128 ml-8 mr-12" aria-label="Main">
      <Header contactInfo={resumeInfo.contactInfo} />
      <Summary bio={resumeInfo.contactInfo.bio} />
      <Experience jobs={resumeInfo.jobs} />
    </main>
  )
}

export default Main
