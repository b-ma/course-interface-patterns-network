export default class PubSub {
  constructor() {
    this.channels = new Map();
  }

  // naming variants:
  // - emit
  // - dispatch
  publish(channel, ...args) {
    if (!this.channels.has(channel)) {
      console.log(`No subscriber to channel "${channel}"`)
      return; // nobody interested
    }

    const callbacks = this.channels.get(channel);

    callbacks.forEach(callback => {
      callback(...args);
    });
  }

  // naming variants:
  // - addListener
  // - on
  subscribe(channel, callback) {
    if (!this.channels.has(channel)) {
      this.channels.set(channel, new Set());
    }

    const callbacks = this.channels.get(channel);
    callbacks.add(callback);
  }
}