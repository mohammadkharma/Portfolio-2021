import React, { useContext, useState } from "react"
import { HiTranslate } from "react-icons/hi"
import { Link, graphql, useStaticQuery } from "gatsby"
import Context from "../store/context"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfoDe {
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
        <button className="dropbtn">
          <HiTranslate />
        </button>
        <section className="dropdown-content">
          <Link to="/" activeClassName="active">
            English
          </Link>
          <Link to="/index.ar" activeClassName="active">
            العربية
          </Link>
        </section>
      </div>

      <div className="links" id={showLinks ? "hidden" : ""}>
        <Link to="/index.de" activeClassName="active">
          Home
        </Link>

        <div className="dropdown-about">
          <button className="dropbtn">
            <Link to="/about.de" activeClassName="active">
              Über
            </Link>
          </button>
          <section className="dropdown-content">
            <Link to="/about.de">Über mich</Link>
            <Link to="/references.de">Referenzen</Link>
            <Link to="/skillsHobbies.de">Fähigkeiten & Hobbys</Link>
          </section>
        </div>

        <Link to="/projects/index.de" activeClassName="active">
          Projekte
        </Link>
        <Link to="/contact.de" activeClassName="active">
          Kontakt
        </Link>

        <div className="theme-toggle">
          <p>Dunkler Modus:</p>
          <input
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
            id="checkbox"
            type="checkbox"
            name=""
            readOnly={true}
            checked={state.isDark ? true : false}
          />
          <p>{state.isDark ? "AN" : "AUS"}</p>
        </div>
      </div>

      <button
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
