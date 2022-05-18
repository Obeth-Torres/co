import React from 'react'


export const Particles = () => {
    let setparticles = []
    for(let i=0; i<50; i++){
        let newParticle = new Particle( )
        setparticles.push(newParticle)
    }

  return setparticles
}

class Particle {
    x: number
    y: number
    dx: number
    dy: number
    d: number
    color: string;

    constructor() {
        this.x = Math.random() * 1000
        this.y = Math.random() * 1000
        this.dx = (Math.random() * 5)  -1.5
        this.dy = (Math.random() * 5 ) -1.5
        this.d = 10
        this.color = '#c2ac0e'
    }
    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.d, 0, Math.PI * 2)
        ctx.fill()
    }
    moveparticle(){
        this.x += this.dx
        this.y += this.dy
    }
}