import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import Helmet from "react-helmet"

// must be checked:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const metadata = useStaticQuery(graphql`
    query BannerMeta {
      file(relativePath: { eq: "bewerbung-min.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          url
          type
          keywords
        }
      }
    }
  `)

  const image = metadata.file.childImageSharp.fluid

  const {
    title,
    desciption,
    url,
    type,
    keywords,
    author,
  } = metadata.site.siteMetadata

  return (
    <Layout>
      <Helmet>
        <title> {title} </title>
        <meta name="dscription" content={desciption} />
        <meta name="keywords" content={keywords} />
        <meta property="og:author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:description" content={desciption} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={url} />
        <meta rel="canonical" href={url} />
      </Helmet>
      <section className={styles.header}>
        <div className={styles.intro}>
          <h2>Develop</h2>
          <h3>Design & Deploy</h3>
          <p>Web developer & designer based in Berlin</p>
          <Link className={styles.btn} to="/projects">
            My projects
          </Link>
        </div>
        <Img className={styles.img} fluid={image} />
      </section>
    </Layout>
  )
}
