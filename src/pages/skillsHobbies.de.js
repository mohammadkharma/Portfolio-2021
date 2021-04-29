import React from "react"
import Tilt from "react-vanilla-tilt"
import Layout from "../components/Layout.de"
import * as styles from "../styles/about.module.css"

export default function SkillsHobbies() {
  return (
    <Layout>
      <div className={styles.skillsHobbies}>
        <h2>Fähigkeiten & Hobbys</h2>
        <div className={styles.skillsHobbiesContent}>
          <Tilt className={styles.tilt}>
            <section>
              <p>
                In der neuen Tech-Welt ist es gut, über digitale Fähigkeiten zu
                verfügen. Ich habe meine in <b>MS Office</b>, <b>Photoshop</b>,
                <b>Video Edit</b> und
                <b>die folgenden Programmiersprachen und Technologien</b>:
              </p>
              <ul>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>React</li>
                <li>Gastyb</li>
              </ul>
            </section>
          </Tilt>
          <Tilt className={styles.tilt}>
            <section className={styles.hobbies}>
              <p>
                Bei den Hobbys steht <b>Basketball</b> an erster Stelle, gefolgt
                von
              </p>
              <ul>
                <li>Lesen</li>
                <li>andere Sprachen lernen</li>
                <li>Tischtennis</li>
                <li>pielen digitaler Spiele</li>
              </ul>
            </section>
          </Tilt>
        </div>
      </div>
    </Layout>
  )
}
