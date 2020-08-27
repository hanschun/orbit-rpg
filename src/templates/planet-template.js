import React from 'react'
import Layout from '../components/layout'
import PlanetDetail from '../components/planet-detail.js'
import {graphql} from 'gatsby'

export default function PlanetTemplate({data}) {
  return (
    <Layout>
      <PlanetDetail planet={data.planetsJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($heading: String!) {
    # select the planet that equals this heading
    planetsJson(heading: { eq: $heading}) {
      ...PlanetDetail_details
    }
  }
`