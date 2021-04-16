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
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              text-decoration: none;
            }

            body {
              font-family: "Bitter", serif;
              background-color: ${state.isDark
                ? theme.dark.background
                : theme.light.background};
              background-image: url(../../../static/bg.jpg);
              background-size: 100%;
            }
          `}
        />
        {children}
      </div>
      <footer>
        <p>Copyright 2021 Mohammad Kharma</p>
      </footer>
    </div>
  )
}

// const Layout = ({ children }) => {
//   const { state } = useContext(Context)

//   const theme = useTheme()

//   return (
//     <div>
//       <Global
//         styles={css`
//           * {
//             box-sizing: border-box;
//             margin: 0;
//             padding: 0;
//           }

//           body {
//             background-color: ${state.isDark
//               ? theme.dark.background
//               : theme.light.background};
//           }
//         `}
//       />

//       {children}
//     </div>
//   )
// }

// export default Layout
