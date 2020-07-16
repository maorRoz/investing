import { Resolver, Args, Query, Mutation, Int } from '@nestjs/graphql';
import { Instrument } from './models/instrument.model';
import { InstrumentService } from './instrument.service';
import { InstrumentInput, InstrumentIdInput } from './inputs/Instrument.input';

@Resolver(() => Instrument)
export class InstrumentResolver {
  constructor(private instrumentService: InstrumentService) {}

  @Query(() => [Instrument])
  instruments(): Promise<Instrument[]> {
    return this.instrumentService.getAllInstruments();
  }

  @Mutation(() => Instrument)
  async createInstrument(
    @Args('instrumentInput') instrumentInput: InstrumentInput
  ): Promise<Instrument> {
    return this.instrumentService.createInstrument(instrumentInput);
  }

  @Mutation(() => Int)
  async removeInstrument(
    @Args('instrumentIdInput') { instrumentId }: InstrumentIdInput
  ): Promise<Instrument['instrumentId']> {
    return this.instrumentService.removeInstrument(instrumentId);
  }
}
