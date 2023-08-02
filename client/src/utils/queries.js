import { gql } from '@apollo/client';

export const QUERY_ADOPTION = gql`
{
    adoptions(save: $save) {
        _id
        type
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
{
    Medicines(save: $save) {
        name
        recovered
        died
        accounts {
            _id
        }
    }
}`;

export const QUERY_ACCOUNT = gql`
{
    account{
        username
        save{
            _id
            saveDate
            adoptions{
                _id
                type
                breed
                name
                gender
                age
                color
                status
                location
                organization
            }
            medicine{
                name
                recovered
                died
            }
        }
    }
}
`

