import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout.ar"
import * as styles from "../../styles/projects.module.css"
import Tilt from "react-vanilla-tilt"
import Img from "gatsby-image"

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
                  <Link
                    className={styles.btn}
                    to={"/projects-md/" + project.frontmatter.slug}
                  >
                    اقرأ أكثر
                  </Link>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <h3>
          هل تحب ما تراه؟ راسلني على <a href={contact}>{contact}</a> !للتحدث
        </h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageAr {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
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
