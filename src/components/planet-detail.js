import React from 'react'
import { graphql } from 'gatsby';
import typography, { rhythm, scale } from '../utils/typography'
import presets from '../utils/presets'

export default function PlanetDetail({planet}) {
  const {heading} = planet

  return (
    <div
      css={{
        background: `white`,
        display: `flex`,
        alignItems: `stretch`,
        flexDirection: `column`,
        width: `100%`,
        [presets.Tablet]: {
          flexDirection: `row`,
          marginTop: rhythm(1),
        },
      }}
    >
      <div
        css={{
          ...scale(-2 / 5),
          lineHeight: typography.options.baseLineHeight,
        }}
      >
        <div data-testid='post-detail-text'>
          {heading}
        </div>
      </div> 
    </div>
  )
}

export const planetDetailFragment = graphql`
  fragment PlanetDetail_details on PlanetsJson {
    heading
    subjects
  }
`
