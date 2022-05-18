import React, { useEffect, useRef } from 'react'
import { BallMovement } from './BallMovement'
import './Sociograma.css'
import data from './data'
import WallCollision from './util/WallCollision'
import { Particles } from './Particles'

let particles = []
export const Sociograma = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    
    useEffect(() => {
      const canvas = canvasRef.current;   
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;  
      let newparticles = Particles()
                
      const render = () => {
        particles = newparticles
        if(canvas){
          contextRef.current = canvas.getContext('2d')
          let ctx = contextRef.current; 
          let { ballObj } = data        
                   
          ctx!.clearRect(0, 0, canvas.width, canvas.height)
          particles.map(particle => {
            return (
              particle.draw(ctx!)
            ) 
          })   
          particles.map(particle => {

            if(particle.x > canvas.width || particle.x < 0) {
              particle.dx = -particle.dx
            }
            if(particle.y > canvas.height || particle.y < 0){
              particle.dy = - particle.dy
            }
            return (
              particle.moveparticle()
            ) 
          })    
          
          BallMovement(ctx, ballObj)
          WallCollision(ballObj, canvas)
          let opacity = 1
          particles.map(particle => {
            let distance = ((particle.x - ballObj.x) * (particle.x - ballObj.x)) 
            + ((particle.y - ballObj.y) * (particle.y - ballObj.y));
            if(distance < (canvas.width / 5) * (canvas.height / 5)) {
              opacity = 1 - (distance/500000)
              ctx!.strokeStyle = 'rgb(33,180,195' + opacity +')'
              ctx!.lineWidth = 5;
              ctx!.beginPath();
              ctx!.moveTo(ballObj.x, ballObj.y);
              ctx!.lineTo(particle.x, particle.y);
              ctx!.stroke();
            }
          })

        }
        requestAnimationFrame(render)
      }
      render()
    }, [])

  return (
    <div className='sociogramaPage'>
      <h2>Sociograma</h2>
      <p>proyecto en curso...</p>
        
        <canvas ref={canvasRef} />
    </div>
  )
}