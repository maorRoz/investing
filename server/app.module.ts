import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { InstrumentModule } from './instrument/instrument.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:rootpassword@localhost:27017/admin',
      { useNewUrlParser: true, useCreateIndex: true }
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'server/schema.gql')
    }),
    InstrumentModule
  ]
})
export class AppModule {}
