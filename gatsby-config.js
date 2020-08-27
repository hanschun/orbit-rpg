/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Orbit'
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Orbit`,
        short_name: `Orbit`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-offline'
    // TODO: add specific pages to pre-cache for offline use
    /* 
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/posts/*'] <-- this seems very impractical but the general idea here
      }
    }
    */
  ],
}
