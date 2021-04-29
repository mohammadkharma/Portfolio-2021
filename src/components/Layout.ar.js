import React, { useContext } from "react"
import { Global, css } from "@emotion/core"
import { useTheme } from "@emotion/react"
import { FaXing } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import Context from "../store/context"
import Navbar from "./Navbar.ar"
import "../styles/global.css"

export default function Layout({ children }) {
  const { state } = useContext(Context)
  const theme = useTheme()

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Global
          styles={css`
            * {
              color: ${state.isDark ? theme.dark.font : theme.light.font};
            }
            body {
              background: ${state.isDark
                ? theme.dark.background
                : theme.light.background};
            }
            nav h1.dark-theme {
              display: ${state.isDark ? "block" : "none"};
            }
            nav h1.light-theme {
              display: ${state.isDark ? "none" : "block"};
            }
            nav .hamburger .line {
              background: ${state.isDark
                ? theme.light.background
                : theme.dark.background};
            }
            nav .links .theme-toggle p {
              color: ${state.isDark ? theme.dark.blue : theme.light.font};
            }
            nav .links a.active {
              text-shadow: ${state.isDark ? theme.dark.textShadow : "none"};
              -webkit-box-reflect: ${state.isDark
                ? theme.dark.textReflect
                : "none"};
              text-decoration: underline;
            }
            nav #hidden {
              background: ${state.isDark
                ? theme.dark.background
                : theme.light.background};
            }
            nav #hidden a.active {
              text-shadow: ${state.isDark
                ? theme.dark.textShadowHidden
                : "none"};
              -webkit-box-reflect: ${state.isDark
                ? theme.dark.textReflectHidden
                : "none"};
              text-decoration: underline;
            }
            section::before {
              display: ${state.isDark ? "block" : "none"};
            }
            section:hover,
            .projects-module--project--1zdcJ:hover {
              box-shadow: ${state.isDark
                ? theme.dark.cardBoxShadow
                : theme.light.cardBoxShadow};
              background: ${state.isDark
                ? "#63ceff6d"
                : "rgba(255, 255, 255, 0.7);"};
              backdrop-filter: blur(7px);
            }
            .sun,
            body::before {
              display: ${state.isDark ? "none" : "block"};
            }
            .moon,
            body::after {
              display: ${state.isDark ? "block" : "none"};
            }
            .iconsContainer {
              display: ${state.isDark ? "none" : "block"};
            }
            .iconsContainerDark {
              display: ${state.isDark ? "block" : "none"};
            }
          `}
        />
        <div className="moon">
          <div></div>
        </div>
        <div className="sun">
          <div></div>
        </div>
        {children}
      </div>
      <footer>
        <div className="iconsContainer">
          <button>
            <a href="https://github.com/mohammadkharma">
              <FaGithub className="img" />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/mohammad-kharma-95606ba9/">
              <FaLinkedin className="img" />
            </a>
          </button>
          <button>
            <a href="https://www.xing.com/profile/Mohammad_Kharma2">
              <FaXing className="img" />
            </a>
          </button>
        </div>
        <div className="iconsContainerDark">
          <button>
            <a href="https://github.com/mohammadkharma">
              <FaGithub className="img" />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/mohammad-kharma-95606ba9/">
              <FaLinkedin className="img" />
            </a>
          </button>
          <button>
            <a href="https://www.xing.com/profile/Mohammad_Kharma2">
              <FaXing className="img" />
            </a>
          </button>
        </div>
        <p>حقوق النشر ٢٠٢١ٍ - محمد خرما</p>
        <p>Gatsby بني على</p>
      </footer>
    </div>
  )
}
