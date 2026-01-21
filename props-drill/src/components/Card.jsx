import React from 'react'

const card = (props) => {

  console.log(props.company)


  return (
    <div className="card">
      {/* TOP */}
      <div className="top">
        <img
          src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg"
          alt="avatar"
        />
        <button>Save</button>
      </div>

      {/* CENTER */}
      <div className="center">
        <h3>
          {props.company} <span>5 days ago</span>
        </h3>

        <h2>Senior UI/UX Designer</h2>

        <div className="tag">
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Kathmandu, Nepal</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default card
