import React, { useEffect, useRef } from 'react'
import { BallMovement } from './BallMovement'
import Brick from './Brick'
import data from './data'
import WallCollision from './util/WallCollision'

let bricks = []
export const Canvas = () => {
    const canvasRef = useRef(null)
      let { ballObj, brickObj } = data
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const ctx = canvas.getContext('2d')

        const render = () => {
          
          //asing bricks
          let newBrickSet = Brick(4, bricks, canvas, brickObj)
          if(newBrickSet && newBrickSet.length > 0){
            bricks = newBrickSet
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          //display bricks
          bricks.map(brick => {
            return brick.draw(ctx)
          })

          BallMovement(ctx, ballObj)
          WallCollision(ballObj, canvas)
          

          requestAnimationFrame(render)
        }
        render()
    }, [])
  return (
    <div>
        <h4>CANVAS</h4>
       <canvas ref={canvasRef} ></canvas> 
    </div>
    
  )
}
