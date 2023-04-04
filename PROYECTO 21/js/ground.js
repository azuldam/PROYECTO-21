class Ground {

    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var groundop = {
        isStatic: true

        }
        this.body = Bodies.rectangle(x, y, width, height, groundop);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rectMode (CENTER)
        fill ("yellow")
        rect(0,0, this.width, this.height)
        pop()
    }
}