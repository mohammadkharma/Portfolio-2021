import React from "react"
import Tilt from "react-vanilla-tilt"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function SkillsHobbies() {
  return (
    <Layout>
      <div className={styles.skillsHobbies}>
        <h2>Skills & Hobbies</h2>
        <div className={styles.skillsHobbiesContent}>
          <Tilt className={styles.tilt}>
            <section className={styles.skills}>
              <p>
                In the new Tech world, it's good to have some digital skills. I
                improved mine in <b>MS Office</b>, <b>Photoshop</b>,{" "}
                <b>Video Edit</b> and
                <b>the following programming languages and technologies</b>:
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
                As for Hobbies, <b>Basketball</b> comes first, followed by:
              </p>
              <ul>
                <li>Reading</li>
                <li>learning other languages</li>
                <li>Table Tennis</li>
                <li>Playing Digital Games</li>
              </ul>
            </section>
          </Tilt>
        </div>
      </div>
    </Layout>
  )
}
