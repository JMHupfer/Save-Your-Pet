import { gql } from "@apollo/client";

export const QUERY_ADOPTIONS = gql`
  query Adoptions {
    adoptions {
      _id
      name
      type
      age
      description
    }
  }
`;

export const QUERY_MEDICINE = gql`
  query Medicines {
    medicines {
      name
      recovered
      died
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
