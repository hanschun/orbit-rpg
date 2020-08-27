import React from 'react'
import styles from './user.module.css'

export default function User(props) {
  return (  
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.name}</h2>
        <p className={styles.bio}>{props.bio}</p>
      </div>
    </div>
  )
}
