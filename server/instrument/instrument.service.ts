import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Instrument } from './models/instrument.model';

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(10000));
};

@Injectable()
export class InstrumentService {
  constructor(
    @InjectModel('Instrument')
    private instrumentModel: Model<Document & Instrument>
  ) {}

  async createInstrument(
    instrument: Omit<Instrument, 'instrumentId'>
  ): Promise<Instrument> {
    const createdInstrument = new this.instrumentModel({
      instrumentId: getRandomInt(),
      ...instrument
    });
    return createdInstrument.save();
  }

  async getAllInstruments(): Promise<Instrument[]> {
    return this.instrumentModel.find();
  }

  async removeInstrument(
    instrumentId: Instrument['instrumentId']
  ): Promise<Instrument['instrumentId']> {
    await this.instrumentModel.deleteOne({ instrumentId });
    return instrumentId;
  }
}
