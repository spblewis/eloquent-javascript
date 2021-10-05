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
  
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false