import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/users', method: RequestMethod.GET }, //Solo funciona en las rutas de tipo GET
      { path: '/users', method: RequestMethod.POST } //Solo funciona en las rutas de tipo POST
    ).apply(AuthMiddleware).forRoutes('users');
  }
}
