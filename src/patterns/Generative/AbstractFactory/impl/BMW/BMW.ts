import {Car} from "../../interfaces/Car";
import {ElectricalEquipment} from "../../interfaces/ElectricalEquipment";
import {Engine} from "../../interfaces/Engine";
import {Transmission} from "../../interfaces/Transmission";
import {BMWEngine} from "./BMWEngine";
import {BMWTransmission} from "./BMWTransmission";
import {BMWElectricalEquipment} from "./BMWElectricalEquipment";

export class BMW implements Car {
    createElectricalEquipment(): ElectricalEquipment {
        return new BMWElectricalEquipment();
    }

    createEngine(): Engine {
        return new BMWEngine();
    }

    createTransmission(): Transmission {
        return new BMWTransmission();
    }
}