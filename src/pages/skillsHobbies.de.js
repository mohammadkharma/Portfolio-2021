import React from "react"
import Layout from "../components/Layout.de"
import * as styles from "../styles/about.module.css"

export default function SkillsHobbies() {
  return (
    <Layout>
      <section className={styles.skillsHobbies}>
        <h2>Fähigkeiten & Hobbys</h2>
        <p>
          In der neuen Tech-Welt ist es gut, über digitale Fähigkeiten zu
          verfügen. Ich habe meine in MS Office, Photoshop und Video Edit
          verbessert. Bei den Hobbys steht Basketball an erster Stelle, gefolgt
          von Tischtennis, Lesen und Spielen digitaler Spiele.
        </p>
      </section>
    </Layout>
  )
}
