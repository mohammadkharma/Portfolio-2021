import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import Img from "gatsby-image"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, link, featuredImg } = data.markdownRemark.frontmatter

  return (
    <div>
      <Layout>
        <div className={styles.projectDetails}>
          <h2>{title}</h2>
          <h3>{stack}</h3>

          <div>
            <Img fluid={featuredImg.childImageSharp.fluid} />
          </div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <p className={styles.link}>
              click <a href={link}>here</a> to the visite the site
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        link
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
