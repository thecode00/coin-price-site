const option = document.getElementById("coinPair");
const orderContainer = document.getElementById("orderContainer");
let coinpair = option.value;

const maxRowCount = 20; // 화면에 나타낼 최대 체결 row개수
let rowCount = 0; // 체결 row개수

option.addEventListener("change", () => {
  coinpair = option.value;
  console.log(coinpair);

  ws.close(); // 기존연결 끊음
  ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coinpair}@trade`); // 기존의 웹소켓 대체
  ws.onmessage = (msg) => {
    const json = JSON.parse(msg.data);
    rowCount += 1;
    if (rowCount >= maxRowCount) {
      orderContainer.deleteRow(-1);
    }
    const newRow = orderContainer.insertRow(0);
    newRow.insertCell(0).innerText = json.p;
  };
});

let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coinpair}@trade`);

// 거래가격을 불러오고 index에 가격을 표시하는 작업
ws.onmessage = (msg) => {
  const json = JSON.parse(msg.data);
  rowCount += 1;
  if (rowCount >= maxRowCount) {
    orderContainer.deleteRow(-1);
  }
  const newRow = orderContainer.insertRow(0);
  newRow.insertCell(0).innerText = json.p;
};
