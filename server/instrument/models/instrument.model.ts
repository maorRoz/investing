import * as mongoose from 'mongoose';
import { IsString, IsNumber } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Instrument {
  @IsNumber()
  @Field()
  instrumentId!: number;

  @IsString()
  @Field()
  name!: string;

  @IsString()
  @Field()
  symbol!: string;

  @IsString()
  @Field()
  instrumentType!: string;
}

export const InstrumentSchema = new mongoose.Schema({
  instrumentId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  instrumentType: { type: String, required: true }
});
