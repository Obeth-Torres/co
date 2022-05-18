import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useAppDispatch()

    const users = useAppSelector(state => state.users)

    const onTitleChanged =(e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onContentChanged = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        setUserId(e.target.value)
    }
    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(postAdded(title, content, userId))
            setTitle('')
            setContent('')
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map( user => (
        <option key={user.id} value={user.id} >
            {user.name}
        </option>
    ))
  return (
      <section className='postForm'>
          <h2 >Add a New Post</h2>
          <form >
              <label htmlFor="postTitle">Post Title: </label>
              <input type="text"
              id='postTitle'
              name='postTitle'
              value={title}
              onChange={onTitleChanged} />
              <label htmlFor="portContent">Content: </label>
              <textarea name="postContent" id="postContent" value={content}
              onChange={onContentChanged} />
              <label htmlFor='postAuthor'>Author</label>
              <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                  <option value="" ></option>
                  {userOptions}
              </select>

              <button type='button' onClick={onSavePostClicked} disabled={!canSave} >Save Post</button>
          </form>
      </section>
  )
}
