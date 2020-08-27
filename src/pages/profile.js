import React from 'react'
import Layout from '../components/layout'
import ProfileDetails from '../components/profile-detail';
import {graphql} from 'gatsby'
/**
 * This should function as a generic profile of a user suitable to 
 * allow players to see details
 * @params id: id string of user to display profile of
 */
export default function Profile({data}) {
  const [user, setUser] = React.useState({
    name: '',
    id: '',
    avatar: '',
    bio: '',
    favoriteWords: [],
    relationships: [],
    posts: [],
    specialMessages: [],
  })
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    console.log(JSON.stringify(data.usersJson))
    if (data.usersJson) {
      let u = data.usersJson
      setUser({
        ...user,
        name: u.name,
        id: u.id,
        avatar: u.avatar,
        bio: u.bio,
        favoriteWords: u.favoriteWords
      });
    }
   
    setLoaded(true)
    return (() => {})
  }, [user, data])

  //use Effect to fetch user as needed
  if (loaded) {
    return (
      <Layout>
        <h1>My Profile</h1>
        <ProfileDetails user={user} />
      </Layout>)
  } else {
    return (<div>Loading...</div>)
  }
}

// should be able to extract this into a query that matches a user cookie?
export const pageQuery = graphql`
  query($id: String! = "01") {
    # select the user that equals this id
    usersJson(id: { eq: $id}) {
      ...UserDetail_details
    }
  }
`