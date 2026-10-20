import PubSub from './PubSub.js';

// class ComponentA {
//   constructor(pubsub) {
//     this.name = 'ComponentA';

//     if (!(pubsub instanceof PubSub)) {
//       throw new Error(`Cannot construct ${this.name}: argument 1 is not a PubSub instance`);
//     }

//     this.pubsub = pubsub;
//   }

//   doSomething() {
//     const str = `${this.name} does something`;
//     const value = Math.random();
//     console.log(`${str} with value: ${value} and publish`);

//     this.pubsub.publish('my-channel', str, value);
//   }
// }

// class ComponentB {
//   constructor(pubsub) {
//     this.name = 'ComponentB';

//     if (!(pubsub instanceof PubSub)) {
//       throw new Error(`Cannot construct ${this.name}: argument 1 is not a PubSub instance`);
//     }

//     this.pubsub = pubsub;
//     this.pubsub.subscribe('my-channel', this.reactToSomething);

//   }

//   reactToSomething = (str, value) => {
//     console.log(`${this.name} reacts to a message from 'my-channel':`, str, value);
//   }
// }

// const pubsub = new PubSub();

// const component0 = new ComponentA(pubsub);

// const component1 = new ComponentB(pubsub);
// const component2 = new ComponentB(pubsub);

// setInterval(() => {
//   component0.doSomething();
// }, 1000);


const com = new PubSub();

com.subscribe('/synth/0', args => {
  console.log('update synth 0:', args);
});

setInterval(() => {
  com.publish('/synth/0', ['freq', Math.round(Math.random() * 400 + 200)]);
}, 1000);