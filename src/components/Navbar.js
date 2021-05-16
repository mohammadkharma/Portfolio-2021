import React, { useContext, useState } from "react"
import { HiTranslate } from "react-icons/hi"
import { Link, graphql, useStaticQuery } from "gatsby"
import Context from "../store/context"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  const { state, dispatch } = useContext(Context)
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div className="title">
        <h1 className="dark-theme"> {author} </h1>
        <h1 className="light-theme"> {author} </h1>
      </div>

      <div className="dropdown-lang">
        <button className="dropbtn" aria-label="dropbtn">
          <HiTranslate />
        </button>
        <section className="dropdown-content">
          <Link to="/index.de" activeClassName="active">
            Deutsch
          </Link>
          <Link to="/index.ar" activeClassName="active">
            العربية
          </Link>
        </section>
      </div>

      <div className="links" id={showLinks ? "hidden" : ""}>
        <Link to="/" activeClassName="active">
          Home
        </Link>

        <div className="dropdown-about">
          <button className="dropbtn" aria-label="dropbtn">
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </button>
          <section className="dropdown-content">
            <Link to="/about">About Me</Link>
            <Link to="/references">References</Link>
            <Link to="/skillsHobbies">Skills & Hobbies</Link>
          </section>
        </div>

        <Link to="/projects" activeClassName="active">
          Projects
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>

        <div className="theme-toggle">
          <p>Dark mode:</p>
          <label htmlFor="checkbox" hidden>
            theme toggle
          </label>
          <input
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
            id="checkbox"
            type="checkbox"
            name=""
            readOnly={true}
            checked={state.isDark ? true : false}
          />
          <p>{state.isDark ? "ON" : "OFF"}</p>
        </div>
      </div>

      <button
        aria-label="humburger"
        className="hamburger"
        onClick={() => setShowLinks(!showLinks)}
        onKeyPress={() => setShowLinks(!showLinks)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  )
}
