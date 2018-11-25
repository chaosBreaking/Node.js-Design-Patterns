function createProxy(subject) {
  //获取本体对象的原型，实现伪继承
  const proto = Object.getPrototypeOf(subject);
  //代理对象
  function Proxy(subject) {
    this.subject = subject;
  }
  Proxy.prototype = Object.create(proto);
  //代理方法
  Proxy.prototype.hello = function() {
    return this.subject.hello() + ' World!';
  };
  //委托给本体对象
  Proxy.prototype.goodbye = function() {
    return this.subject.goodbye.apply(this.subject, arguments)
  }

  return new Proxy(subject)
}

function createProxy2(subject) {
  return {
    //代理方法
    hello: () => {
      return subject.hello() + 'World';
    },
    //委托给本体对象
    goodbye: () => {
      return subject.goodbye.apply(subject, arguments)
    }
  }
}

function createProxy3(subject) {
  const orihello = subject.hello;
  subject.hello = () => {
    return orihello.call(this) + 'World'
  }
}

const brands = {
  car: 'volkswagon',
  drink: 'coca cola',
}
const uppercaseBrands = new Proxy(brands, {
  get: (target, property) => target[property].toUpperCase()
});
console.log(uppercaseBrands.car, uppercaseBrands.drink);

const evenNumbers = new Proxy([], {
  get: (target, index) => index * 2,
  has: (target, number) => number%2 === 0 
});
console.log(evenNumbers[0],evenNumbers[1],evenNumbers[2]);
console.log(1 in evenNumbers, 2 in evenNumbers);
