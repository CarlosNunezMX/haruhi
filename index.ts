import { Engine } from "./haruhi/engine.ts";
import { logger } from "./haruhi/logger.ts";
import { Player } from "./game/player.ts";
import { LoadResource } from "./haruhi/loadImage.ts";

const $Canvas = document.querySelector('canvas#game');
if(!$Canvas){
    throw "Can not find canvas for game drawning";
}

const player = await LoadResource('https://art.pixilart.com/eed75aa54e6c6f6.png')
const MyPlayer = new Player(player);
// @ts-ignore
const Game = new Engine(MyPlayer, document.body.clientWidth, window.innerHeight, $Canvas);