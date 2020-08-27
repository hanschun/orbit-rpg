import React from 'react'
import User from './user'

export default function ProfileDetails({user}) {
  const stubbedUser = {
    posts: [],
    relationships: [],
    specialMessages: []
  }
  return (
    <>
      <User 
            name={user.name}
            avatar={user.avatar}
            bio={user.bio}
          />
      <div>Id: {user.id}</div>  
      <div>Favorites: {user.favoriteWords.join(', ')}</div>
      <div>Posts made: {stubbedUser.posts.length}</div>
      <div>Special messages: {stubbedUser.specialMessages.length}</div>
      <div>Relationships: {stubbedUser.relationships.length > 0 ? (
        <div>ships</div>
        ) : (
          <p>No relationships yet!</p>
        )}</div>
    </>
  )
}