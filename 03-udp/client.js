import dgram from 'node:dgram';

const client = dgram.createSocket('udp4');

setInterval(() => {
  const msg = Date.now().toString();
  console.log('sending:', msg);
  client.send(Buffer.from(msg), 41234, 'localhost', (err) => console.log(err));
}, 1000);