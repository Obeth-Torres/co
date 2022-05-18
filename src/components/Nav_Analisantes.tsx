import React from 'react'
import './nav_analisantes.css'
import { FaHome } from "react-icons/fa";
import { Logo } from './Logo';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';


const Nav_Analisantes   = () => {  
  const caso = useAppSelector((state) => state.ficha)
  
  return (    
    <div className='nav_ate'>
      
      <div className="nav1">
        <div className='home'><Link to='/' ><FaHome className='home_icon'/></Link> </div>
        <div className="ata_ate">
          <div className='caso'>Caso:</div>  
          <div className='name'> {caso.name} </div>
        </div>
        <div className="log"> <Logo/> </div>  
      </div>      

      <div className='nav2'>
        <Link style={{textDecoration: 'none'}} to='ficha' ><div >Ficha del caso </div></Link>   
        <Link style={{textDecoration: 'none'}} to='familiograma' ><div> Familiograma </div> </Link> 
        <Link style={{textDecoration: 'none'}} to='sociograma' > <div >Sociograma</div></Link> 
        <Link style={{textDecoration: 'none'}} to='orientacion' ><div >Orientación de la Cura</div></Link>                 
      </div>
      
      <Outlet/>

      <div className="navAnalisantesBotton">
        <div className='nav2'>
          <Link style={{textDecoration: 'none'}} to='ficha' ><div >Ficha del caso </div></Link>   
          <Link style={{textDecoration: 'none'}} to='familiograma' ><div> Familiograma </div> </Link> 
          <Link style={{textDecoration: 'none'}} to='sociograma' > <div >Sociograma</div></Link> 
          <Link style={{textDecoration: 'none'}} to='orientacion' ><div >Orientación de la Cura</div></Link>   
        </div>
        <p>Gracias por interesarte en el proyecto</p>
      </div>
    </div>
  )
}
export default Nav_Analisantes
