import { Keyboard, keyboard } from "../haruhi/keyboard.ts";
import { logger } from "../haruhi/logger.ts";
import { Entity } from "../haruhi/render.ts";

export class Player extends Entity{
    x: number;
    y: number;
    speed: number = 10;
    w: number;
    h: number;
    Sprite: HTMLImageElement;
    constructor(Sprite: HTMLImageElement){
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
        if(Keyboard.Holding === "ArrowRight" && this.x <= (document.body.clientWidth - this.w - 10)){
            this.x += this.speed;
            console.log(this);
            
        }

        if(Keyboard.Holding === "ArrowLeft" && this.x > 0){
            this.x -= this.speed;
            console.log(this);
        }

        if(Keyboard.Holding === "ArrowDown" && this.y <= (window.innerHeight - this.h -10)){
            this.y += this.speed;
            console.log(this);
        }
        
        if(Keyboard.Holding === "ArrowUp" && this.y > 0){
            this.y -= this.speed;
            console.log(this);
        }
    }
}