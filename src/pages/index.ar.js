import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/Layout.ar"
import Img from "gatsby-image"
import Helmet from "react-helmet"

// must be checked:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const metadata = useStaticQuery(graphql`
    query BannerMetaAr {
      file(relativePath: { eq: "bewerbung-min.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          url
          keywords
        }
      }
    }
  `)

  const image = metadata.file.childImageSharp.fluid

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
      <section className={styles.header} id="headerAr">
        <Img className={styles.img} fluid={image} />
        <div className={styles.intro}>
          <h2>تطوير</h2>
          <h3>تصميم ونشر</h3>
          <p>مطور ومصمم ويب مقره في برلين</p>
          <Link className={styles.btn} to="/projects/index.ar">
            مشاريعي
          </Link>
        </div>
      </section>
    </Layout>
  )
}
