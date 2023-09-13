import { Component } from '@angular/core';
import {Car} from "../patterns/Generative/AbstractFactory/interfaces/Car";
import {Audi} from "../patterns/Generative/AbstractFactory/impl/Audi/Audi";
import {BMW} from "../patterns/Generative/AbstractFactory/impl/BMW/BMW";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patterns';


  constructor() {
    this.clientCode(new Audi());
    this.clientCode(new BMW());
  }


  clientCode(factory: Car) {
    const electricalEquipment = factory.createElectricalEquipment();
    const transmission = factory.createTransmission();
    const engine = factory.createEngine();

    console.log(factory.constructor.name, ' electricalEquipment: ', electricalEquipment.getElectricalEquipmentName());
    console.log(factory.constructor.name, 'transmission: ', transmission.getTransmissionName());
    console.log(factory.constructor.name, 'engine: ', engine.getEngineName());

    console.log('\n##########################################################\n\n')
  }
}
