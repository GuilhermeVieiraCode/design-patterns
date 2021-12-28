import { Computer } from "./Computer";

export class ComputerBuilder {
   private _motherboard: string;
   private _monitor!: string;
   private _mouse!: string;
   private _keyboard!: string;
   private _printer!: string;
   private _speaker!: string;
   private _powerSupply!: string; 
   private _gpu!: string; 
   private _hardDisk!: string; 
   private _processor!: string;
   
   constructor(motherboard: string) {
        this._motherboard = motherboard;
    }

    get motherboard() {
        return this._motherboard;
    }
    setMotherboard(value: string): ComputerBuilder {
        this._motherboard = value;
        return this;
    }
    get monitor() {
        return this._monitor;
    }
    setMonitor(value: string): ComputerBuilder {
        this._motherboard = value;
        return this;
    }
    get mouse() {
        return this._mouse;
    }
    setMouse(value: string): ComputerBuilder {
        this._mouse = value;
        return this;
    }
    get keyboard() {
        return this._keyboard;
    }
    setKeyboard(value: string): ComputerBuilder {
        this._keyboard = value;
        return this;
    }
    get printer() {
        return this._printer;
    }
    setPrinter(value: string): ComputerBuilder {
        this._printer = value;
        return this;
    }
    get speaker() {
        return this._speaker;
    }
    setSpeaker(value: string): ComputerBuilder {
        this._speaker = value;
        return this;
    }
    get powerSupply() {
        return this._powerSupply;
    }
    setPowerSupply(value: string): ComputerBuilder {
        this._powerSupply = value;
        return this;
    }
    get gpu() {
        return this._gpu;
    }
    setGpu(value: string): ComputerBuilder {
        this._gpu = value;
        return this;
    }
    get hardDisk() {
        return this._hardDisk;
    }
    setHardDisk(value: string): ComputerBuilder {
        this._hardDisk = value;
        return this;
    }
    get processor() {
        return this._processor;
    }
    setProcessor(value: string): ComputerBuilder {
        this._processor = value;
        return this;
    }
    
    build(): Computer {
        return new Computer(this);
    }
}