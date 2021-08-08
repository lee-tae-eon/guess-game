// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("Join", (data) => console.log(data));

socket.emit("MYMY", {
  first: "taeeon",
  last: "lee",
});
