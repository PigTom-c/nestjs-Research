import { Controller, Get, Post, Put, Delete, All, HttpCode, Param, Body } from "@nestjs/common";
import { CreateCatDto } from "../../dto/create-cat.dto";
import { UpdateCatDto } from "../../dto/update-cat.dto";

@Controller('cats')
export class CatsController {
  @Get('ab*cd')
  @HttpCode(201)
  async findAll(): Promise<any[]> {
    return [];
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log(createCatDto);
    return 'adds a new cat';
  }

  @All('all')
  all(): string {
    return 'this is all';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
