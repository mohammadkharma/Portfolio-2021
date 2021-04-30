import React from "react"
import Tilt from "react-vanilla-tilt"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout.de"
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
                  <GatsbyImage
                    className={styles.img}
                    image={getImage(project.frontmatter.thumb)}
                    alt={project.frontmatter.slug}
                  />
                  <h2>{project.frontmatter.title}</h2>
                  <h4>{project.frontmatter.stack}</h4>
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
    projects: allMarkdownRemark(
      filter: { frontmatter: { lang: { eq: "DE" } } }
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
