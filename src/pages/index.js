import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

// must be checked:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Develop</h2>
          <h3>Design & Deploy</h3>
          <p>Web developer & designer based in Berlin</p>
          <Link className={styles.btn} to="/projects">
            My projects
          </Link>
        </div>
        <img
          src="/banner.png"
          alt="site banner"
          style={{ maxWidth: "80%", marginLeft: "60px" }}
        />
      </section>
    </Layout>
  )
}
