import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectCard from "../items/ProjectCard";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

const projects1 = [
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
    github: "https://github.com/Swordspeare09/React-iveReadingList",
    site: "https://afternoon-depths-78435.herokuapp.com/",
  },
  {
    name: "Employee Directory",
    description:
      "Built with React.js, this application simulates the organization of an employee catalog.",
    github: "https://github.com/Swordspeare09/user-directory",
    site: "https://swordspeare09.github.io/user-directory/",
  },
  {
    name: "Portfolio v2",
    description: "My personal online resume ",
    github: "https://github.com/Swordspeare09/react_portfolio_site",
    site: "https://swordspeare09.github.io/react_portfolio_site",
  },
];

const projects2 = [
  {
    name: "Poke Quiz",
    description:
      "Fun mobile first project that uses API calls to create a fun drinking game.",
    github: "https://github.com/Swordspeare09/PokeQuiz",
    site: "https://swordspeare09.github.io/PokeQuiz/",
  },
  {
    name: "myNotes",
    description: "A simple way of keeping track of secured personal notes.",
    github: "https://github.com/Swordspeare09/myNotesApp",
    site: "https://polar-fortress-74365.herokuapp.com/",
  },
  {
    name: "Local Weather App",
    description:
      "A weather dashboard that displays the current and 5 day forecast",
    github: "https://github.com/Swordspeare09/WeatherDashboardApp",
    site: "https://swordspeare09.github.io/WeatherDashboardApp/",
  },
  {
    name: "Portfolio v1",
    description: "My first attempt at creating an online portfolio site.",
    github: "https://github.com/Swordspeare09/FirstPortfolio",
    site: "https://swordspeare09.github.io/FirstPortfolio/",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

const StyledTabs = withStyles({
  root: {
    background: "#4db6ac",
    border: 0,
    color: "white",
    height: 48,
  },
  label: {
    textTransform: "capitalize",
  },
})(Tabs);



function Projects() {


  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();

  const [rProjects, setrProjects] = useState([]);
  const [jProjects, setjProjects] = useState([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    setrProjects(projects1);
    setjProjects(projects2);
  })

  return (
    <div>
      <div className="container mt-4"></div>

      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="none"
        centered
      >
        <Tab label="React Projects" {...a11yProps(0)} />
        <Tab label="JavaScript Projects" {...a11yProps(1)} />
      </StyledTabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="row justify-content-around" label="React">
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
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="row justify-content-around">
          {jProjects
            ? jProjects.map((project) => (
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
      </TabPanel>
    </div>
  );
}

export default Projects;
