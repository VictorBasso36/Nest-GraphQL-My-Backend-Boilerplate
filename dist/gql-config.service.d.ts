import { ConfigService } from '@nestjs/config';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from '@nestjs/graphql';
export declare class GqlConfigService implements GqlOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createGqlOptions(): ApolloDriverConfig;
}
