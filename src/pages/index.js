import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

// must be checked:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const image = data.file.childImageSharp.fluid
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Develop</h2>
          <h3>Design & Deploy</h3>
          <p>Web developer & designer based in Berlin</p>
          <Link className={styles.btn} to="/projects">
            My projects
          </Link>
        </div>
        <Img className={styles.img} fluid={image} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "bewerbung.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// import React, { useContext } from "react"
// import { css } from "@emotion/core"
// import { useTheme } from "@emotion/react"
// import Context from "../store/context"
// import Layout from "../components/Layout"

// const IndexPage = () => {
//   const { state, dispatch } = useContext(Context)

//   const theme = useTheme()

//   return (
//     <Layout>
//       <div
//         css={css`
//           h1,
//           h2 {
//             color: ${state.isDark ? theme.dark.font : theme.light.font};
//           }
//         `}
//       >
//         <h1>Hello World</h1>
//         <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
//           Toggle Dark Mode
//         </button>
//         <h2>Dark Mode is {state.isDark ? "on" : "off"}</h2>
//       </div>
//     </Layout>
//   )
// }

// export default IndexPage
