import React from "react"
import Tilt from "react-vanilla-tilt"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout.ar"
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.projectsHomepage}>
        <div className={styles.projectsList}>
          {projects.map(project => (
            <Tilt key={project.id} className={styles.tilt}>
              <div id="projects" className={styles.project}>
                <div className={styles.content}>
                  <Img
                    className={styles.img}
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  />
                  <h2>{project.frontmatter.title}</h2>
                  <h4>{project.frontmatter.stack}</h4>
                  <p className={styles.readMore}>⬇ اقرأ أكثر</p>
                </div>
                <div className={styles.content}>
                  <div dangerouslySetInnerHTML={{ __html: project.html }} />
                  <p>
                    انقر <a href={project.frontmatter.link}> هنا </a> لزيارة
                    الموقع
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <h3>
          هل تحب ما تراه؟ أرسل لي على <a href={contact}>{contact}</a> للحصول على
          دردشة عبر البريد الإلكتروني
        </h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageAr {
    projects: allMarkdownRemark(
      filter: { frontmatter: { lang: { eq: "AR" } } }
    ) {
      nodes {
        html
        frontmatter {
          slug
          stack
          title
          link
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
