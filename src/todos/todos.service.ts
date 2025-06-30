import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: this.idCounter++,
      title: createTodoDto.title,
      description: createTodoDto.description,
      isCompleted: false,
    };
    this.todos.push(todo);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new NotFoundException(`Todo #${id} not found`);
    return todo;
  }

  updateTodoByID(id: number, updateDto: UpdateTodoDto): Todo {
    const todo = this.getTodoById(id);
    Object.assign(todo, updateDto);
    return todo;
  }

  deleteTodo(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException(`Todo #${id} not found`);
    this.todos.splice(index, 1);
  }
}
