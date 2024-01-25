import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { CarsService } from './cars/cars.service';
import { BrandsService } from './brands/brands.service';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [CarsService, BrandsService],
  exports: [],
})
export class AppModule {}
