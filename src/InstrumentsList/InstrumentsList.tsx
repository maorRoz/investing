import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Instrument } from '../types/Instrument';
import { GET_ALL_INSTRUMENTS } from '../gql';
import { InstrumentBox } from './InstrumentBox';

export const InstrumentsList = () => {
  const {
    data: instrumentsResponseData = { instruments: [] },
    refetch: getAllInstrumentsRefetch
  } = useQuery<{
    instruments: Instrument[];
  }>(GET_ALL_INSTRUMENTS);

  return (
    <>
      {instrumentsResponseData.instruments.map((instrument, index) => (
        <InstrumentBox key={index} instrument={instrument} />
      ))}
    </>
  );
};
