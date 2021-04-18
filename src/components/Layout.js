import React, { useContext } from "react"
import Navbar from "./Navbar"
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

            nav .theme-toggle p b {
              color: ${state.isDark ? "#63cdff" : theme.light.font};
            }

            nav .links a:hover {
              text-decoration: underline;
            }
            nav .links a.active {
              border-bottom: none;
              text-shadow: ${state.isDark
                  ? "0 0 10px #63cdff"
                  : theme.light.borderColor},
                ${state.isDark ? "0 0 20px #63cdff" : "none"},
                ${state.isDark ? "0 0 40px #63cdff" : "none"},
                ${state.isDark ? "0 0 80px #63cdff" : "none"},
                ${state.isDark ? "0 0 160px #63cdff" : "none"};
              -webkit-box-reflect: ${state.isDark
                ? "below -120% linear-gradient(#0002, #0008)"
                : "none"};
              text-decoration: underline;
            }
            body::before {
              display: ${state.isDark
                ? theme.display.none
                : theme.display.block};
            }
            body::after {
              display: ${state.isDark ? "block" : "none"};
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
      {/* <footer>
        <p>Dark Mode is {state.isDark ? "on" : "off"}</p>
        <input
          onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          id="checkbox"
          type="checkbox"
          name=""
          checked={state.isDark ? true : false}
        />
        <p>Copyright 2021 Mohammad Kharma</p>
      </footer> */}
    </div>
  )
}
