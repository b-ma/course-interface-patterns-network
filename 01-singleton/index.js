
// module
export class MySingleton {
  static instance = null;

  static getInstance() {
    if (MySingleton.instance) {
      return MySingleton.instance;
    }

    MySingleton.instance = new MySingleton();
    return MySingleton.instance;
  }

  #random = null;

  /** Cannot make it really private in javascript */
  constructor() {
    this.#random = Math.random();
  }

  get value() {
    return this.#random;
  }
}

// testing
const instance1 = MySingleton.getInstance();
const instance2 = MySingleton.getInstance();

console.log(instance1.value, instance2.value);
console.log('same instance:', instance1 === instance2);