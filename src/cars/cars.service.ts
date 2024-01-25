import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return [...this.cars];
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(CreateCarDto: CreateCarDto): Car {
    const car: Car = { id: uuid(), ...CreateCarDto };
    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto): Car {
    const car = this.findOne(id);
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = { ...car, ...updateCarDto };
    return this.cars[index];
  }

  delete(id: string): void {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeeData(cards: Car[]) {
    this.cars = cards;
  }
}
