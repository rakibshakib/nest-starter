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
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { TodosService } from './todos.service';
  
  @Controller('todos')
  export class TodosController {
    constructor(private readonly todosService: TodosService) {}
  
    @Post()
    createTodo(@Body() createTodoDto: CreateTodoDto) {
      return this.todosService.createTodo(createTodoDto);
    }
  
    @Get()
    getAllTodos() {
      return this.todosService.getAllTodos();
    }
  
    @Get(':id')
    getTodoById(@Param('id', ParseIntPipe) id: number) {
      return this.todosService.getTodoById(id);
    }
  
    @Patch(':id')
    updateTodoByID(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateTodoDto) {
      return this.todosService.updateTodoByID(id, updateDto);
    }
  
    @Delete(':id')
    deleteTodo(@Param('id', ParseIntPipe) id: number) {
      return this.todosService.deleteTodo(id);
    }
  }
  