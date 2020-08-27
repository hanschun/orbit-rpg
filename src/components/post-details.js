import React from 'react'
import typography, { rhythm, scale } from '../utils/typography'

export default function PostDetails({post}) {
  const {
    sender,
    thumbUps,
    thumbDowns,
    body
  } = post;

  return (
    <div
      css={{
        ...scale(-2 / 5),
        lineHeight: typography.options.baseLineHeight,
      }}
    >
      <div
        css={{
          marginBottom: rhythm(1),
          overflow: `hidden`,
        }}
      >
        <strong
          data-testid='post-detail-likes'
          css={{
            float: `left`,
          }}
        >
          {thumbUps} Thumb Ups
        </strong>
      </div>
      <div
        css={{
          marginBottom: rhythm(1),
          overflow: `hidden`,
        }}
      >
        <strong
          data-testid='post-detail-likes'
          css={{
            float: `left`,
          }}
        >
          {thumbDowns} Thumb Downs
        </strong>

      </div>
      <div data-testid='post-detail-text'>
        <strong>{sender}</strong> {body}
      </div>
    </div>
  )
}
