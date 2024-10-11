import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text

export default class Bean extends Container {
    public id = null;

    constructor(x, y, id) {
        super();
        // console.log(x, y, id)
        this.id = id;

        let texture = `./resources/images/animal${parseInt(String((Math.random() * 7) + 2))}.png`
        let sp = Sprite.from(texture);
        sp.anchor.set(0.5, 0.5);
        sp.scale.set(0.5, 0.5)
        sp.x = x
        sp.y = y
        sp.name = id
        this.addChild(sp)

        /*const style = new PIXI.TextStyle({
            fontSize: 16,
            fill: '0xff0000',
        });
        const text = new Text(`${id}`, style);
        this.addChild(text)
        text.anchor.set(0.5, 0.5)
        text.x = x;
        text.y = y;*/
    }
}