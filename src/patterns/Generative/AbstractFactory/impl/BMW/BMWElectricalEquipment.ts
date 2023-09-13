import {ElectricalEquipment} from "../../interfaces/ElectricalEquipment";

export class BMWElectricalEquipment implements  ElectricalEquipment {
    getElectricalEquipmentName(): string {
        return "BMW Electrical Equipment";
    }
}