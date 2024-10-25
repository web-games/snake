import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification

import Game from '../Application';
import Scene from '../mediator/scenes/Scene';
import ApplicationFacade from '../ApplicationFacade';

import LoadingScene from '../mediator/scenes/loading/LoadingScene';
import LoadingSceneMediator from '../mediator/LoaddingSceneMediator';

import GameScene from '../mediator/scenes/game/GameScene';
import GameSceneMediator from '../mediator/GameSceneMediator';
import GameProxy from '../proxy/GameProxy';
import GameCommand from './GameCommand'

export default class SceneCommand extends SimpleCommand implements ICommand {

  public static TO_LOADING = 'to_loading'

  public static TO_GAME = 'to_game'

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log('SceneCommand notification:', notification)

    let game: Game = (this.facade as ApplicationFacade).game;
    let name = notification.getName()
    let body = notification.getBody()
    let {from} = body

    if (from && from instanceof Scene) {
      from = from as Scene;
      from.destroy();
      from.removeAllChildren();
      from.removeThis();
    }

    switch (name) {
      case SceneCommand.TO_LOADING:
        let loadingScene: LoadingScene = (this.facade.retrieveMediator(LoadingSceneMediator.NAME) as LoadingSceneMediator).loadingScene
        game.stage.addChild(loadingScene)
        loadingScene.init();
        break
      case SceneCommand.TO_GAME:
        let gameProxy = this.facade.retrieveProxy(GameProxy.NAME) as GameProxy
        let gameScene: GameScene = (this.facade.retrieveMediator(GameSceneMediator.NAME) as GameSceneMediator).gameScene;
        game.stage.addChild(gameScene)
        gameScene.init(gameProxy);

        this.sendNotification(GameCommand.GAME_START);
        break
    }
  }
}