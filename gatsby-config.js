/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-md`,
        path: `${__dirname}/src/projects-md/`,
      },
    },
  ],
  siteMetadata: {
    title: "Mohammad Kharma",
    description: "Portfolio 2021",
    copyright: "This website is copyright 2021",
  },
}
