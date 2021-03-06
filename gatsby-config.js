/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Dickytall Gatsby Site',
      description: 'Taivan Enkhbayar'

  }
,
  pathPrefix: "/Gatsby_Site",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
       options: {
        name: 'src',
        path: `${__dirname}/src/`
        }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options:{
              maxWidth: 650,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }

  ]
}
