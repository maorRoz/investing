import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Instrument } from '../types/Instrument';
import { InstrumentBoxLayout } from './style';

export type InstrumentBoxProps = {
  instrument: Instrument;
  removeInstrument: (instrumentId: Instrument['instrumentId']) => void;
};

export const InstrumentBox = ({
  instrument,
  removeInstrument
}: InstrumentBoxProps) => (
  <InstrumentBoxLayout>
    <div style={{ flex: 3 }}>{instrument.name}</div>
    <div style={{ flex: 2, color: '#838383' }}>{instrument.symbol}</div>
    <div style={{ flex: 2, color: '#838383' }}>{instrument.instrumentType}</div>
    <IconButton
      color='secondary'
      onClick={() => removeInstrument(instrument.instrumentId)}
    >
      <CloseIcon />
    </IconButton>
  </InstrumentBoxLayout>
);
