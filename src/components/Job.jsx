/**
 * Returns a styled component for a single job
 * @param {Object} job - An object containing info for a single job
 * @returns A React component
 */

const Job = ({job}) => {
  return (
    <>
      <p className="mb-1"><span className="font-bold font-sans">{job.companyName},</span>&nbsp;
      {job.location}&nbsp;&mdash;&nbsp;
      <span className="italic font-serif">{job.title}</span></p>
      <p className="text-xs font-sans mb-2">{job.duration}</p>
      <ul className="bulletList mb-6">{job.accomplishments.map((accomplishment, index) => <li key={`accomplishment-${index}`}>{accomplishment}</li>)}</ul>
    </>
  )
}

export default Job
