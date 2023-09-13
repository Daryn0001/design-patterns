import {Transmission} from "../../interfaces/Transmission";

export class AudiTransmission implements Transmission {
    getTransmissionName(): string {
        return "Audi Transmission";
    }

}