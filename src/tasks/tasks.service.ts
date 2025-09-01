import { Injectable, NotFoundException } from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks: any[] = [];

    getTasks() {
        return this.tasks;
    }

    createTasks(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task;
    }

    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id)
        if (!taskFound) {
            return new NotFoundException(`Task with id: ${id} not found`);
        }
        return taskFound;
    }

    updateTasks(task: UpdateTaskDto) {
        console.log(task)
        return 'Actualizando tareas';
    }

    deleteTasks() {
        return 'Eliminando tareas';
    }

    updateTasksStatus() {
        return 'Actualizando estado de tareas';
    }
}