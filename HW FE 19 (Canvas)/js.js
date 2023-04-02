const canvas = document.querySelector('#my_canvas')
const ctx = canvas.getContext("2d")
canvas.width = 500;
canvas.height = 500;


class Circle {
    constructor(x = 0, y = 0, float = 1, color = 'black') {
        this.x = x;
        this.y = y;
        this.float = float;
        this.color = color;
    };
    area() {
        return console.log(Math.round(Math.PI * (this.float ** 2)));
    }
    render(ctx) {
        ctx.beginPath()
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.float, 0, Math.PI * 2)
        ctx.stroke()
    }
    style(ctx, color, lineWidth,) {
        ctx.fillStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.fill();
    }
}

const newObj = new Circle(200, 200, 50, "red");
newObj.render(ctx);
newObj.style(ctx, "blue",15); 
newObj.area();







// ctx.beginPath()
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 10;
// ctx.fillStyle = 'yellow'
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI*2,)
// ctx.stroke()
// ctx.fill()