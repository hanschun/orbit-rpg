import React from 'react'
import { graphql } from 'gatsby';
import typography, { rhythm, scale } from '../utils/typography'
import presets from '../utils/presets'
import ProfileDetail from '../components/profile-detail'

export default function UserDetail({user}) {
  
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
        <ProfileDetail user={user} />
      </div> 
    </div>
  )
}

export const userDetailFragment = graphql`
  fragment UserDetail_details on UsersJson {
    id
    avatar
    name
    bio
    favoriteWords
  }
`
