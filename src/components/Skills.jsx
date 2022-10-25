/**
 * Returns an unordered list of skills
 * @param {Object} skills - an array of skills
 * @returns A React component
 */

const Skills = ({skills}) => {
  return (
    <ul>
      {skills.map((skill, index) => <li key={`skill-${index}`} className="mb-4">{skill}</li>)}
    </ul>
  )
}

export default Skills