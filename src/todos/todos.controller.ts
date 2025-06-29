import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';
  
  @Controller('todos')
  export class TodosController {
    constructor(private readonly todosService: TodosService) {}
  
    @Post()
    create(@Body() createTodoDto: CreateTodoDto) {
      return this.todosService.create(createTodoDto);
    }
  
    @Get()
    findAll() {
      return this.todosService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.todosService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateTodoDto) {
      return this.todosService.update(id, updateDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.todosService.remove(id);
    }
  }
  