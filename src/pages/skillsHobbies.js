import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function SkillsHobbies() {
  return (
    <Layout>
      <section className={styles.skillsHobbies}>
        <h2>Skills & Hobbies</h2>
        <p>
          In the new Tech world, it's good to have some digital skills. I
          improved mine in MS Office, Photoshop, and Video Edit. As for Hobbies,
          Basketball comes first, followed by Table Tennis, Reading, and Playing
          Digital Games.
        </p>
      </section>
    </Layout>
  )
}
