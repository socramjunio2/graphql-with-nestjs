import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from './configs/typeorm.config';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
