import {SizeHint, Webview} from 'webview-bun/src/webview.ts'

export type Options = {
    initFile: string;
    title?: string;
    sizeX?: number;
    sizeY?: number;
    hint?: SizeHint
}

export class EngineWindow {
    Window: Webview;
    Path: string;
    Config: Options;
    Url: string;
    constructor(config: Options){
        this.Config = config;
        this.Path = config.initFile;
        this.Url = new URL(this.Path, 'file://').toString();
        this.Window = new Webview();
        this.createWindowFromFile.bind(this)();
        this.Window.run()
    }
    createWindowFromFile(){
        console.log("App is starting...");
        
        this.Window.title = this.Config.title ?? "Haruhi Game";
        this.Window.navigate('http://192.168.100.10:5500');
        console.log({url: this.Url});
        
        this.Window.size = {
            height: this.Config.sizeX ?? 1000,
            width: this.Config.sizeY ?? 800,
            hint: this.Config.hint ?? SizeHint.NONE 
        }
    }
}