/* eslint-disabled */
import Car from './10-car';

export default class EVCar extends Car {
	constructor(brand, motor, color, range) {
		super(brand, motor, color);
		this._range = range;
	static get [Symbol.species](){
	  return this;
	}
	}

	cloneCar() {
	  const cloneCar = this.constructor[Symbol.species]();
		return new cloneCar;
	}
}
