import React, { CSSProperties } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';

export type InstrumentSearchBar = {
  style: CSSProperties;
  value: string;
  onChange: (value: string) => void;
};

export const InstrumentSearchBar = ({
  style,
  value,
  onChange
}: InstrumentSearchBar) => (
  <OutlinedInput
    style={style}
    placeholder='Search Instrument...'
    value={value}
    onChange={(event) => onChange(event.target.value)}
    fullWidth
    startAdornment={
      <InputAdornment position='start'>
        <SearchIcon />
      </InputAdornment>
    }
  />
);
