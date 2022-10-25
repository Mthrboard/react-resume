/**
 * Returns a styled div containing contact info
 * @param {Object} contactInfo - An object containing contact info
 * @returns A React component
 */

const Contact = ({contactInfo}) => {
  return (
    <div className="font-sans">
        <address className="not-italic text-s">{contactInfo.streetAddress}<br />{contactInfo.city} {contactInfo.state}, {contactInfo.zip}</address>
        <span className="font-bold">{contactInfo.phone}</span>
      <p className="mb-4 font-bold"><a href="mailto:{contactInfo.email}" target="_new" className="underline text-blue-500">{contactInfo.email}</a></p>
      <p className="mb-4 font-serif font-bold"><a href="{contactInfo.githubLink}" target="_new">{contactInfo.githubLink.replace("https://","")}</a></p>
      <p className="mb-8 font-serif font-bold"><a href="{contactInfo.linkedInLink}" target="_new">{contactInfo.linkedInLink.replace("https://www.","")}</a></p>
    </div>
  )
}

export default Contact
