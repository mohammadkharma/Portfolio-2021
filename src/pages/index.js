import React from "react"
import Helmet from "react-helmet"
import Tilt from "react-vanilla-tilt"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const metadata = useStaticQuery(graphql`
    query BannerMeta {
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
    description,
    url,
    type,
    keywords,
    author,
  } = metadata.site.siteMetadata

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={url} />
        <meta rel="canonical" href={url} />
      </Helmet>
      <Tilt className={styles.tilt}>
        <section className={styles.header}>
          <div className={styles.intro}>
            <h2>Develop</h2>
            <h3>Design & Deploy</h3>
            <p>Web developer & designer based in Berlin</p>
            <Link className={styles.btn} to="/projects">
              My projects
            </Link>
          </div>
          <GatsbyImage
            className={styles.img}
            image={getImage(metadata.file)}
            alt={author}
          />
        </section>
      </Tilt>
    </Layout>
  )
}
