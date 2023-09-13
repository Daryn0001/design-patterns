import {Engine} from "./Engine";
import {ElectricalEquipment} from "./ElectricalEquipment";
import {Transmission} from "./Transmission";

export interface Car {
    createEngine() : Engine;

    createTransmission(): Transmission;

    createElectricalEquipment(): ElectricalEquipment;

}