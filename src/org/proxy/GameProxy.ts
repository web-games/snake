import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import Game from '../../Game';

export default class GameProxy extends Proxy implements IProxy {
  public static NAME: string = 'game_proxy';

  public static UPDATE_LOCATION = 'update_location';

  public static HIT = 'hit';

  public static ADD_BEAN = 'add_bean';

  public beans = [];
  public snake = [];
  public angle = 90;
  public speed = 20;
  public pause = false;
  public game = null;

  constructor(game: Game) {
    super(GameProxy.NAME)
    this.game = game;
  }

  public resetGameData() {
    this.snake = [
      {x: 190, y: 190},
      {x: 180, y: 180},
      {x: 170, y: 170},
      {x: 160, y: 160},
      {x: 150, y: 150},
      {x: 140, y: 140},
      {x: 130, y: 130},
      {x: 120, y: 120},
      {x: 110, y: 110},
      {x: 100, y: 100},
    ]

    for (let i = 0; i < 50; i++) {
      this.addBean();
    }
  }

  public move() {
    for (let i = this.snake.length - 1; i > 0; i--) {
      this.snake[i].x = this.snake[i - 1].x;
      this.snake[i].y = this.snake[i - 1].y;
    }

    this.snake[0].x += Math.cos((this.angle) * Math.PI / 180) * this.speed;
    this.snake[0].y += Math.sin((this.angle) * Math.PI / 180) * this.speed;

    if (this.snake[0].x > this.game.stageWidth) {
      this.snake[0].x = 0
    } else if (this.snake[0].x < 0) {
      this.snake[0].x = this.game.stageWidth
    }

    if (this.snake[0].y > this.game.stageHeight) {
      this.snake[0].y = 0
    } else if (this.snake[0].y < 0) {
      this.snake[0].y = this.game.stageHeight
    }

    this.sendNotification(GameProxy.UPDATE_LOCATION, this.snake)
  }

  public check() {
    let {x: x1, y: y1} = this.snake[0];

    for (let i = 0; i < this.beans.length; i++) {
      let {x: x2, y: y2, id} = this.beans[i];
      let distance = getDistance(x1, y1, x2, y2);
      if (distance < 30) {
        this.beans.splice(i, 1);
        // console.log('吃到了！', id)
        this.sendNotification(GameProxy.HIT, id)
        this.addSnakeBody();
        this.addBean();
        return;
      }
    }
  }

  private addSnakeBody() {
    let body = {
      x: this.snake[this.snake.length - 1].x,
      y: this.snake[this.snake.length - 1].y,
    }
    this.snake.push(body);
  }

  private addBean() {
    let bean = {
      x: Math.random() * this.game.stageWidth,
      y: Math.random() * this.game.stageHeight,
      id: parseInt(String(Math.random() * 100000)),
    }
    this.beans.push(bean);
    this.sendNotification(GameProxy.ADD_BEAN, bean)
  }
}

function getDistance(x1, y1, x2, y2) {
  let p1 = {x: x1, y: y1}
  let p2 = {x: x2, y: y2}

  return Math.abs(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)))
}