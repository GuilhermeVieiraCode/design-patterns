import { ComputerBuilder } from "./Builder";
import { Computer } from "./Computer";

export function mountComputer(): void{
    let cp: Computer = new ComputerBuilder("Motherboard X")
        .setPowerSupply("Power Supply X")
        .setHardDisk("Hard Disk X")
        .setGpu("Gpu X")
        .setProcessor("Processor X")
        .build()

    console.log(cp.motherboard + " " + 
                cp.powerSupply + " " + 
                cp.hardDisk + " " + 
                cp.gpu + " " + 
                cp.processor)    
}

mountComputer()