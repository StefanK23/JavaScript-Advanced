class point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return (Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2));
    }
}

const p1 = new point(1, 1);
const p2 = new point(4, 5);

console.log(p1, p2);
console.log(point.distance(p1,p2));
console.log(point.distance(p2,p1));
          