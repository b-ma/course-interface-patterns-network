import { Server } from 'node-osc';
import { AudioContext, OscillatorNode, GainNode } from 'node-web-audio-api';

const server = new Server(3333, '0.0.0.0');
const audioContext = new AudioContext();

server.on('message', ([channel, ...args]) => {
  console.log(channel, args);
  const frequency = args[0];
  const gain = args[1];
  // const osc
  const now = audioContext.currentTime;
  const osc = new OscillatorNode(audioContext, { frequency });
  const env = new GainNode(audioContext, { gain: 0 });
  env.gain.setValueAtTime(0, now);
  env.gain.linearRampToValueAtTime(gain, now + 0.01);
  env.gain.exponentialRampToValueAtTime(0.0001, now + 2);

  osc.connect(env).connect(audioContext.destination);
  osc.start(now);
  osc.stop(now + 2);
});