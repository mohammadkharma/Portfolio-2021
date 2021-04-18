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

  const { state, dispatch } = useContext(Context)

  return (
    <nav>
      <div className="title">
        <h1 className="dark-theme"> {title} </h1>
        <h1 className="light-theme"> {title} </h1>
      </div>
      <div className="theme-toggle">
        <p>
          Dark mode: <b> {state.isDark ? "ON" : "OFF"} </b>
        </p>
        <input
          onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          id="checkbox"
          type="checkbox"
          name=""
          checked={state.isDark ? true : false}
        />
      </div>
      <div className="links">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
        <Link to="/projects" activeClassName="active">
          Projects
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </div>
    </nav>
  )
}
