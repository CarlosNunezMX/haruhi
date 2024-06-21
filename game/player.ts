import { Vector2 } from "@/haruhi/types/Vector.ts";
import { Entity } from "@/haruhi/Entity.ts";
import { MouseButton } from "@/haruhi/mouse.ts";
import type { ImageNode } from "@/haruhi/Nodes/ImageNode.ts";

export class Player extends Entity {
    speed: number = 10;
    Size: Vector2;
    Sprite: ImageNode;
    zindex: number = 1;
    constructor(Sprite: ImageNode) {
        super();
        this.Position = new Vector2(10, 10)
        this.Size = new Vector2(64, 64)
        Sprite.setRelative(this);
        this.Sprite = Sprite;
    }
    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);
        ctx.fillStyle = "black";
        // create a dot in the center of the player
        ctx.fillRect(this.Position.x + this.Size.x / 2, this.Position.y + this.Size.y / 2, 2, 2);

    }

    update(ctx: CanvasRenderingContext2D): void {
        super.update(ctx);  
        if(haruhi.keyboard.HoldingOnce[0] === "Space"){
            this.hidden = !this.hidden;
        }
        if(haruhi.mouse.isClicking && haruhi.mouse.mouseButton == MouseButton.Left){
            this.Position = haruhi.mouse.Position.sub(this.Size.center());
        }
    }

    
    
    async attached(): Promise<void> {
        await this.queue.putElement.bind(this.queue)(this.Sprite);
    }
}