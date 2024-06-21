import { Vector2 } from "@/haruhi/types/Vector.ts";
import { Entity } from "@/haruhi/render.ts";
import { MouseButton } from "@/haruhi/mouse.ts";

export class Player extends Entity {
    speed: number = 10;
    Size: Vector2;
    Sprite: HTMLImageElement;
    zindex: number = 1;
    constructor(Sprite: HTMLImageElement) {
        super();
        this.Position = new Vector2(10, 10)
        this.Size = new Vector2(64, 64)
        this.Sprite = Sprite;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.Sprite, this.Position.x, this.Position.y, this.Size.x, this.Size.y)
    }

    update(ctx: CanvasRenderingContext2D): void {
        if(haruhi.keyboard.HoldingOnce[0] === "Space"){
            this.hidden = !this.hidden;
        }
        if(haruhi.mouse.isClicking && haruhi.mouse.mouseButton == MouseButton.Left){
            this.Position = haruhi.mouse.Position.sub(this.Size.center());
        }
    }
    
}