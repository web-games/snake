import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import GameScene from './scenes/game/GameScene';
import GameProxy from '../proxy/GameProxy';
import {SceneEvent} from './scenes/Scene'
import GameCommand from '../command/GameCommand'

export default class GameSceneMediator extends Mediator implements IMediator {
  public static NAME: string = 'game_scene_mediator'

  constructor(viewComponent: any) {
    super(GameSceneMediator.NAME, viewComponent)

    this.gameScene.on(GameCommand.CHANGE_DIRECTION, angle => this.sendNotification(GameCommand.CHANGE_DIRECTION, angle));
  }

  public listNotificationInterests(): string[] {
    return [
      GameProxy.ADD_BEAN,
      GameProxy.UPDATE_LOCATION,
      GameProxy.HIT,
    ]
  }

  public handleNotification(notification: INotification): void {
    // console.log('GameSceneMediator notification:', notification)
    let name = notification.getName()
    let body = notification.getBody()
    let type = notification.getType()

    switch (name) {
      case GameProxy.UPDATE_LOCATION:
        this.gameScene.renderSnake(body);
        break;
      case GameProxy.HIT:
        this.gameScene.removeBean(body);
        break;
      case GameProxy.ADD_BEAN:
        this.gameScene.addBean(body);
        break;
    }
  }

  get gameScene(): GameScene {
    return (this.viewComponent as GameScene)
  }
}