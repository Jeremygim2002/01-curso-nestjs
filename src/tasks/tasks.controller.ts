import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import type { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        console.log(id)
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTasks(@Body() task: CreateTaskDto) {
        return this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTasks(task);
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }

    @Patch()
    updateTasksStatus() {
        return this.tasksService.updateTasksStatus();
    }
}


