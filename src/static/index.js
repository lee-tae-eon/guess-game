// eslint-disable-next-line no-undef
const socket = io("/");

const sendMsg = (msg) => {
  socket.emit("Msg", { msg });
  console.log(`당신의 메세지 : ${msg}`);
};

const setNickname = (nickname) => {
  socket.emit("setNickname", { nickname });
};

const handleMsgNoti = (data) => {
  const { msg, nickname } = data;
  console.log(`${nickname} 의 메세지 : ${msg}`);
};

socket.on("msgNoti", handleMsgNoti);
