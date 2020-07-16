import React from 'react';
import { Instrument } from '../types/Instrument';

import { InstrumentBox } from './InstrumentBox';
import { InstrumentsListLayout } from './style';

export type InstrumentsListProps = {
  instruments: Instrument[];
  removeInstrument: (instrumentId: Instrument['instrumentId']) => void;
};

export const InstrumentsList = ({
  instruments,
  removeInstrument
}: InstrumentsListProps) => (
  <InstrumentsListLayout>
    {instruments.map((instrument, index) => (
      <InstrumentBox
        key={index}
        instrument={instrument}
        removeInstrument={removeInstrument}
      />
    ))}
  </InstrumentsListLayout>
);
