import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectCard from "../items/ProjectCard";

const projects1 = [
  {
    name: "ZaLat Pizza Prototype",
    description:
      "This collaborative work was engineered to show the use of SQL and React.js knowledge.",
    github: "https://github.com/Swordspeare09/project3",
    site: "https://pizza-app-p3.herokuapp.com/"
  },
  {
    name: "React-ive Reading List",
    description:
      "A MERN application that allows users to create a a reading list for to share with others.",
    github: "https://github.com/Swordspeare09/React-iveReadingList",
    site: "https://afternoon-depths-78435.herokuapp.com/"
  },
  {
    name: "Employee Directory",
    description:
      "Built with React.js, this application simulates the organization of an employee catalog.",
    github: "https://github.com/Swordspeare09/user-directory",
    site: "https://swordspeare09.github.io/user-directory/"
  },
  {
    name: "Portfolio v2",
    description: "My personal online resume ",
    github: "https://github.com/Swordspeare09/project3",
    site: "https://www.google.com/"
  },
];

const projects2 = [
  {
    name: "ZaLat Pizza Prototype",
    description:
      "This collaborative work was engineered to show the use of SQL and React.js knowledge.",
    github: "https://github.com/Swordspeare09/project3",
    site: "https://pizza-app-p3.herokuapp.com/",
  },
  {
    name: "React-ive Reading List",
    description:
      "A MERN application that allows users to create a a reading list for to share with others.",
    github: "https://github.com/Swordspeare09/project3",
    site: "https://pizza-app-p3.herokuapp.com/",
  },
  {
    name: "Employee Directory",
    description:
      "Built with React.js, this application simulates the organization of an employee catalog ",
    github: "https://github.com/Swordspeare09/project3",
    site: "https://pizza-app-p3.herokuapp.com/",
  },
  {
    name: "Portfolio v2",
    description: "My personal online resume ",
    github: "https://github.com/Swordspeare09/project3",
    site: "https://pizza-app-p3.herokuapp.com/",
  },
];


function Projects() {
  const location = useLocation();

  const [rProjects, setrProjects, jProjects, setjProjects] = useState([]);

  useEffect(() => {
    setrProjects(projects1)
  })

  return (
    <div>
      <div className="container mt-4"></div>

      <div className="row justify-content-center">
        <h3 className="text-center mt-4 mb-3">React Projects</h3>
      </div>
      <div className="row justify-content-around">
        {rProjects
          ? rProjects.map((project) => (
              <ProjectCard
                key={project.name}
                image={project.image}
                name={project.name}
                description={project.description}
                github={project.github}
                site={project.site}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Projects;
