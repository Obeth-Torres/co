import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../../styles/styles'
import './ate.css'
import { Familioficha } from './components/Familiograma/Familioficha'
import { Ficha } from './components/ficha/Ficha'
import { Filosofica } from './components/orientacion/Filosofica'
import { Psicoanalitica } from './components/orientacion/Psicoanalitica'
import { Psicologica } from './components/orientacion/Psicologica'
import { SociogramaSvg } from './components/sociograma/SociogramaSvg'
const Analisante = () => {
  return (   
    <div className="bodyAnalisante">
      <div className="box1">
        <div className="ficha"> <Ficha/> </div>
        <div>
          <div className='fichaFamiliogr'>
            <h3>FAMILIOGRAMA</h3>
            <Familioficha/>
          </div>
          <div className="sociograma">
            <h3>SOCIOGRAMA</h3>
            <SociogramaSvg/>
          </div>
        </div>          
      </div>

      <div className="box2">
        <h2>Orientacion de la Cura</h2>
        <div className='orientations'>        
            <div className="psichology"><Psicologica /> </div>
            <div className="psichoanalisis"><Filosofica/> </div>
            <div className="philosophy"><Psicoanalitica/> </div>                     
        </div>
      </div>

      <div className="box3">
        
        <h3>Herramientas vinculadas al bienestar de la vida corriente</h3>
        <div className="herramientas">
          <div className='meditacion'>Meditación</div>
          <div className='nutricion'>Nutrición</div>
          <div className='deporte'>Deporte</div>
          <div className='cocinar'>Cocina</div>
          <div className='tiempo'>Organización del Tiempo</div>
          <div className='vocacion'>Orientación vocacional</div>
          <div className='sueño'>higiene del sueño</div>
          <div className='asesoria'>asesoramiento legal</div>
          <div className='asesorF'>asesoramiento financiero</div>
          
        </div>
        <Btn><Link to='../otrasConsultas' style={{textDecoration: 'none', color: '#e4f2f3'}}>consulta</Link></Btn>        
        
      </div>     
    </div> 
    
  )
}
export default Analisante