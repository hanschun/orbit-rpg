import React from 'react'
import * as users from '../../data/users.json'
import User from '../components/user'

/**
 * This should function as a generic profile of a user suitable to 
 * allow players to see details
 * @params id: id string of user to display profile of
 */
export default function Profile(props) {
  const {id} = props;
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
    // if no user is specified by the props.id field, get default user
    if (!id) {
      setUser({
        ...user,
        name: users[0].name,
        id: users[0].id,
        avatar: users[0].avatar,
        bio: users[0].bio,
        favoriteWords: users[0].favoriteWords
      });
    }
    setLoaded(true)
    return (() => {})
  }, [id, user])

  //use Effect to fetch user as needed
  if (loaded) {
    return (
      <main>
        <h1>My Profile</h1>
        <User 
          name={user.name}
          avatar={user.avatar}
          bio={user.bio}
        />
      <div>Id: {user.id}</div>  
      <div>Favorites: {user.favoriteWords.join(', ')}</div>
      <div>Posts made: {user.posts.length}</div>
      <div>Special messages: {user.specialMessages.length}</div>
      <div>Relationships: {user.relationships.length > 0 ? (
        <div>ships</div>
        ) : (
          <p>No relationships yet!</p>
        )}</div>
      </main>)
  } else {
    return (<div>Loading...</div>)
  }
  

}