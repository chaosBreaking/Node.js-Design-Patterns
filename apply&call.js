//example-1
redLight = {
  color: 'red'
};
blueLight = {
  color: 'blue'
};
color = 'white';
function Light(mode, time) {
  console.log(`Lighting --- use color ${this.color} in mode ${mode} at ${time}`);
};
Light();
Light.call(redLight, 'low', 'daylight')
Light.apply(blueLight, ['high', 'night'])

//example-2
function myAdd(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
};
myAdd.call(myAdd, 1, 2);
myAdd.call(myAdd, ...[1,2]);
myAdd.apply(myAdd, [1,2]);
myAdd(...[1,2]);

//example-3
Math.max(1,2,3,4,5);
Math.max(...[1,2,3,4,5]);
Math.max.call(Math, [1,2,3,4,5]);

//example-4

function Person(name = 'Anonymous', gender = 'unknow') {
  this.name = name;
  this.gender = gender;
}
Person.prototype.hello = function() {
  console.log(`${this.name} said hello`)
}

let p1 = {}
Person.call(p1)
console.log(p1)