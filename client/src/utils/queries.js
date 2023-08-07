import { gql } from '@apollo/client';

export const QUERY_ADOPTION = gql`
  query Adoptions($save: ID) {
    adoptions(save: $save) {
        _id
        breed
        name
        gender
        age
        color
        status
        location
        organization
        accounts {
            _id
        }
    }
  }
`;

export const QUERY_MEDICINE = gql`
  query Medicines($save: ID) {
    Medicines(save: $save) {
        name
        recovered
        died
        accounts {
            _id
        }
    }
  }
`;

export const QUERY_ACCOUNT = gql`
  query AccountInfo {
    account {
        username
        adoptions {
            _id
            breed
            name
            gender
            age
            color
            status
            location
            organization
        }
        medicines {
            name
            recovered
            died
        }
    }
  }
`;


