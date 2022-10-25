/**
 * Returns a styled section with job experience for every job
 * @param {Object} jobs - An object containing job info
 * @returns A React component
 */

const Experience = ({jobs}) => {
  return (
    <section className="font-serif">
      <h4 className="sectionHeader">Work Experience</h4>
      {jobs.map((job,jobIndex) => {
          return (
            <div key={`job-${jobIndex}`}>
              <Job job={job} />
              {job.projects ? <div className="uppercase text-base font-sans font-semibold text-gray-600 mb-1">Recent Projects</div> : ''}
              {job.projects?.map((project,projectIndex) => {
                return (
                  <Project key={`project-${projectIndex}`} project={project} />
                )
              })}
            </div>
          )
      })
      }
    </section>
  )
}

export default Experience
