
import { ComputerBuilder } from "./ComputerBuilder";

export class Computer {
    private _motherboard: string;
    private _monitor: string;
    private _mouse: string;
    private _keyboard: string;
    private _printer: string;
    private _speaker: string;
    private _powerSupply: string; 
    private _gpu: string; 
    private _hardDisk: string; 
    private _processor: string;
    
    constructor(builder: ComputerBuilder) {
        this._motherboard = builder.motherboard;
        this._monitor = builder.monitor;
        this._mouse = builder.mouse;
        this._keyboard = builder.keyboard;
        this._printer = builder.printer;
        this._speaker = builder.speaker;
        this._powerSupply = builder.powerSupply; 
        this._gpu = builder.gpu; 
        this._hardDisk = builder.hardDisk; 
        this._processor = builder.processor;       
    }
    
    public get motherboard(): string {
        return this._motherboard;
    }
    public get monitor(): string {
        return this._monitor;
    }
    public get mouse(): string {
        return this._mouse;
    }
    public get keyboard(): string {
        return this._keyboard;
    }
    public get printer(): string {
        return this._printer;
    }
    public get speaker(): string {
        return this._speaker;
    }
    public get powerSupply(): string {
        return this._powerSupply;
    }
    public get gpu(): string {
        return this._gpu;
    }
    public get hardDisk(): string {
        return this._hardDisk;
    }
    public get processor(): string {
        return this._processor;
    }
    
}    