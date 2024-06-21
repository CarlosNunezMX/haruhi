import { Entity } from "../Entity.ts";
import { LoadResource } from "../loadImage.ts";
import { Vector2 } from "../types/Vector.ts";

export class ImageNode extends Entity {
    url: string;
    Sprite?: HTMLImageElement;
    constructor(spriteURL: string, x: number, y: number) {
        super();
        this.url = spriteURL;
        this.Size = new Vector2(x, y);
    }
    async attached(): Promise<void> {
        const img = await LoadResource(this.url);
        this.Sprite = img;
        console.log(this);
        
    }
    draw(ctx: CanvasRenderingContext2D, relative: Vector2): void {
        
        if(relative.x !== 0 && relative.y !== 0){
            ctx.drawImage(this.Sprite!, relative.x, relative.y, this.Size.x, this.Size.y)
            return;

        }
        ctx.drawImage(this.Sprite!, this.Position.x, this.Position.y, this.Size.x, this.Size.y)
    }
    update(ctx: CanvasRenderingContext2D): void {
        // No need to update anything here...
    }
}