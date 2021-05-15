import React, { useContext, useState } from "react"
import { HiTranslate } from "react-icons/hi"
import { Link } from "gatsby"
import Context from "../store/context"

export default function Navbar() {
  const { state, dispatch } = useContext(Context)
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div className="links" id={showLinks ? "hidden" : ""}>
        <div className="theme-toggle">
          <p>:الوضع المظلم</p>
          <input
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
            id="checkbox"
            type="checkbox"
            name=""
            readOnly={true}
            checked={state.isDark ? true : false}
          />
          <p>{state.isDark ? "نعم" : "لا"}</p>
        </div>

        <Link to="/contact.ar" activeClassName="active">
          اتصال
        </Link>
        <Link to="/projects/index.ar" activeClassName="active">
          المشاريع
        </Link>
        <div className="dropdown-about">
          <button className="dropbtn" aria-label="dropbtn">
            <Link to="/about.ar" activeClassName="active">
              حول
            </Link>
          </button>
          <section className="dropdown-content">
            <Link to="/skillsHobbies.ar">المهارات والهوايات</Link>
            <Link to="/references.ar">مراجع</Link>
            <Link to="/about.ar">عني</Link>
          </section>
        </div>
        <Link to="/index.ar" activeClassName="active">
          الصفحة الرئيسية
        </Link>
      </div>

      <div className="dropdown-lang">
        <button className="dropbtn" aria-label="dropbtn">
          <HiTranslate />
        </button>
        <section className="dropdown-content">
          <Link to="/" activeClassName="active">
            English
          </Link>
          <Link to="/index.de" activeClassName="active">
            Deutsch
          </Link>
        </section>
      </div>

      <div className="title">
        <h1 className="dark-theme"> محمد خرما </h1>
        <h1 className="light-theme"> محمد خرما </h1>
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
