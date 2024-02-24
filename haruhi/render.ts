export class Entity {
    draw(ctx: CanvasRenderingContext2D): void { };
    update(ctx: CanvasRenderingContext2D): void { };
}

type RenderContent = {
    id: string;
    element: Entity
}
export class Render {
    RenderQueeue: RenderContent[] = []
    private Context?: CanvasRenderingContext2D;
    ctx(ctx: CanvasRenderingContext2D) {
        this.Context = ctx;
    }
    putElement(element: Entity) {
        const uuid = crypto.randomUUID();
        this.RenderQueeue.push({
            id: uuid,
            element
        })
    }
    draw() {
        this.RenderQueeue.forEach(e => {
            const draw = e.element.draw;
            if (!this.Context)
                throw "Set the context before start rendering"
            draw.bind(e.element)(this.Context);
        })
    }

    update() {
        if (!this.Context)
            throw "Set the context before start rendering";
        this.Context.clearRect(0, 0, document.body.clientWidth, document.body.clientWidth);
        this.draw.bind(this)()
        this.RenderQueeue.forEach(e => {
            if (!this.Context)
                throw "Set the context before start rendering";
            e.element.update.bind(e.element)(this.Context)
        })
    }

    private static instance: Render;
    public static getInstance() {
        if (!this.instance)
            this.instance = new Render();
        return this.instance;
    }

    public static createInstance(){
        return new Render();
    }
}