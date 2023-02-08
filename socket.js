import io from "socket.io-client";

const socket = io("wss://stream.binance.com:9443/ws/btcusdt@depth10@100ms");
socket.on("connect", (msg) => {
  console.log(msg);
});
