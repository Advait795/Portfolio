import React from "react";
import styles from "../Projects/ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import hipsterGlasses from "../../assets/hipsster.png";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="http://3.237.64.46:8080/diseasewebapp/"
          h3="CareBioMed"
          p="Disease Prediction Webapp"
        />
        <ProjectCard src={freshBurger} link="#" h3="Project2" p="Porject2" />
        <ProjectCard src={hipsterGlasses} link="#" h3="Project3" p="Porject3" />
        <ProjectCard src={fitLift} link="#" h3="Project4" p="Project4" />
      </div>
    </section>
  );
}

export default Projects;
