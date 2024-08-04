import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule .forRoot({
      rootPath: join(__dirname, '..', 'src/public'), // 指定图片文件的根目录
      serveRoot: '/', // 将静态文件服务到 /images 路径下
      serveStaticOptions: {
        extensions: ['jpg', 'jpeg', 'png', 'gif'], // 只允许访问这些图片格式的文件
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
