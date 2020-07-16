import React, { useCallback, useState, useMemo } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { InstrumentsList } from './InstrumentsList/InstrumentsList';
import { Instrument } from './types/Instrument';
import {
  GET_ALL_INSTRUMENTS,
  REMOVE_INSTRUMENT,
  CREATE_INSTRUMENT
} from './gql';
import { AddInstrumentForm } from './AddInstrumentForm';
import { InstrumentSearchBar } from './InstrumentsSearchBar/InstrumentSearchBar';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');

  const {
    data: { instruments } = { instruments: [] },
    refetch: getAllInstrumentsRefetch
  } = useQuery<{
    instruments: Instrument[];
  }>(GET_ALL_INSTRUMENTS);

  const [removeInstrument] = useMutation(REMOVE_INSTRUMENT);
  const [createInstrument] = useMutation(CREATE_INSTRUMENT);

  const handleRemoveInstrument = useCallback(
    (instrumentId: Instrument['instrumentId']) => {
      removeInstrument({ variables: { instrumentId } });
      getAllInstrumentsRefetch();
    },
    [removeInstrument, getAllInstrumentsRefetch]
  );

  const handleCreateInstrument = useCallback(
    (instrumentInput: Omit<Instrument, 'instrumentId'>) => {
      createInstrument({
        variables: {
          instrumentInput
        }
      });
      getAllInstrumentsRefetch();
    },
    [createInstrument, getAllInstrumentsRefetch]
  );

  const filteredInstruments = useMemo(() => {
    const searchInputLowercase = searchInput.toLowerCase();

    return instruments.filter(({ name, symbol, instrumentType }) => {
      const params = [name, symbol, instrumentType];
      return params.some((param) =>
        param.toLowerCase().includes(searchInputLowercase)
      );
    });
  }, [searchInput, instruments]);

  return (
    <div style={{ display: 'flex' }}>
      <AddInstrumentForm addInstrument={handleCreateInstrument} />
      <div className='layout'>
        <InstrumentSearchBar
          style={{ marginBottom: '1em' }}
          value={searchInput}
          onChange={setSearchInput}
        />
        <InstrumentsList
          instruments={filteredInstruments}
          removeInstrument={handleRemoveInstrument}
        />
      </div>
    </div>
  );
};

export default App;
