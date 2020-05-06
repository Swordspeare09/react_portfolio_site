import React from "react";


function ProjectCard(props) {

  return (
    <div className="col-lg-4 col-md-5 col-xs-6 mb-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a
            type="button"
            className="btn btn-outline-info code-button"
            href={props.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            Check Out The Code
          </a>
          <a
            type="button"
            className="btn btn-outline-dark"
            href={props.site}
            target="_blank"
            rel="noreferrer noopener"
          >
            See it Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;