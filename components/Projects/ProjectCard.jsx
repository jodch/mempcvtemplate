import styles from "./projects.module.scss";
import { useState, useEffect } from "react";

import { Collapse, Image } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project }) {
  const [displayProject, setDisplayProjects] = useState(project);
  const [open, setOpen] = useState(false);
  useEffect(() => {});
  return (
    <div className={open ? styles.cardactive : styles.cardcontainer}>
      <Image className={styles.img} src={displayProject.img} />
      <div className={styles.title}>
        <p className={styles.title}>
          <strong>{displayProject.title}</strong>
        </p>
      </div>
      <div>
        <p className={styles.text}>
          <strong>Role:</strong>
          {displayProject.role}
        </p>
      </div>
      <div className={styles.text}>
        <a style={{ margin: 0 }} target="_blank" href={displayProject.link}>
          Live website!
        </a>
      </div>
      <div className={styles.text}>
        <p
          className={styles.link}
          onClick={() => setOpen(!open)}
          aria-controls="project1"
          aria-expanded={open}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Read description{" "}
          <Icon
            style={{ height: "8pt", margin: 0, padding: 0 }}
            icon={!open ? faArrowDown : faArrowUp}
          />
        </p>
      </div>
      <Collapse in={open}>
        <div>
          <p className={styles.text}>{displayProject.description}</p>
        </div>
      </Collapse>
      <div className={styles.row}>
        <div className={styles.col}>
          <p className={styles.textcol}>
            <strong>Stack</strong>{" "}
          </p>
          {displayProject.stack.map((tech, key) => {
            return (
              <p key={key} className={styles.textcol}>
                {tech}
              </p>
            );
          })}
        </div>
        <div className={styles.col}>
          <p className={styles.textcol}>
            <strong>Features</strong>{" "}
          </p>
          {displayProject.features.map((feature, key) => {
            return (
              <p key={key} className={styles.textcol}>
                {feature}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
