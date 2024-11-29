import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { typeOrmConfigAsync } from './config/typeorm.config'
import { TransformInterceptor } from './domain/interceptors/transform.interceptor'
import { AuthModule } from './modules/auth.module'
import { UserModule } from './modules/users.module'
import { AuthMiddleware } from './domain/middlewares/auth.middleware'
import { ToDoListModule } from '@module/to-do-list.module'

@Module({
    imports: [
        TypeOrmModule.forRootAsync(typeOrmConfigAsync),
        AuthModule,
        UserModule,
        ToDoListModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor,
        }
    ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
        .exclude('/v1/auth/login', '/')
        .forRoutes('*')
    }
}
