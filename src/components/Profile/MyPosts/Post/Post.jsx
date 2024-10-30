import React from 'react'
import s from './Post.module.css'
import avatar from '../../../../image/avatar.webp'

const Post = () => {
  return (
    <div className={s.item}>
      <img src={avatar} alt='img'></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post
