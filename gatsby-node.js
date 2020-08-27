const path = require(`path`)
const slug = require(`slug`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async({graphql, actions, reporter}) => {
  const {createPage} = actions
  const result = await graphql(
    `
      {
        allPostsJson(limit:1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // Create post pages.
  const postTemplate = path.resolve(`src/templates/post-template.js`)
  result.data.allPostsJson.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${slug(edge.node.id)}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}