import React, { useContext } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { Global, css } from "@emotion/core"
import { useTheme } from "@emotion/react"
import Context from "../store/context"

export default function Layout({ children }) {
  const { state, dispatch } = useContext(Context)
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
            nav a:hover {
              border-color: ${state.isDark
                ? theme.dark.borderColor
                : theme.light.borderColor};
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
            nav h1.one {
              display: ${state.isDark ? "block" : "none"};
            }
            nav h1.two {
              display: ${state.isDark ? "none" : "block"};
            }
          `}
        />
        {children}
      </div>
      <footer>
        <p>Dark Mode is {state.isDark ? "on" : "off"}</p>
        <input
          onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          id="checkbox"
          type="checkbox"
          name=""
          checked={state.isDark ? true : false}
        />
        <p>Copyright 2021 Mohammad Kharma</p>
      </footer>
    </div>
  )
}
