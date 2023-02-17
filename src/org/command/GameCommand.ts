import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import GameProxy from '../proxy/GameProxy';

import hotkeys from 'hotkeys-js'

export default class GameCommand extends SimpleCommand implements ICommand {

  public static GAME_START = 'game_start';

  public static GAME_OVER = 'game_over';

  public static CHANGE_ANGLE = 'change_angle';

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log('SceneCommand notification:', notification)

    let name = notification.getName()
    let body = notification.getBody()

    let gameProxy: GameProxy = this.facade.retrieveProxy(GameProxy.NAME) as GameProxy

    switch (name) {
      case GameCommand.GAME_START:

        gameProxy.resetGameData();

        setInterval(() => {
          if (gameProxy.pause)
            return;

          gameProxy.move()
          gameProxy.check()
        }, 1000 / 15);

        hotkeys('up,down,left,right,space', (event, handler) => {
          // console.log(handler.key)
          switch (handler.key) {
            case 'up':
              gameProxy.angle = 180;
              break;
            case 'down':
              gameProxy.angle = 0;
              break;
            case 'left':
              gameProxy.angle = -90;
              break;
            case 'right':
              gameProxy.angle = 90;
              break;
            case 'space':
              gameProxy.pause = !gameProxy.pause;
              break;
          }
        });
        break;
      case GameCommand.CHANGE_ANGLE:
        gameProxy.angle = body
        break;
      case GameCommand.GAME_OVER:

        break;
    }
  }
}