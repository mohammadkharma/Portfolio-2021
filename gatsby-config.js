/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-md`,
        path: `${__dirname}/src/projects-md/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-md-ar`,
        path: `${__dirname}/src/projects-md-ar/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-md-de`,
        path: `${__dirname}/src/projects-md-de/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon.png", // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-offline",
  ],
  siteMetadata: {
    title: "Web Developmer - Portfolio",
    description: "a portfolio for a web developer",
    author: "Mohammad Kharma",
    copyright: "This website is copyright 2021",
    contact: "mohammad.kh.8688@gmail.com",
    type: "website",
    url: "https://mohammad-kharma-portfolio.netlify.app/",
    keywords: "Javascript html css web development frontend design deploy data",
  },
}
