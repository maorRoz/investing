import React from 'react';
import { Instrument } from '../types/Instrument';

export const InstrumentBox = ({ instrument }: { instrument: Instrument }) => (
  <div>{instrument.name}</div>
);
