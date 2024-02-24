import { LoadResource } from "../haruhi/loadImage.ts";
import { Scene } from "../haruhi/scenes/renderer.ts";
import { Player } from "./player.ts";
export class MyScene extends Scene{
    Player?: Player;
    isMain: boolean = true;
    async registerScene(): Promise<void> {
        // Load the player...
        const player_sprite = await LoadResource('https://art.pixilart.com/eed75aa54e6c6f6.png')
        this.Player = new Player(player_sprite);
        this.renderer.putElement.bind(this.renderer)(this.Player);
    }

    private static instance: MyScene;
    static getInstance(context: CanvasRenderingContext2D){
        if(!this.instance){
            this.instance = new MyScene(context);
        }

        return this.instance;
    }
}