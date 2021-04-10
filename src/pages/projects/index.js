import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
// import Img from "gatsby-image"
// import * as VanillaTilt from "vanilla-tilt"
import Tilt from "react-vanilla-tilt"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.projectsHomepage}>
        <h2>Projects</h2>
        <h3>& websites I've created</h3>
        <div className={styles.projectsList}>
          {projects.map(project => (
            <Tilt className={styles.tilt}>
              <div className={styles.project}>
                <div className={styles.content}>
                  {/* <Img
                  className={styles.img}
                  fluid={project.frontmatter.thumb.childImageSharp.fluid}
                /> */}
                  <h2>{project.frontmatter.title}</h2>
                  <h3>{project.frontmatter.stack}</h3>
                  <p>
                    Lorem ninja ipsum dolor sit amet, consectetuer adipiscing
                    elit
                  </p>
                  <Link
                    className={styles.btn}
                    to={"/projects-md/" + project.frontmatter.slug}
                    key={project.id}
                  >
                    {" "}
                    read more
                  </Link>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <p>
          Like what you see? Email me at <b>{contact}</b> for a talk!
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
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
