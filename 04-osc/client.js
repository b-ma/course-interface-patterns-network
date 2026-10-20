import { Client } from 'node-osc';

const client = new Client('127.0.0.1', 3333);

setInterval(() => {
  const frequency = 100 + Math.random() * 700;
  const gain = Math.random();

  client.send('/trigger/osc', frequency, gain);
}, 200);
