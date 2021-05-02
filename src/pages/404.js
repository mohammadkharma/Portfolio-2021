import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/error404.module.css"

export default function Error404() {
  return (
    <Layout>
      <div className={styles.error}>
        <h2>Error 404</h2>
        <h3>Sorry, page not founf</h3>
      </div>
    </Layout>
  )
}
