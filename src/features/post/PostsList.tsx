import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { AddPostForm } from './AddPostForm'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
    const posts = useAppSelector(state => state.posts)
    const renderedPosts = posts.map(post => {
      return(
        <article key={post.id} className='article' >
            <h3>{post.title}</h3>
            <p> {post.content} </p>
            <div className='author'>
              <PostAuthor userId={post.id} />
            </div>           

            <Link to={`post/${post.id}`} className='vinculo' >
              View single post
            </Link>
        </article>
      )        
    })
  return (
    
    <section>
      <AddPostForm/>
      <div className="postList">
        <h2> Posts List</h2>
        {renderedPosts}
      </div>
        
    </section>
  )
}
