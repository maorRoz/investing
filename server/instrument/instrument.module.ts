import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstrumentSchema } from './models/instrument.model';
import { InstrumentService } from './instrument.service';
import { InstrumentResolver } from './instrument.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Instrument', schema: InstrumentSchema }
    ])
  ],
  providers: [InstrumentService, InstrumentResolver]
})
export class InstrumentModule {}
