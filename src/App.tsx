import React, { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { InstrumentsList } from './InstrumentsList/InstrumentsList';
import { Instrument } from './types/Instrument';
import {
  GET_ALL_INSTRUMENTS,
  REMOVE_INSTRUMENT,
  CREATE_INSTRUMENT
} from './gql';
import { AddInstrumentForm } from './AddInstrumentForm';

export const App = () => {
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

  return (
    <div style={{ display: 'flex' }}>
      <AddInstrumentForm addInstrument={handleCreateInstrument} />
      <div className='layout'>
        <InstrumentsList
          instruments={instruments}
          removeInstrument={handleRemoveInstrument}
        />
      </div>
    </div>
  );
};

export default App;
