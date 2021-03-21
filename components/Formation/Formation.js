import styles from "./formation.module.scss";

export default function Formation() {
  const dots = 64;

  return (
    <div id="education" className={styles.formationcont}>
      <div className={styles.dotscol}>
        <div className={styles.dotscont + " form-dots"}>
          {[...Array(dots)].map((dot, key) => {
            return <div className={styles.dot} key={key} />;
          })}
        </div>
      </div>
      <div className={styles.formcol}>
        <div className={styles.textcont + " form-textcol"}>
          <p className={styles.title}>Education</p>
          <p>
            College or institute - Studies
            <br />
            <strong>Title</strong>
            <br />
            <br />
            College - Studies
            <br />
            <strong>Title</strong>
            <br />
            <br />
            Institute
            <br />
            <strong>Title</strong>
            <br />
          </p>
          <br />
          <br />
          <br />
          <br />

          <p className={styles.title}>Awards</p>
          <p>
            AWARD - 2006
            <br />
            <strong>Gold</strong>
            <br />
            Category
            <br />
            Team
            <br />
            <br />
          </p>

          <p>
            AWARD - 2006
            <br />
            <strong>Gold</strong>
            <br />
            Category
            <br />
            Team
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className={styles.formcol}>
        <div className={styles.expcont}>
          <div className={styles.titlecont + " form-exptitle"}>
            <p className={styles.title}>Experience</p>
          </div>
          <div className="form-expcont">
            <p>
              <strong>Job title</strong>
              <br />
              Freelance
              <br />
              04/2020-now
              <br />
            </p>
            <p className={styles.expdescription}>
            Eu e defunctos nocturnum O esse cursum ut tincidunt adlaborabunt,
              nibh etiam fastus actionum si eiusdem clenodia dui modernas
              ultimum nec cognomina magni massa inauguratus.
              <br />
              <br />
              <u>My experience as a freelancer includes:</u>
            </p>
            <br />
            <br />

            <ul>
              <li>
                <p>
                  <strong>Title</strong>
                  <br />
                  <u>Company</u>
                  <br />
                </p>
                <div className={styles.expdescription}>
                  <p>
                  Ab quia te leo totam collocare quo odio V orci orci mi w
                    exlusis si integrum est lorem operom, iste considrrntionis
                    maiores enim incendia v imponere enim typi proprio nascetur
                    eos dependentias exercitationem uidem metus-donec in quae mi
                    tincidunt reiciendis sequi metus-buccis mus quae hac.
                  </p>
                </div>
                <p className={styles.expdescription}>
                  <br />
                  Some technologies used are, but not limited to:
                  <br />
                </p>
                <ul>
                  <li>
                    {" "}
                    <p>React</p>
                  </li>
                  <li>
                    <p>Redux</p>
                  </li>
                  <li>
                    <p>Gatsby</p>
                  </li>
                  <li>
                    <p>CSS Animations</p>
                  </li>
                  <li>
                    <p>Firestore Cloud Storage</p>
                  </li>
                  <li>
                    <p>Firebase</p>
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <p>
                  <strong>Title</strong>
                  <br />
                  <u>Company</u>
                  <br />
                </p>
                <div className={styles.expdescription}>
                  <p>
                  Nisi vel RECURRO enim ex saemre eu e laedit oppressor
                    duplicate quis PEDE te Scomata, ad fuga si dui suffragia non
                    ut hic EU/AD exequi, quo hic ricissitudincs mi potiorue,
                    EROS non obsequio.
                  </p>
                </div>
              </li>
              <br />
              
            </ul>
            <p>
              <strong>Title</strong>
              <br />
              Freelance
              <br />
              2015 – 2020
              <br />
              <br />
              <strong>Title</strong>
              <br />
              Company
              <br />
              2017-2019
              <br />
              Location
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
