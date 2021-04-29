import React from "react"
import Helmet from "react-helmet"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout.de"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const metadata = useStaticQuery(graphql`
    query BannerMetaDe {
      file(relativePath: { eq: "bewerbung-min.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            placeholder: DOMINANT_COLOR
          )
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
          <h2>Entwickeln</h2>
          <h3>Entwerfen & Bereitstellen</h3>
          <p>Webentwickler & Designer mit Sitz in Berlin</p>
          <Link className={styles.btn} to="/projects/index.de">
            Meine Projekte
          </Link>
        </div>
        <GatsbyImage
          className={styles.img}
          image={getImage(metadata.file)}
          alt={author}
        />{" "}
      </section>
    </Layout>
  )
}
