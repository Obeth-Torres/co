
import { Link, Outlet } from 'react-router-dom'
import './BlogStyle.css'


export const Blog = () => {
  return (
    <div className='blog'>
      <h1>Blog</h1>
      <Outlet/>
    </div>
  )
}
