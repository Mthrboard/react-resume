/**
 * Returns a styled paragraph for a single project
 * @param {Object} project - An object with info about a single project
 * @returns A React component
 */

const Project = ({project}) => {
  return (
    <p className="mb-6">
      <span className="font-semibold text-gray-600">{project.projectName} ({project.projectStack})</span>&nbsp;&ndash;&nbsp;
      {project.projectDetails}
    </p>
  )
}

export default Project
