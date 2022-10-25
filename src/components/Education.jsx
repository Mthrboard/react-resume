/**
 * Returns a styled section containing education info
 * @param {Object} education - An object containing education info
 * @returns A react component
 */

const Education = ({education}) => {
  return (
    <div className="font-serif">
      <div className="font-bold mb-4">{education.schoolName}</div>
      <div className="mb-4">{education.duration}</div>
      <div className="mb-4"><span className="font-bold">Major:</span> {education.major}</div>
    </div>
  )
}

export default Education
