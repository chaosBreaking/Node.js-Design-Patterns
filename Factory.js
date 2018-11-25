const stampit = require('stampit');
const character = stampit({
  props: {
    name: 'Anonymous',
    lifePoint: 100,
    x: 0,
    y: 0
  }
});
const mover = stampit({
  methods: {
    move(x, y) {
      this.x += x;
      this.y += y;
      console.log(`${this.name} moved to (${this.x},${this.y})`);
    }
  }
});
const shooter = stampit({
  props: {
    bullets: 6
  },
  methods: {
    shot() {
      if(this.bullets <= 0) {
        console.log('run out of bullets');
        return 0;
      }
      this.bullets -= 1;
      console.log(`${this.name} shooted`);
    }
  }
});
let Player = stampit.compose(character, mover, shooter);
let player1 = Player();
player1.name = 'kimmy';
player1.move(1,1);
player1.shot();