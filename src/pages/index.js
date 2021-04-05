import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
// import Video from "../../static/video.mp4"

// must be checked:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const image = data.file.childImageSharp.fluid
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
        <Img className={styles.img} fluid={image} />
        {/* <video muted loop autoplay="true">
          <source src={Video} type="video/mp4" />
        </video> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "bewerbung.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
