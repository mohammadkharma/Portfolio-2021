import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
// import resume from "../pdf/Lebenslauf_2021.pdf"
// import coverletter from "../pdf/coverletter.pdf"
// import sky from "../pdf/SkyAcademy.pdf"
// import petra from "../pdf/Lebanese-Petra.pdf"
// import icc from "../pdf/Integrated-Imunology-Clinic.pdf"
// import certificate from "../pdf/Kharma_Mohammad_Zertifikat.pdf"
// import b1 from "../pdf/B1.pdf"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>Let us get to know each other!</h1>
        <div className={styles.aboutMe} id="aboutMe">
          <section className={styles.aboutMeItem}>
            <h2>General Me</h2>
            <p>
              As the first career path, my life was about Sports, Basketball
              specifically. Being a player, a coach, and a teacher has helped me
              out building my flexible, responsible, and mature personality. In
              such a field, you get to work with different people of different
              ages and you gain experience in working under time pressure and
              harder circumstances. After that, and because of injury, I crossed
              the bridge from sports to business field and worked as a Sales
              Manager / Manager Assistant, till Fate wanted me to leave my home
              country and change my career. And here I am today, living a new
              dream as a Web Developer based in Berlin.
            </p>
            <span>
              "You miss 100 percent of the shots you never take."
              <br />
              <br />
              Wayne Gretzky
            </span>
          </section>
          <section className={styles.aboutMeItem}>
            <h2>Current Me</h2>
            <p>
              A fast-learning web developer who is passionate about clean code
              and challenging problem-solving. Always up to date with new
              technologies and looking for modern and clear designs. Mainly
              working across the front-end to deliver exceptional
              customer-facing products.
            </p>
            <span>
              “Perfection is not attainable, but if we chase perfection we can
              catch excellence.”
              <br />
              <br />
              Vince Lombardi
            </span>
          </section>
          <section className={styles.aboutMeItem}>
            <h2>Tomorrow Me</h2>
            <p>
              It is important on a professional level to be an ambitious person.
              Having ambition not only makes people work harder but makes them a
              lot more likely to excel at what they do in their job. And like
              most people, I would like to obtain a role that has more
              responsibility in the future.
            </p>
            <span>
              "The best way to predict the future is to create it."
              <br />
              <br />
              Abraham Lincoln
            </span>
          </section>
        </div>
        {/* 
        <section className={styles.references} id="references">
          <h2>References</h2>
          <div>
            <h2>Resume & Coverletter</h2>
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
            <h2>Jobs references</h2>
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
            <h2>Certificates</h2>
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

        <section className={styles.skillsHobbies} id="skillsHobbies">
          <h2>Skills & Hobbies</h2>
          <p>
            In the new Tech world, it's good to have some digital skills. I
            improved mine in MS Office, Photoshop, and Video Edit. As for
            Hobbies, Basketball comes first, followed by Table Tennis, Reading,
            and Playing Digital Games.
          </p>
        </section> */}
      </div>
    </Layout>
  )
}
