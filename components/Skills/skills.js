import styles from "./skills.module.scss";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {});
  return (
    <div className={styles.skillscont}>
      <div className={styles.titlerow}>
        <div className={styles.titlecont + " sk-title"}>
          <p>Skills</p>
        </div>
        <div className={styles.comp1}>
          <div className={styles.blueline + " sk-line"} />
          <div className={styles.redball + " sk-redcircle"} />
        </div>
      </div>

      <div className={styles.textrow}>
        <div className={styles.textcont1}>
          <div className={styles.title + " sk-subtitle"}>Hard skills</div>
          <p className="sk-text">
            Hard Skill
            <br />
            Hard Skill <br />
            Hard Skill <br />
            Hard Skill <br />
            Hard Skill
            <br />
            Hard Skill <br />
            Hard Skill <br />
            Hard Skill <br />
            Hard Skill <br />
            Hard Skill <br />
          </p>
        </div>
        <div className={styles.textcont2}>
          <div className={styles.title + " sk-subtitle"}>Soft skills</div>
          <p className="sk-text">
            Soft Skill
            <br />
            Soft Skill            <br />
            Soft Skill            <br />
            Soft Skill            <br />
            Soft Skill            <br />
            Soft Skill            <br />
            Soft Skill          </p>
        </div>
        <div className={styles.textcont3 + " "}>
          <div className={styles.title + " sk-text"}>portable skills</div>
          <p>
          Portable Skill            <br />
          Portable Skill             <br />
          Portable Skill             <br />
          Portable Skill             <br />
          Portable Skill             <br />
          Portable Skill             <br />
          Portable Skill             <br />
          Portable Skill             <br />
          </p>
        </div>
      </div>
      <div className={styles.comp2row}>
        <div className={styles.comp2}>
          <div className={styles.blueline + " sk-line2"} />
          <div className={styles.redball + " sk-ball2"} />
        </div>
      </div>
    </div>
  );
}
