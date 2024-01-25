import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private carService: CarsService,
    private brandService: BrandsService,
  ) {}

  populateDB() {
    this.carService.fillCarsWithSeeData(CARS_SEED);

    this.brandService.fillBrandsWithSeeData(BRANDS_SEED);

    return 'Database populated';
  }
}
