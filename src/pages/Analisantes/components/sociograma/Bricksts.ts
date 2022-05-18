import React from 'react'

const Bricksts = () => {
    let newbricks = []

    for(let i = 0; i <10 ; i++){
        let newBrick = new Point()
        newbricks.push(newBrick)        
    }    
  return newbricks  
}
export default Bricksts

class Point {
    bx: number;
    by: number;
    w: number;
    h: number;
    color: string;
    constructor() {
        this.bx = Math.random() * 1000;
        this.by = Math.random() * 1000;
        this.w = 100;
        this.h = 20;
        this.color = 'red';
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(this.bx, this.by, this.w, this.h);
        ctx.fillStyle = "red" ;
        
        ctx.fill();
    }
    update(ctx: CanvasRenderingContext2D){
        this.bx += 1
        this.by += 20
    }
}