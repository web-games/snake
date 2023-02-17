import SimpleCommand = puremvc.SimpleCommand;
import INotification = puremvc.INotification;

import Game from '../../../Game'
import LoadingScene from '../../mediator/view/scene/load/LoadScene';
import LoadSceneMediator from '../../mediator/LoadSceneMediator';
import GameScene from '../../mediator/view/scene/game/GameScene';
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