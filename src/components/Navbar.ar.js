import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import Context from "../store/context"
import { HiTranslate } from "react-icons/hi"

export default function Navbar() {
  const { state, dispatch } = useContext(Context)
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div className="title">
        <h1 className="dark-theme"> محمد خرما </h1>
        <h1 className="light-theme"> محمد خرما </h1>
      </div>

      <div className="dropdown-lang">
        <button className="dropbtn">
          <HiTranslate />
        </button>
        <section className="dropdown-content">
          <Link to="/" activeClassName="active">
            English
          </Link>
          <Link to="/index.de" activeClassName="active">
            Deutch
          </Link>
        </section>
      </div>

      <div className="links" id={showLinks ? "hidden" : ""}>
        <Link to="/index.ar" activeClassName="active">
          الصفحة الرئيسية
        </Link>

        <div className="dropdown-theme">
          <button className="dropbtn">
            <Link to="/about.ar" activeClassName="active">
              حول
            </Link>
          </button>
          <section className="dropdown-content">
            <Link to="/about.ar#aboutMe" activeClassName="active">
              عني
            </Link>
            <Link to="/about.ar#references" activeClassName="active">
              مراجع
            </Link>
            <Link to="/about.ar#skillsHobbies" activeClassName="active">
              المهارات والهوايات
            </Link>
          </section>
        </div>

        <Link to="/projects/index.ar" activeClassName="active">
          المشاريع
        </Link>
        <Link to="/contact.ar" activeClassName="active">
          اتصال
        </Link>

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
