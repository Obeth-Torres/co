export const Brick = (level, bricks, canvas, brick) => {
    let newbricks =[]
    if (!bricks) {
        return []
    }
    if(bricks.length >= 10 * level) {
        return
    }
    for (let i = 0; i<10 * level; i++){
        let newBrick = new SingleBrick(
            brick.bx + brick.width,
            brick.by,
            brick.width,
            brick.height,
            brick.color
        )
        newbricks.push(newBrick)
        brick.bx += brick.width + 1;
        if(brick.bx + brick.width >= canvas.width){
            brick.bx = 10;
            brick.by += brick.height + 1;
        }
    }
  return newbricks
}
export default Brick
class SingleBrick {
    constructor(x, y, w, h, c) {
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = c;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red" ;
        
        ctx.fill();
      }
}