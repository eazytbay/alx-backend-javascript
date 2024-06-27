import Car from './10-car'; 

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); 
    this._range = range;
  }

  get motor() {
    return this._motor;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car();
  }

  toString() {
    return `EVCar { _brand: '${this._brand}', _motor: '${this._motor}', _color: '${this._color}', _range: '${this._range}' }`;
  }
}


