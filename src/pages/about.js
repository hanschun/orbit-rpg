import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default function About({data}) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>Orbit is a social network that lets you connect with people who have the same interests.</p>
      <p>Try finding a Planet that interests you today!</p>
    </Layout>
  )
}