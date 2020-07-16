import { gql } from 'apollo-boost';

export const CREATE_INSTRUMENT = gql`
  mutation CreateInstrument($InstrumentInput: InstrumentInput!) {
    createInstrument(instrumentInput: $InstrumentInput) {
      instrumentId
      name
      symbol
      instrumentType
    }
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
