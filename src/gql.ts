import { gql } from 'apollo-boost';

export const CREATE_INSTRUMENT = gql`
  mutation CreateInstrument($instrumentInput: InstrumentInput!) {
    createInstrument(instrumentInput: $instrumentInput) {
      instrumentId
      name
      symbol
      instrumentType
    }
  }
`;

export const REMOVE_INSTRUMENT = gql`
  mutation RemoveInstrument($instrumentId: Float!) {
    removeInstrument(instrumentIdInput: { instrumentId: $instrumentId })
  }
`;

export const GET_ALL_INSTRUMENTS = gql`
  query getAllInstruments {
    instruments {
      instrumentId
      name
      symbol
      instrumentType
    }
  }
`;
