import React from 'react'
import './navAnalistas.css'
import { AiFillAudio, AiFillYoutube,  } from "react-icons/ai";
import { FaBlog, FaSchool,FaHome, FaProjectDiagram } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Logo } from './Logo'


const Nav_Analistas = () => {
  return (
    <div>
      <div className='navAnalistas'>

        <div className="home"> 
          <Link to='/' ><FaHome className='home_icon'/></Link> 
        </div>

        <div className='rutas'>
          <Link style={{textDecoration: 'none'}} to='proyects' > <div className="link"><FaProjectDiagram className='icon'/><p>Proyectos</p> </div> </Link>          
          <Link style={{textDecoration: 'none'}} to='escuela' > <div className="link"><FaSchool className='icon'/><p>Escuela</p> </div> </Link>
          <Link style={{textDecoration: 'none'}} to='blog' > <div className="link"><FaBlog className='icon'/><p>Blog</p>  </div> </Link>
          <Link style={{textDecoration: 'none'}} to='videos'><div className="link"> <AiFillYoutube className='icon'/><p>Videos</p> </div> </Link>
          <Link style={{textDecoration: 'none'}} to='podcasts'> <div className="link"> <AiFillAudio className='icon'/><p>Podcast</p> </div> </Link>
            
        </div>
        
        <div className="logo">
          <div className="ob">
            <Logo/>
          </div>
        </div> 
      
      </div>
      <Outlet/>
      
      <div className="navAnalistasBottom">
      <div className='rutas'>
          <Link style={{textDecoration: 'none'}} to='proyects' > <div className="link"><FaProjectDiagram className='icon'/><p>Proyectos</p> </div> </Link>          
          <Link style={{textDecoration: 'none'}} to='escuela' > <div className="link"><FaSchool className='icon'/><p>Escuela</p> </div> </Link>
          <Link style={{textDecoration: 'none'}} to='blog' > <div className="link"><FaBlog className='icon'/><p>Blog</p>  </div> </Link>
          <Link style={{textDecoration: 'none'}} to='videos'><div className="link"> <AiFillYoutube className='icon'/><p>Videos</p> </div> </Link>
          <Link style={{textDecoration: 'none'}} to='podcasts'> <div className="link"> <AiFillAudio className='icon'/><p>Podcast</p> </div> </Link>
            
        </div>
      </div>

    </div>
    
  )
}
export default Nav_Analistas