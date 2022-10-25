/**
 * Returns a styled header component with full name and job title info
 * @param {Object} contactInfo - Object containing name and job title
 * @returns
 */

const Header = ({contactInfo}) => {
  return (
    <header className="mb-8">
      <h1 className="font-serif font-bold text-5xl mb-4">{contactInfo.fullName}</h1>
      <h6 className="font-sans font-medium text-xs">{contactInfo.jobTitle}</h6>
    </header>
  )
}

export default Header
