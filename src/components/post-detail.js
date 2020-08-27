import React from 'react'
import User from './user'
import PostDetails from './post-details'
import { graphql } from 'gatsby';
import { rhythm } from '../utils/typography'
import presets from '../utils/presets'

export default function PostDetail({post}) {
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
          padding: rhythm(3 / 4),
          paddingBottom: 0,
          [presets.Tablet]: {
            width: rhythm(13),
            padding: rhythm(1),
          },
        }}
      >
        <User />
        <div
          css={{
            display: `none`,
            [presets.Tablet]: {
              display: `block`,
            },
          }}
        >
          <PostDetails post={post} />
        </div>
      </div>
    </div>
  )
}

export const postDetailFragment = graphql`
  fragment PostDetail_details on PostsJson {
    id
    sender
    thumbUps
    thumbDowns
    body
    subject
  }
`
