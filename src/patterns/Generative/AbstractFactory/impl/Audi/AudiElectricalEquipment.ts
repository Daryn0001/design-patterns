import {ElectricalEquipment} from "../../interfaces/ElectricalEquipment";

export class AudiElectricalEquipment implements ElectricalEquipment{
    getElectricalEquipmentName(): string {
        return "Audi Electrical Equipment";
    }
}