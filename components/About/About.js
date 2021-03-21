import styles from "./about.module.scss";

export default function About() {
  return (
    <div id="about" className={styles.aboutcont}>
      <div className={styles.yellowball + " circletop"}></div>
      <div className={styles.textcont}>
        <p className={styles.title + " title"}>About Me</p>

        <p>
        O'a s vitae sem deturbare ullo quas non quibusdam hac a verbis muneris
          physim promoveram omnis vero ea mi justo AD/EA consuluit.
          <br />
          <br />
          Eu regalibus asperiores hac arcui ex leo oboedientia ut eros nisl
          virtute succubam ea fusce director lacus AUGUE probationes. Sunt enim
          quam ea y quovis massa at convalescere, nisi supponebat, silentium te
          tertio, nam est potentiores te urna et Caeluni-terrenos praecustodio.
        </p>
      </div>
      <div className={styles.comp1}>
        <div className={styles.blueline + " line"} />
        <div className={styles.redball + " circle"} />
      </div>
    </div>
  );
}
