const eventEmit = require('events');
class Roee extends eventEmit{
  constructor(executor) {
    super();
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
  }
}
let ticker = new Roee((emit) => {
  let count = 0;
  setInterval(() => emit('tick', count++), 1000)
})
ticker.on('tick', (count)=>{
  console.log(`tic tac - ${count}`)
})