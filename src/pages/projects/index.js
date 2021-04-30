import React from "react"
import Tilt from "react-vanilla-tilt"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
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
                  {/* <GatsbyImage
                    className={styles.img}
                    image={getImage(project.frontmatter.thumb)}
                    alt={project.frontmatter.slug}
                  /> */}
                  <h2>{project.frontmatter.title}</h2>
                  <h4>{project.frontmatter.stack}</h4>
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
