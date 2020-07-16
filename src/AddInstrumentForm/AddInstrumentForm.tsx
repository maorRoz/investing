import React, { useState, useMemo, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Instrument } from '../types/Instrument';
import { FormLayout } from './style';

export type AddInstrumentFormProps = {
  addInstrument: (instrument: Omit<Instrument, 'instrumentId'>) => void;
};

export const AddInstrumentForm = ({
  addInstrument
}: AddInstrumentFormProps) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [instrumentType, setInstrumentType] = useState('');

  const resetValues = useCallback(() => {
    setName('');
    setSymbol('');
    setInstrumentType('');
  }, []);

  const submitInstrument = useCallback(async () => {
    addInstrument({
      name,
      symbol,
      instrumentType
    });
    resetValues();
  }, [addInstrument, name, symbol, instrumentType, resetValues]);

  const isSubmitValid = useMemo(() => name && symbol && instrumentType, [
    name,
    symbol,
    instrumentType
  ]);
  return (
    <FormLayout>
      <div>
        <TextField
          label='Instrument Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{ marginRight: '2em' }}
        />
        <TextField
          label='Instrument Symbol'
          value={symbol}
          onChange={(event) => setSymbol(event.target.value)}
        />
      </div>
      <div>
        <TextField
          label='Instrument Type'
          value={instrumentType}
          onChange={(event) => setInstrumentType(event.target.value)}
        />
      </div>
      <Button
        data-testid='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px' }}
        onClick={submitInstrument}
        disabled={!isSubmitValid}
      >
        Submit
      </Button>
    </FormLayout>
  );
};
