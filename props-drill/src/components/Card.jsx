import React from 'react'

const card = (props) => {

  console.log(props.company)


  return (
    <div className="card">
      {/* TOP */}
      <div className="top">
        <img
          src={props.brandLogo}
          alt="avatar"
        />
        <button>Save</button>
      </div>

      {/* CENTER */}
      <div className="center">
        <h3>
          {props.company} <span>5 days ago</span>
        </h3>

        <h2>{props.post}</h2>

        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>Kathmandu, Nepal</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default card
