import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import Game from '../../Game';
import {MapConfig} from "./GameConfig";

const {rows, cols, gridWidth, gridHeight, mapData, gridColor} = MapConfig;

export enum Direction {
    Up = 0,
    Right,
    Down,
    Left,
}

const direction_round: number[][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
]

export default class GameProxy extends Proxy implements IProxy {
    public static NAME: string = 'game_proxy';

    public static UPDATE_LOCATION = 'update_location';

    public static HIT = 'hit';

    public static ADD_BEAN = 'add_bean';

    public beans = [];
    public snake = [];
    public speed = 20;
    public pause = true;
    public game = null;
    public current_direction = Direction.Right

    constructor(game: Game) {
        super(GameProxy.NAME)
        this.game = game;

        setTimeout(() => {
            this.sendNotification(GameProxy.UPDATE_LOCATION, this.snake)
        }, 1000)
    }

    public resetGameData() {
        this.snake = [
            {row: 1, col: 4},
            {row: 1, col: 3},
            {row: 1, col: 2},
            {row: 1, col: 1},
        ]

        for (let i = 0; i < 30; i++) {
            this.addBean();
        }
    }

    public move() {
        const [offset_row, offset_col] = direction_round[this.current_direction]
        let previous_row = this.snake[0].row;
        let previous_col = this.snake[0].col;
        // console.log({offset_row, offset_col})

        this.snake[0].row = previous_row + offset_row;
        this.snake[0].col = previous_col + offset_col;
        // console.log({row: previous_row + offset_row, col: previous_col + offset_col,})

        for (let i = 1; i < this.snake.length; i++) {
            const current_row = this.snake[i].row;
            const current_col = this.snake[i].col;

            this.snake[i].row = previous_row;
            this.snake[i].col = previous_col;

            previous_row = current_row;
            previous_col = current_col;
        }

        this.sendNotification(GameProxy.UPDATE_LOCATION, this.snake)
    }

    public check() {
        let {row: snake_head_row, col: snake_head_col} = this.snake[0];

        for (let i = 0; i < this.beans.length; i++) {
            const {row, col, id} = this.beans[i];
            const hit = (snake_head_row === row && snake_head_col === col);
            // console.log({snake_head_row, snake_head_col, row, col, id})
            if (hit) {
                this.beans.splice(i, 1);
                console.log('吃到了！', id)
                this.sendNotification(GameProxy.HIT, id)
                this.addSnakeBody();
                this.addBean();
                return;
            }
        }
    }

    private addSnakeBody() {
        let body = {row: -1, col: -1}
        this.snake.push(body);
    }

    private addBean() {
        const id = parseInt(String(Math.random() * 100000))
        const [row, col, x, y] = this.getBeanCoordinate();
        // console.log({row, col, x, y})
        let bean = {row, col, x, y, id,}
        this.beans.push(bean);
        this.sendNotification(GameProxy.ADD_BEAN, bean)
    }

    private getBeanCoordinate() {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        const bo1 = MapConfig.mapData[row][col] > 0;
        const bo2 = this.beans.some(bean => bean.row === row && bean.col === col)

        if (bo1 || bo2) {
            return this.getBeanCoordinate();
        }

        const x = col * gridHeight + gridHeight / 2;
        const y = row * gridWidth + gridWidth / 2;

        return [row, col, x, y]
    }
}

function getDistance(x1, y1, x2, y2) {
    let p1 = {x: x1, y: y1}
    let p2 = {x: x2, y: y2}

    return Math.abs(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)))
}