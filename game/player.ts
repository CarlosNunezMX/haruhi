import { Keyboard, keyboard } from "../haruhi/keyboard.ts";
import { logger } from "../haruhi/logger.ts";
import { Entity } from "../haruhi/render.ts";
import { Scene } from "../haruhi/scenes/renderer.ts";

export class Player extends Entity {
    x: number;
    y: number;
    speed: number = 10;
    w: number;
    h: number;
    Sprite: HTMLImageElement;
    constructor(Sprite: HTMLImageElement) {
        super();
        this.x = 10;
        this.y = 10;
        this.w = 64
        this.h = 64
        this.Sprite = Sprite;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.Sprite, this.x, this.y, this.w, this.h)
    }

    update(ctx: CanvasRenderingContext2D): void {
        Keyboard.Holding.forEach(key => {
            if (key === "ArrowRight" && this.x <= (document.body.clientWidth - this.w - 10))
                this.x += this.speed;
            if (key === "ArrowLeft" && this.x > 0)
                this.x -= this.speed;
            if (key === "ArrowDown" && this.y <= (window.innerHeight - this.h - 10))
                this.y += this.speed;
            if (key === "ArrowUp" && this.y > 0)
                this.y -= this.speed;
            if( key === "Space" && this.w < 240){
                this.w *= 2;
                this.h *= 2;
                logger.log('Se hizo grandote')
            }

            if( key === "Shift" && this.h > 32){
                this.w /= 2;
                this.h /= 2;
                logger.log('Se hizo chiquito')
            }
        })
    }
    
}