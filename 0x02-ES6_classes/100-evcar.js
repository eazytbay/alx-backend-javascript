import Car from './10-car'; 

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, color);
    this._motor = motor;
    this._range = range;
  }

  get motor() {
    return this._motor;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Return a new Car object
    return new Car(this.brand, this.color);
  }
}

