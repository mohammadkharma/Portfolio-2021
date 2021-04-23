import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout.ar"
import Img from "gatsby-image"

// must be checked:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const image = data.file.childImageSharp.fluid

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.intro}>
          <h2>تطوير</h2>
          <h3>تصميم ونشر</h3>
          <p>مطور ومصمم ويب مقره في برلين</p>
          <Link className={styles.btn} to="/projects">
            مشاريعي
          </Link>
        </div>
        <Img className={styles.img} fluid={image} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BannerAr {
    file(relativePath: { eq: "bewerbung.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
