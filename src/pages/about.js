import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import resume from "../pdf/Lebenslauf_2021.pdf"
import coverletter from "../pdf/coverletter.pdf"
import sky from "../pdf/SkyAcademy.pdf"
import petra from "../pdf/Lebanese-Petra.pdf"
import icc from "../pdf/Integrated-Imunology-Clinic.pdf"
import certificate from "../pdf/Kharma_Mohammad_Zertifikat.pdf"
import b1 from "../pdf/B1.pdf"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <section className={styles.aboutMe}>
          <h2>Let us get to know eachothers!</h2>
          <div className={styles.aboutMeItem}>
            <h3>General Me</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                As the first career path, my life was about Sports, Basketball
                specifically. Being a player, a coach, and a teacher has helped
                me out building my flexible, responsible, and mature
                personality. In such a field, you get to work with different
                people of different ages and you gain experience in working
                under time pressure and harder circumstances. After that, and
                because of injury, I crossed the bridge from sports to business
                field and worked as a Sales Manager / Manager Assistant, till
                Fate wanted me to leave my home country and change my career.
                And here I am today, living a new dream as a Web Developer based
                in Berlin.
                <span>
                  "You miss 100 percent of the shots you never take."
                  <br />
                  Wayne Gretzky
                </span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMeItem}>
            <h3>Current Me</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                A fast-learning web developer who is passionate about clean code
                and challenging problem-solving. Always up to date with new
                technologies and looking for modern and clear designs. Combine
                this with the comfort of working across the front-end to deliver
                exceptional customer-facing products.
                <span>
                  “Perfection is not attainable, but if we chase perfection we
                  can catch excellence.”
                  <br />
                  Vince Lombardi
                </span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMeItem}>
            <h3>Tomorrow Me</h3>
            <div className={styles.aboutContent}>
              <div className={styles.arrows}></div>
              <p>
                It is important on a professional level to be an ambitious
                person. Having ambition not only makes people work harder, but
                makes them a lot more likely to excel at what they do in their
                job. And like most people, I would like to obtain a role which
                has more responsibility in the future.
                <span>
                  "The best way to predict the future is to create it."
                  <br />
                  Abraham Lincoln
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.references} id="references">
          <h2>References</h2>
          <div>
            <h3>Resume & Coverletter</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>Resume</p>
                <embed download src={resume} type="application/pdf"></embed>
                <a href={resume} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
              <div>
                <p>General Coneverletter</p>
                <embed
                  download
                  src={coverletter}
                  type="application/pdf"
                ></embed>
                <a href={coverletter} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>Jobs references</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>Internship - Web Development</p>
                <embed download src={sky} type="application/pdf"></embed>
                <a href={sky} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
              <div>
                <p>Sales Manager</p>
                <embed download src={petra} type="application/pdf"></embed>
                <a href={petra} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
              <div>
                <p>Assistant</p>
                <embed download src={icc} type="application/pdf"></embed>
                <a href={icc} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3>Certificates</h3>
            <div className={styles.referencesContent}>
              <div>
                <p>Further Education - Web Development</p>
                <embed
                  download
                  src={certificate}
                  type="application/pdf"
                ></embed>
                <a href={certificate} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
              <div>
                <p>B1 Level - German Language</p>
                <embed download src={b1} type="application/pdf"></embed>
                <a href={b1} target="_blank" rel="noreferrer">
                  open external ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skillsHobbies}>
          <h2>Skills & Hobbies</h2>
          <p>
            In the new Tech world, it's good to have some digital skills. I
            improved mine in MS Office, Photoshop, and Video Edit. As for
            Hobbies, Basketball comes first, followed by Table Tennis, Reading,
            and Playing Digital Games.
          </p>
        </section>
      </div>
    </Layout>
  )
}
