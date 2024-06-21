import { RenderQueue } from "./scenes/renderQueue.ts";
import { Vector2 } from "./types/Vector.ts";

export class Entity {
    Position = new Vector2();
    zindex?: number;
    Size = new Vector2();
    RelativeTo?: Entity;
    hidden: boolean = false;
    queue: RenderQueue = new RenderQueue();
    async attached(): Promise<void> {
        await this.queue
            .getRenderQueue()
            .forEach(async e => await e.element.attached.bind(e.element)())
    };

    draw(ctx: CanvasRenderingContext2D, relativePosition = new Vector2()): void {
        this.queue
            .getRenderQueue()
            .forEach(e => e.element.draw(ctx, e.element.RelativeTo ? e.element.GetRelativePosition() : e.element.Position))

    };
    protected GetRelativePosition(){
        if(!this.RelativeTo)
            throw "Bad usage of GetRelativePosition";
        return this.Position.add(this.RelativeTo.Position);
    }
    setRelative(parent: Entity) {
        this.RelativeTo = parent;
        console.log(this);
        
    }

    update(ctx: CanvasRenderingContext2D): void {
        this.queue
            .getRenderQueue()
            .forEach(e => e.element.update.bind(e.element)(ctx))
    };

}
