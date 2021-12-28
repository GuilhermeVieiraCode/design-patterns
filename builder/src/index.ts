import { ComputerBuilder } from "./ComputerBuilder";
import { Computer } from "./Computer";

export function mountComputer(): void{
    let build: Computer = new ComputerBuilder()
        .setMotherboard("Motherboard X")
        .setPowerSupply("Power Supply X")
        .setHardDisk("Hard Disk X")
        .setGpu("Gpu X")
        .setProcessor("Processor X")
        .build();
    
    let computer: Computer = build;   

    console.log(computer.motherboard + " " + 
                computer.powerSupply + " " + 
                computer.hardDisk + " " + 
                computer.gpu + " " + 
                computer.processor);    
}

mountComputer();