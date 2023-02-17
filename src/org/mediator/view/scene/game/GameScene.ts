import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text

import Scene from '../Scene';
import GameProxy from '../../../../proxy/GameProxy'

import Rocker from './Rocker';

export default class GameScene extends Scene {

  public static NAME = 'game_scene';

  private snakeContainer = null;

  constructor(game) {
    super(game)
  }

  public init(gameProxy: GameProxy) {
    super.init(gameProxy);

    let {rows, cols, gridWidth, gridHeight} = {rows: 30, cols: 10, gridWidth: 64, gridHeight: 64};

    var animalContainer = new Container();
    this.addChild(animalContainer);

    let bg = new Graphics()
    animalContainer.addChild(bg)

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        let startX = j * gridWidth
        let startY = i * gridHeight

        bg.beginFill(
          0x000000,
          i % 2 === 0
            ? j % 2 === 0 ? 0.6 : 0.4
            : j % 2 !== 0 ? 0.6 : 0.4
        )
        bg.moveTo(startX, startY)
        bg.lineTo(startX + gridWidth, startY)
        bg.lineTo(startX + gridWidth, startY + gridHeight)
        bg.lineTo(startX, startY + gridHeight)
        bg.closePath()
      }
    }

    let rocker = new Rocker()
    this.addChild(rocker)
    rocker.init();
    rocker.x = this.stageWidth / 2;
    rocker.y = this.stageHeight - 200;
  }

  public renderSnake(snake) {
    if (this.snakeContainer && this.snakeContainer.parent)
      this.snakeContainer.parent.removeChild(this.snakeContainer);

    this.snakeContainer = new Container();
    this.addChild(this.snakeContainer);

    for (let i = snake.length - 1; i >= 0; i--) {
      let {x, y} = snake[i];
      let texture = `./resources/images/snake-${
        i === 0
          ? 'head'
          : i % 2 === 0 ? 'body2' : 'body1'
        }.png`
      let sp = Sprite.from(texture);
      sp.anchor.set(0.5, 0.5);
      sp.x = x
      sp.y = y
      this.snakeContainer.addChild(sp)
    }
  }

  public addBean({x, y, id}) {
    // console.log(x, y, id)
    let texture = `./resources/images/animal${parseInt(String((Math.random() * 8) + 1))}.png`
    let sp = Sprite.from(texture);
    sp.anchor.set(0.5, 0.5);
    sp.x = x
    sp.y = y
    sp.name = id
    this.addChild(sp)
  }

  public removeBean(id) {
    let bean = this.getChildByName(id);
    bean && this.removeChild(bean);
  }
}