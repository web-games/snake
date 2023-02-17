import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text

export default class Rocker extends Container {

  public rockerCircleR;
  public smallRockerCircleR;
  public init;
  public dragging = false;
  public data;

  constructor() {
    super();

    var _downSprite;
    var _upSprite;
    var _this = this;

    //固定摇杆背景圆形的X,Y坐标以及半径
    var _rockerCircleX = 0;
    var _rockerCircleY = 0;
    var _rockerCircleR = 100;
    //摇杆的X,Y坐标以及摇杆的半径
    var _smallRockerCircleX = 0;
    var _smallRockerCircleY = 0;
    var _smallRockerCircleR = 55;

    this.rockerCircleR = _rockerCircleR;
    this.smallRockerCircleR = _smallRockerCircleR;

    this.init = function () {

      _downSprite = Sprite.from('./resources/images/intel-home1-01.png');
      _downSprite.x = _rockerCircleX;
      _downSprite.y = _rockerCircleY;
      _downSprite.width = _downSprite.height = _rockerCircleR * 2;
      _downSprite.anchor.x = _downSprite.anchor.y = 0.5;
      this.addChild(_downSprite);

      _upSprite = Sprite.from('./resources/images/intel-home1-02.png')
      this.addChild(_upSprite);
      _upSprite.width = _upSprite.height = _smallRockerCircleR * 2;
      _upSprite.anchor.x = _upSprite.anchor.y = 0.5;

      _downSprite.interactive = true;
      _downSprite.buttonMode = true;

      _downSprite
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd);
    }

    function onDragStart(event) {
      _this.dragging = true;
      _this.data = event.data;

      _upSprite.alpha = 0.5;

      let {stage} = _this.parent['game'];
      stage.interactive = true;
      stage.on('pointermove', onDragMove);
    }

    function onDragEnd(event) {
      _this.dragging = false;
      _this.data = null;

      _upSprite.alpha = 1;
      _upSprite.position.x = 0;
      _upSprite.position.y = 0;

      let {stage} = _this.parent['game'];
      stage.interactive = false;
      stage.off('pointermove', onDragMove);
    }

    function onDragMove(event) {
      if (_this.dragging) {
        let {x, y} = _this.data.getLocalPosition(_upSprite.parent);
        _upSprite.x = x;
        _upSprite.y = y;

        var rad = getRad(0, 0, _upSprite.position.x, _upSprite.position.y);
        var angle = parseInt(String(180 / Math.PI * rad));
        // console.log('角度=' + angle);
        _this.parent.emit('CHANGE_ANGLE', angle);

        var _x = Math.pow((_rockerCircleX - x), 2);
        var _y = Math.pow((_rockerCircleY - y), 2);
        var xie = Math.sqrt(_x + _y);
        //console.log(xie+ "     "+_rockerCircleR);
        //console.log("\n");
        //如果小球中心点小于活动区域则跟随用户触屏点移动
        if (xie <= _rockerCircleR) {

        }
      }
    }

    /*
    * @param px1 原点坐标x
    * @param py1 原点坐标y
    * @param px2 摇杆坐标x
    * @param py2 摇杆坐标y
    * */
    function getRad(px1, py1, px2, py2) {
      //得到两点X的距离
      var _x = px2 - px1;
      //得到两点Y的距离
      var _y = py1 - py2;
      //算出斜边长
      var xie = Math.sqrt(Math.pow(_x, 2) + Math.pow(_y, 2));
      //得到这个角度的余弦值（通过三角 函数中得定理：邻边/斜边=角度余弦值）;
      var cosAngle = _x / xie;
      //通过反余弦定理获取到其角度的弧度
      var rad = Math.acos(cosAngle);
      //注意：当触屏的位置Y坐标<摇杆的Y坐标我们要取反值-0~-180；
      if (py2 < py1) {
        rad = -rad;
      }
      return rad;
    }

    function getXY(centerX, centerY, R, rad) {
      var SmallRockerCircleX = (R * Math.cos(rad)) + centerX;
      var SmallRockerCircleY = (R * Math.sin(rad)) + centerY;

      return {x: SmallRockerCircleX, y: SmallRockerCircleY};
    }
  }
}