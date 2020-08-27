import React from 'react'
import Layout from '../components/layout'
import UserDetail from '../components/user-detail.js'
import {graphql} from 'gatsby'

export default function UserTemplate({data}) {
  return (
    <Layout>
      <UserDetail user={data.usersJson} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    # select the user that equals this id
    usersJson(id: { eq: $id}) {
      ...UserDetail_details
    }
  }
`