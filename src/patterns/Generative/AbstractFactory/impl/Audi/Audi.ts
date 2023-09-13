import {Engine} from "../../interfaces/Engine";
import {Car} from "../../interfaces/Car";
import {ElectricalEquipment} from "../../interfaces/ElectricalEquipment";
import {Transmission} from "../../interfaces/Transmission";
import {AudiEngine} from "./AudiEngine";
import {AudiTransmission} from "./AudiTransmission";
import {AudiElectricalEquipment} from "./AudiElectricalEquipment";

export class Audi implements Car {
    createElectricalEquipment(): ElectricalEquipment {
        return new AudiElectricalEquipment();
    }

    createEngine(): Engine {
        return new AudiEngine();
    }

    createTransmission(): Transmission {
        return new AudiTransmission();
    }

}
