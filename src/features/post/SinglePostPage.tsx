import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { PostAuthor } from './PostAuthor'

export const SinglePostPage = () => {
    const { postId } = useParams()
    const post = useAppSelector(state => 
        state.posts.find(post => post.id === postId)
    )

    if(!post) {
        return(
            <section>
                <h2>Post not found :(</h2>
            </section>
        )
    }

  return (
    <section>
        <article>
            <h2> {post.title} </h2>
            <p> {post.content} </p>
            <PostAuthor userId={post.id}/>
            <Link to={`../editPost/${postId}`} > Edit Post</Link>
        </article>
    </section>
  )
}
