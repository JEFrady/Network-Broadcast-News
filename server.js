const net = require("net");
const clients = [];
counter = 1;

const server = net.createServer(client => {
  console.log("CLIENT CONNECTED!");
  client.write("Welcome, use `User: [YourName]` to set your name \n");
  client.on("data", data => {
    let message = data.toString();
    console.log(message);
    if (message.includes('User:')) {
      client.name = message;
    }
    clients.forEach(socket => {

      if (client !== socket) {
      socket.write(message);
    }})
  });
  client.on('end', () => {
    console.log(client.name + ' disconnected');
  })
  clients.push(client);
});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
})

