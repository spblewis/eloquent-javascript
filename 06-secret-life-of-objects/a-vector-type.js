class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
     }
    
    plus(otherVector) {
      const newX = this.x + otherVector.x;
      const newY = this.y + otherVector.y;
      return new Vec(newX, newY);
    }
    
    minus(otherVector) {
      const newX = this.x - otherVector.x;
      const newY = this.y - otherVector.y;
      return new Vec(newX, newY);
    }
  
    get length() {
         return Math.sqrt(this.x ** 2 + this.y ** 2); 
    }
    
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5