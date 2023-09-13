import {Transmission} from "../../interfaces/Transmission";

export class BMWTransmission implements Transmission {
    getTransmissionName(): string {
        return "BMW Transmission";
    }
}