import Container = PIXI.Container
import Button from "../../components/Button";
import {Direction} from "../../../proxy/GameProxy";
import GameCommand from "../../../command/GameCommand";

export default class Rocker extends Container {

    constructor() {
        super();
        var left = new Button('左', {bgColor: 0xff0000});
        left.x = 100;
        this.addChild(left)
        left.interactive = true;
        left.on('pointerdown', () => this.parent.emit(GameCommand.CHANGE_DIRECTION, Direction.Left));

        var right = new Button('右', {bgColor: 0xff0000});
        right.x = 220;
        this.addChild(right)
        right.interactive = true;
        right.on('pointerdown', () => this.parent.emit(GameCommand.CHANGE_DIRECTION, Direction.Right));

        var up = new Button('上', {bgColor: 0xff0000});
        up.x = 460;
        this.addChild(up)
        up.interactive = true;
        up.on('pointerdown', () => this.parent.emit(GameCommand.CHANGE_DIRECTION, Direction.Up));

        var down = new Button('下', {bgColor: 0xff0000});
        down.x = 340;
        this.addChild(down)
        down.interactive = true;
        down.on('pointerdown', () => this.parent.emit(GameCommand.CHANGE_DIRECTION, Direction.Down));
    }
}