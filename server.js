const net = require("net");
const clients = [];
counter = 1;

const server = net.createServer(client => {
  console.log("CLIENT CONNECTED!");
  client.write("Welcome, what's your name? \n");
  client.on("data", data => {
    let message = data.toString();
    console.log(message);
    clients.forEach(socket => {
        socket.write(message);
    })

  });
  clients.push(client);
});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
})

