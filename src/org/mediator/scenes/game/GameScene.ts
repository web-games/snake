import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text

import Scene from '../Scene';
import GameProxy from '../../../proxy/GameProxy'

import Rocker from './Rocker';
import Bean from './Bean';
import {MapConfig} from "../../../proxy/GameConfig";
import Grid from "./Grid";

export default class GameScene extends Scene {

    public static NAME = 'game_scene';

    private snakeContainer = null;
    private animalContainer = null;


    constructor(game) {
        super(game)
    }

    public init(gameProxy: GameProxy) {
        super.init(gameProxy);

        const animalContainer = new Container();
        this.addChild(animalContainer);
        this.animalContainer = animalContainer;

        this.initRenderGrid();
        this.initRenderRocker();
    }

    // 渲染网格
    initRenderGrid() {
        let {rows, cols, gridWidth, gridHeight, mapData} = MapConfig;
        let rowData = mapData;
        for (let i = 0; i < rowData.length; i++) {
            let colData = rowData[i];
            for (let j = 0; j < colData.length; j++) {
                const value = colData[j];
                const grid = new Grid(i, j, value)
                this.animalContainer.addChild(grid)
            }
        }
    }

    // 渲染控制杆
    initRenderRocker() {
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
            let {row, col} = snake[i];
            let x = col * MapConfig.gridHeight + MapConfig.gridHeight / 2;
            let y = row * MapConfig.gridWidth + MapConfig.gridWidth / 2;
            // console.log({row, col, x, y})
            let texture = `./resources/images/snake-${
                i === 0
                    ? 'head'
                    : i % 2 === 0 ? 'body2' : 'body1'
                }.png`
            let sp = Sprite.from(texture);
            sp.scale.set(0.5, 0.5);
            sp.anchor.set(0.5, 0.5);
            sp.x = x
            sp.y = y
            this.snakeContainer.addChild(sp)
        }
    }

    public addBean({x, y, id}) {
        const bean = new Bean(x, y, id)
        this.addChild(bean)
    }

    public removeBean(id) {
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            if (child instanceof Bean && child.id === id) {
                this.removeChild(child);
            }
        }
    }
}