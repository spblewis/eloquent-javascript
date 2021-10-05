// Your code here (and the code from the previous exercise)
class Group {
    constructor() {
      this.group = [];
    }
    
    add(elem) {
      if (this.group.includes(elem)) return;
      this.group.push(elem);
    }
    
    delete(elem) {
      if (this.group.includes(elem)) {
        let i = this.group.indexOf(elem);
        this.group.splice(i, 1);
      }
      
    }
      
    has(elem) {
      return this.group.includes(elem);
    }
    
    static from(iter) {
      let newgroup = new Group;
      for (let elem of iter) {
        newgroup.add(elem);
      }
      
      return newgroup;
    }
    
    [Symbol.iterator] = function() {
      return new GroupIterator(this);
    }
    
  }
  
  class GroupIterator {
    constructor(group) {
      this.group = group.group;
      this.curr = 0;
      this.value;
    }
    
    next() {
      if (this.curr >= this.group.length) return {done: true};
      
      let value = this.group[this.curr];
      this.curr++;
      
      return {value, done: false};
    }
    
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c