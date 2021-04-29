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
  ],
  siteMetadata: {
    title: "Web Developmer - Portfolio",
    description: "a portfolio for a web developer",
    author: "Mohammad Kharma",
    copyright: "This website is copyright 2021",
    contact: "mohammad.kh.8688@gmail.com",
    type: "website",
    url: "https://zealous-kare-ed9156.netlify.app/",
    keywords: "Javascript html css web development frontend design deploy data",
  },
}
