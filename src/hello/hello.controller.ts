import { Controller, Get, HttpCode, Req, Res, Param, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('')
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'HELLO WORLD'
        })
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return 'Pagina no encontrada'
    }

    @Get('forbidden')
    @HttpCode(403)
    forbiddenPage() {
        return 'Pagina prohibida'
    }

    @Get('internal-error')
    @HttpCode(500)
    internalErrorPage() {
        return 'Error interno del servidor'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
        return `el numero es ${num} y la suma + 14 es: ${num + 14}`;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){
        console.log(typeof status)
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet (@Query(ValidateuserPipe) query: { name: string, age: number }){
        console.log(typeof query.age)
        console.log(typeof query.name)
        return `Hola ${query.name}, tienes ${query.age + 30} años.`;
    }
}











