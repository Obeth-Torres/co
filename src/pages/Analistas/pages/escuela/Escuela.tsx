import React from 'react'
import image1 from '../../../../assets/images/discursos.svg'
import image2 from '../../../../assets/images/nudoBorromeo.svg'
import image3 from '../../../../assets/images/sexuacion.svg'


import './escuela.css'

export const Escuela = () => {
  return (
    <div className='escuela'>
      <h2> La Orientación de la Cura</h2>
      <div className="seminarios">
        <div className="seminario">
          <h3>S - 1</h3>
          <p>Les Ecrits techniques</p>
        </div>
        <div className="seminario">
          <h3>S - 2</h3>
          <p>Le moi</p>
        </div>
        <div className="seminario">
          <h3>S - 3</h3>
          <p> Pychoses</p>
        </div>
        <div className="seminario">
          <h3>S - 4</h3>
          <p>La relation d'objet</p>
        </div>
        <div className="seminario">
          <h3>S - 5</h3>
          <p>Formations de l'inconscient</p>
        </div>
        <div className="seminario">
          <h3>S - 6</h3>
          <p>Le desir</p>
        </div>
        <div className="seminario">
          <h3>S - 7</h3>
          <p>L'ethique</p>
        </div>
        <div className="seminario">
          <h3>S - 8</h3>
          <p>Le transfert</p>
        </div>
        <div className="seminario">
          <h3>S - 9</h3>
          <p>L'identification</p>
        </div>
        <div className="seminario">
          <h3>S - 10</h3>
          <p>L'angoisse</p>
        </div>
        <div className="seminario">
          <h3>S - 11</h3>
          <p>Fondaments</p>
        </div>
        <div className="seminario">
          <h3>S - 12</h3>
          <p>Problemes</p>
        </div>
        <div className="seminario">
          <h3>S - 13</h3>
          <p>L'object</p>
        </div>
        <div className="seminario">
          <h3>S - 14</h3>
          <p>Logique du fantasme</p>
        </div>
        <div className="seminario">
          <h3>S - 15</h3>
          <p>L'acte</p>
        </div>
        <div className="seminario">
          <h3>S - 16</h3>
          <p>D'un autre</p>
        </div>
        <div className="seminario">
          <h3>S - 17</h3>
          <p>L'envers</p>
        </div>
        <div className="seminario">
          <h3>S - 18</h3>
          <p>Dun discours</p>
        </div>
        <div className="seminario">
          <h3>S - 19</h3>
          <p>... Ou pire</p>
        </div>
        <div className="seminario">
          <h3>S - 20</h3>
          <p>Encore</p>
        </div>
        <div className="seminario">
          <h3>S - 21</h3>
          <p>Non dupes</p>
        </div>
        <div className="seminario">
          <h3>S - 22</h3>
          <p>R.S.I.</p>
        </div>
        <div className="seminario">
          <h3>S - 23</h3>
          <p>Le sinthome</p>
        </div>
        <div className="seminario">
          <h3>S - 24</h3>
          <p>L'insu</p>
        </div>
        <div className="seminario">
          <h3>S - 25</h3>
          <p>Le moment de conclure</p>
        </div>
        <div className="seminario">
          <h3>S - 23</h3>
          <p>Les Ecrits techniques</p>
        </div>
      </div>
      <div className="plates">
        <div>
          <h3>Los 4 discursos</h3>
          <div className="plate1">          
            <img src={image1} alt='lod 4 discursos' />
          </div>
        </div>
        <div>
          <h3>Nudo borromeo</h3>
            <div className="plate1">          
              <img src={image2} alt="Nudo Borromeo" />
            </div>
        </div>
        <div>
          <h3>Las formulas de la sexuación</h3>
          <div className="plate1">          
            <img src={image3} alt="Formulas de la sesuaxión" />
          </div>
        </div>
        
        
      </div>

      
    </div>
  )
}
