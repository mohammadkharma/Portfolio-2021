import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Context from "../store/context"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  const { dispatch } = useContext(Context)

  return (
    <nav>
      <h1> {title} </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  )
}
