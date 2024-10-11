import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import GameProxy, {Direction} from '../proxy/GameProxy';

import hotkeys from 'hotkeys-js'

export default class GameCommand extends SimpleCommand implements ICommand {

    public static GAME_START = 'game_start';

    public static GAME_OVER = 'game_over';

    public static CHANGE_DIRECTION = 'change_angle';

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
                }, 200);

                hotkeys('up,down,left,right,space', (event, handler) => {
                    switch (handler.key) {
                        case 'up':
                            gameProxy.current_direction = Direction.Up;
                            break;
                        case 'down':
                            gameProxy.current_direction = Direction.Down;
                            break;
                        case 'left':
                            gameProxy.current_direction = Direction.Left;
                            break;
                        case 'right':
                            gameProxy.current_direction = Direction.Right;
                            break;
                        case 'space':
                            gameProxy.pause = !gameProxy.pause;
                            break;
                    }
                });
                break;
            case GameCommand.CHANGE_DIRECTION:
                if (gameProxy.current_direction !== body)
                    gameProxy.current_direction = body
                break;
            case GameCommand.GAME_OVER:

                break;
        }
    }
}