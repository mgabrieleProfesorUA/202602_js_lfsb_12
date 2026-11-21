import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service.ts';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }

/*  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return this.catsService.create(createCatDto);
  }
    */

}
