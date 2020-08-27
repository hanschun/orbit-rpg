import React from 'react'
import User from './user'
import PostDetails from './post-details'
import { graphql } from 'gatsby';
import { rhythm } from '../utils/typography'
import presets from '../utils/presets'

export default function PostDetail({post}) {
  const {
    id
  } = post;

  return (
    <div
      // onClick={e => e.stopPropagation()}
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
      {/* <div
        to={`/${id}/`}
        css={{
          display: `block`,
          backgroundColor: `lightgray`,
          flex: `1 0 0%`,
          width: `100%`,
          position: `relative`,
        }}
      >
        <div
          css={{
            flexDirection: `column`,
            flexShrink: 0,
            position: `relative`,
            paddingBottom: `100%`,
            overflow: `hidden`,
          }}
        >
          <div
            css={{
              flexDirection: `column`,
              flexShrink: 0,
              position: `absolute`,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </div>
      </div> */}
      {/* <div
        css={{
          background: `white`,
          padding: rhythm(3 / 4),
          display: `block`,
          [presets.Tablet]: {
            display: `none`,
          },
        }}
      >
        <PostDetails post={post}/>
      </div> */}
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
