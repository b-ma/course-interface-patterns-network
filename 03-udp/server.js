import dgram from 'node:dgram';

const server = dgram.createSocket('udp4');

server.on('error', err => {
  console.log(err.message);
  server.close();
});

server.on('message', (message, rinfo) => {
  console.log(`server got: "${message}" from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening: ${address.address}:${address.port}`);
});

server.bind(41234);