import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll(): Brand[] {
    return [...this.brands];
  }

  findOne(id: string): Brand {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    const { name } = updateBrandDto;
    const brand: Brand = this.findOne(id);
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands[index] = { ...brand, name, updatedAt: new Date().getTime() };
    return this.brands[index];
  }

  remove(id: string): void {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeeData(brands: Brand[]) {
    this.brands = brands;
  }
}
