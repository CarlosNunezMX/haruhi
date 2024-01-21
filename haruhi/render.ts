export class Entity {
    draw(ctx: CanvasRenderingContext2D): void{};
    update(ctx: CanvasRenderingContext2D): void{};
}

type RenderContent = {
    id: string;
    element: Entity
}
export class Render{
    RenderQueeue: RenderContent[] = []
    Context: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D){
        this.Context = ctx;
    }
    draw(){
        this.RenderQueeue.forEach(e => {
            const draw = e.element.draw ;
            draw.bind(e.element)(this.Context);
        })
    }

    update(){
        this.Context.clearRect(0, 0, document.body.clientWidth, document.body.clientWidth);
        this.draw.bind(this)()

        this.RenderQueeue.forEach(e => {
            e.element.update.bind(e.element)(this.Context)
        })
    }
}