import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class InstrumentInput {
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

@InputType()
export class InstrumentIdInput {
  @IsNumber()
  @Field()
  instrumentId!: number;
}
