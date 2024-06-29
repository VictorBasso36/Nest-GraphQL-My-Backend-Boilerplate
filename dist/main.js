"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nestjs_prisma_1 = require("nestjs-prisma");
const app_module_1 = require("./app.module");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableShutdownHooks();
    app.use((0, express_1.json)({ limit: '50mb' }));
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new nestjs_prisma_1.PrismaClientExceptionFilter(httpAdapter));
    const configService = app.get(config_1.ConfigService);
    const nestConfig = configService.get('nest');
    const corsConfig = configService.get('cors');
    const swaggerConfig = configService.get('swagger');
    if (swaggerConfig.enabled) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle(swaggerConfig.title || 'Nestjs')
            .setDescription(swaggerConfig.description || 'The nestjs API description')
            .setVersion(swaggerConfig.version || '1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
    }
    if (corsConfig.enabled) {
        app.enableCors();
    }
    await app.listen(process.env.PORT || nestConfig.port || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map