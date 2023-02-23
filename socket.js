const option = document.getElementById("coinpair");
let coinpair = option.value;

option.addEventListener("change", () => {
  coinpair = option.value;
  console.log(coinpair);

  ws.close(); // 기존연결 끊음
  ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coinpair}@trade`); // 기존의 웹소켓 대체
  ws.onmessage = (msg) => {
    // TODO: ws가 새로운 웹소켓이므로 다시 이벤트 리스너등록 해야함, ws을 바꾸지않고 url만 바꿀수있는지 찾아보기
    const json = JSON.parse(msg.data);
    //   console.log(json.p);
    let text = document.createElement("p");
    text.innerText = json.p;
    //   console.log(text);
    document.body.appendChild(text);
  };
});

let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${coinpair}@trade`);

// 거래가격을 불러오고 index에 가격을 표시하는 작업
ws.onmessage = (msg) => {
  const json = JSON.parse(msg.data);
  //   console.log(json.p);
  let text = document.createElement("p");
  text.innerText = json.p;
  //   console.log(text);
  document.body.appendChild(text);
};
