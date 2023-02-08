const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

// 거래가격을 불러오고 index에 가격을 표시하는 작업
ws.onmessage = (msg) => {
	const json = JSON.parse(msg.data);
	console.log(json.p);
	let text = document.createElement("p");
	text.innerText = json.p;
	console.log(text);
	document.body.appendChild(text);
};
