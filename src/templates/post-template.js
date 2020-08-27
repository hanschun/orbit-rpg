import React from 'react'
import Layout from '../components/layout'
import PostDetail from '../components/post-detail.js'
import {graphql} from 'gatsby'

export default function PostTemplate({data}) {
  return (
    <Layout>
      <PostDetail post={data.postsJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    # select the post that equals this id
    postsJson(id: { eq: $id}) {
      ...PostDetail_details
    }
  }
`