import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <div>
      <Layout>
        <div className={styles.projectDetails}>
          <h2>title</h2>
          <h3>stack</h3>
          {/* <div><Img fluid={} /></div> */}
          {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
        </div>
      </Layout>
    </div>
  )
}
