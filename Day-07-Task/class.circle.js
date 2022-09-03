//Class-circle
class circle
{
    constructor(radius=1.0,color="red")
    {
        this.radius=radius;
        this.color=color;
    }
    toString(radius=this.radius)
    {
        this.radius=radius;
return `After converting to String ${(this.radius).toString + (this.color).toString()}`

    }
    circle()
        {
          return `color is ${this.color}and radius is ${this.radius}` ; 
        }
        circle(radius)
        {
            this.radius=radius;
            return `raius is ${this.radius}`;
        }
    circle(radius,color)
    {
        this.radius=radius;
        this.color=color;
        return `radius is ${this.radius} and color is ${this.color} `;
    }
setRadius(radius=1.0)
{
this.radius=radius;
}
setRadius()
{
    return `the radius by get and set is${this.radius}`;

}
setColor(color="red")
{
this.color=color;
}
getColor()
{
    return `the color by get and set is${this.color}`;

}

getArea()
{
    return `the area is ${(this.radius) * (this.radius) * 4}`;
}

getCircumference()
{
    return `the circumferance is ${(this.radius)*2 *(Math.PI)}`;
}
}
let bangle=new circle(6,"black");
console.log(bangle);
console.log(bangle.circle());
console.log(bangle.circle(5));
console.log(bangle.circle(4,"white"));

bangle.setRadius();
console.log(bangle.getRadius);
bangle.setColor();
console.log(bangle.getColor());
console.log(bangle.toString(6))
