import React, { useContext } from "react"
import Navbar from "./Navbar.de"
import "../styles/global.css"
import { Global, css } from "@emotion/core"
import { useTheme } from "@emotion/react"
import Context from "../store/context"

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
            body::before {
              display: ${state.isDark
                ? theme.display.none
                : theme.display.block};
            }
            body::after {
              display: ${state.isDark ? "block" : "none"};
            }
            nav .hamburger .line {
              background: ${state.isDark
                ? theme.light.background
                : theme.dark.background};
            }
            nav .links .theme-toggle p {
              color: ${state.isDark ? "#63cdff" : theme.light.font};
            }
            nav .links a:hover {
              text-decoration: underline;
              margin-bottom: 10px;
            }
            nav .links a.active {
              text-shadow: ${state.isDark
                  ? "0 0 10px #63cdff"
                  : "0 0 30px #000"},
                ${state.isDark ? "0 0 10px #63cdff" : "0 0 30px #000"};
              -webkit-box-reflect: ${state.isDark
                ? "below -140% linear-gradient(#0003, #000)"
                : "none"};
              text-decoration: underline;
            }
            nav #hidden {
              background: ${state.isDark
                ? theme.dark.background
                : theme.light.background};
            }
            nav #hidden a.active {
              border-bottom: none;
              text-shadow: ${state.isDark
                  ? "0 0 10px #63cdff"
                  : theme.light.borderColor},
                ${state.isDark ? "0 0 20px #63cdff" : "none"},
                ${state.isDark ? "0 0 40px #63cdff" : "none"},
                ${state.isDark ? "0 0 80px #63cdff" : "none"},
                ${state.isDark ? "0 0 160px #63cdff" : "none"};
              -webkit-box-reflect: ${state.isDark
                ? "below 0 linear-gradient(#0002, #0008)"
                : "none"};
              text-decoration: underline;
            }
            section::before {
              display: ${state.isDark ? "block" : "none"};
            }
            .projects-module--project--1zdcJ::before {
              display: ${state.isDark ? "block" : "none"};
            }
            nav h1.dark-theme {
              display: ${state.isDark ? "block" : "none"};
            }
            nav h1.light-theme {
              display: ${state.isDark ? "none" : "block"};
            }
          `}
        />
        {children}
      </div>
      <footer>
        <p>Copyright 2021 Mohammad Kharma</p>
        <p>Angetrieben von Gatsby</p>
      </footer>
    </div>
  )
}
