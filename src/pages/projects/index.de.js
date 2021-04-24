// import { graphql, Link } from "gatsby"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout.de"
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
                  {/* <Link
                    className={styles.btn}
                    to={"/projects-md/" + project.frontmatter.slug}
                  >
                    read more ⬇
                  </Link> */}
                  <p className={styles.readMore}>weiterlesen ⬇</p>
                </div>
                <div className={styles.content}>
                  <div dangerouslySetInnerHTML={{ __html: project.html }} />
                  <p>
                    Klicken Sie <a href={project.frontmatter.link}>hier</a>, um
                    die Site zu besuchen
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <h3>
          Gefällt Ihnen was Sie sehen? Senden Sie mir eine E-Mail an
          <a href={contact}>{contact}</a>, um eine E-Mail zu erhalten sich
          unterhalten!
        </h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageDe {
    projects: allMarkdownRemark {
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
