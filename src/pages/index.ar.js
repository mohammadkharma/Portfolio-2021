import React from "react"
import Helmet from "react-helmet"
import Tilt from "react-vanilla-tilt"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout.ar"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const metadata = useStaticQuery(graphql`
    query BannerMetaAr {
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

  const { url, keywords } = metadata.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <title> مطور ويب </title>
        <meta name="dscription" content="حافظة لمطور الويب" />
        <meta name="keywords" content={keywords} />
        <meta property="og:author" content="محمد خرما" />
        <meta property="og:title" content="مطور ويب" />
        <meta property="og:type" content="موقع الكتروني" />
        <meta property="og:description" content="حافظة لمطور الويب" />
        <meta property="og:locale" content="ar_UAE" />
        <meta property="og:url" content={url} />
        <meta rel="canonical" href={url} />
      </Helmet>
      <Tilt className={styles.tilt}>
        <section className={styles.header} id="headerAr">
          <GatsbyImage
            className={styles.img}
            image={getImage(metadata.file)}
            alt="محمد خرما"
          />
          <div className={styles.intro}>
            <h2>تطوير</h2>
            <h3>تصميم ونشر</h3>
            <p>مطور ومصمم ويب مقره في برلين</p>
            <Link className={styles.btn} to="/projects/index.ar">
              مشاريعي
            </Link>
          </div>
        </section>
      </Tilt>
    </Layout>
  )
}
