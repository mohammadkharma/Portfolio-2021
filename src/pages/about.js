import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h2>About</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
      </div>
    </Layout>
  )
}
