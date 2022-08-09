import React from 'react'
import './coreUi.css'
import { Link, Outlet } from 'react-router-dom'

export const CoreUi = () => {

  return (
    <div className='landPage'>
      <h1>CONSULTA PSICOANALÍTICA ONLINE</h1>

      <div className="links">

        
        <div>
          <p>Consulta como </p>
          <div className='outer button'>
            <Link to={'analistas'} ><button> Analista</button></Link>            
            <span></span>
            <span></span>
          </div>         
        </div>

        <div>
           <p>Consulta como</p>
          <div className="outer button">
            <Link to={'analisantes'} ><button >Analizante</button></Link> 
            <span></span>
            <span></span>
          </div>
          
          
        </div>       
      </div>
    </div>
  )
}
