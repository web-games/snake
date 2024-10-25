import SimpleCommand = puremvc.SimpleCommand;
import INotification = puremvc.INotification;

import Game from '../../Application'
import LoadingScene from '../../mediator/scenes/loading/LoadingScene';
import LoadSceneMediator from '../../mediator/LoaddingSceneMediator';
import GameScene from '../../mediator/scenes/game/GameScene';
import GameSceneMediator from '../../mediator/GameSceneMediator';

export default class ViewPrepCommand extends SimpleCommand {
  constructor() {
    super()
  }

  public execute(note: INotification) {
    var game: Game = note.getBody() as Game

    let loadingScene = new LoadingScene(game);
    this.facade.registerMediator(new LoadSceneMediator(loadingScene))

    let gameScene = new GameScene(game);
    this.facade.registerMediator(new GameSceneMediator(gameScene))
  }
}