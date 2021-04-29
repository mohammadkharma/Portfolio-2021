// import { graphql, Link } from "gatsby"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Tilt from "react-vanilla-tilt"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const thumb = getImage(data.projects.nodes.frontmatter.thumb)
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
                  {/* <Img
                    className={styles.img}
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  /> */}
                  <GatsbyImage
                    className={styles.img}
                    image={thumb}
                    alt={project.frontmatter.slug}
                  />

                  <h2>{project.frontmatter.title}</h2>
                  <h4>{project.frontmatter.stack}</h4>
                  {/* <Link
                    className={styles.btn}
                    to={"/projects-md/" + project.frontmatter.slug}
                  >
                    read more ⬇
                  </Link> */}
                  <p className={styles.readMore}>read more ⬇</p>
                </div>
                <div className={styles.content}>
                  <div dangerouslySetInnerHTML={{ __html: project.html }} />
                  <p>
                    click <a href={project.frontmatter.link}>here</a> to visite
                    the site
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <h3>
          Like what you see? Email me at <a href={contact}>{contact}</a> for a
          talk!
        </h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      filter: { frontmatter: { lang: { eq: "EN" } } }
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
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                placeholder: DOMINANT_COLOR
                layout: CONSTRAINED
              )
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
