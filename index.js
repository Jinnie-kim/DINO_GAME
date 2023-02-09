// Canvas를 그리기 위한 최소한의 코드

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let manyCactus = [];

// 1초에 60번 코드 실행하기
function executeEveryFrame() {
  requestAnimationFrame(executeEveryFrame);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (timer % 120 === 0) {
    let cactus = new Cactus();
    manyCactus.push(cactus);
  }
  manyCactus.forEach((cactus, index, array) => {
    // x 좌표가 0 미만이면 장애물 제거
    if (cactus.x < 0) {
      array.splice(index, 1);
    }
    cactus.x--;
    cactus.draw();
  });

  dino.draw();
}

executeEveryFrame();
