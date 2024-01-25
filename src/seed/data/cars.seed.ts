import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    color: 'red',
    model: 'X5',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    color: 'blue',
    model: 'X',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    color: 'black',
    model: 'C',
  },
];
