const path = require(`path`)
const slug = require(`slug`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async({graphql, actions, reporter}) => {
  const {createPage} = actions

  /**
   * QUERY POSTS DATA
   **/
  const postQuery = await graphql(
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
  if (postQuery.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // Create post pages.
  const postTemplate = path.resolve(`src/templates/post-template.js`)
  postQuery.data.allPostsJson.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/posts/${slug(edge.node.id)}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  /**
   * QUERY PLANETS DATA
   **/
  const planetQuery = await graphql(
    `
      {
        allPlanetsJson(limit:1000) {
          edges {
            node {
              heading
            }
          }
        }
      }
    `
  )
  if (planetQuery.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // Create planet pages.
  const planetTemplate = path.resolve(`src/templates/planet-template.js`)
  planetQuery.data.allPlanetsJson.edges.forEach(edge => {
    createPage({
      path: `/planets/${slug(edge.node.heading)}/`,
      component: slash(planetTemplate),
      context: {
        heading: edge.node.heading,
      },
    })
  })

  /**
   * QUERY USERS DATA
   **/
  const userQuery = await graphql(
    `
      {
        allUsersJson(limit:1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  if (userQuery.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // Create user pages.
  const userTemplate = path.resolve(`src/templates/user-template.js`)
  userQuery.data.allUsersJson.edges.forEach(edge => {
    createPage({
      path: `/users/${slug(edge.node.id)}/`,
      component: slash(userTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}