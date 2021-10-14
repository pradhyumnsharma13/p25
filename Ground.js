class Ground {

    // 2 - properties and functions
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body);
    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue");
        rectMode(CENTER)
        rect(0, 0, this.w, this.h)
        pop();
    }




}