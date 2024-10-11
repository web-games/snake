import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import LoadingScene from './scenes/load/LoadScene'
import {SceneEvent} from './scenes/Scene';
import SceneCommand from '../command/SceneCommand';

export default class LoadSceneMediator extends Mediator implements IMediator {
  public static NAME: string = 'load_scene_mediator'

  constructor(viewComponent: any) {
    super(LoadSceneMediator.NAME, viewComponent)
    this.loadingScene.on(SceneEvent.INIT_COMPLETE, this.initComplete, this);
  }

  private initComplete() {
    var assetLoader = new PIXI['Loader']();
    assetLoader.add([
      './resources/images/snake-body1.png',
      './resources/images/snake-body2.png',
      './resources/images/snake-head.png',

      './resources/images/intel-home1-01.png',
      './resources/images/intel-home1-02.png',
    ]);
    assetLoader.once('complete', () => {
      setTimeout(() => {
        this.sendNotification(SceneCommand.TO_GAME, {from: this.loadingScene});

        // this.sendNotification(SceneCommand.TO_END, {from: this.loadingScene})
      }, 500)
    });
    assetLoader.on('progress', (e) => {
      console.log('加载百分比' + e.progress + '%');

      this.loadingScene.setProgress(e.progress);
    });
    assetLoader.load();
  }

  public get loadingScene() {
    return this.viewComponent as LoadingScene
  }
}