import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email:String!, $password: String!) {
    login(email:$email, password: $password) {
        token
        account {
            _id
        }
    }
}
`;

export const ADD_ADOPTION = gql`
mutation addSave($adoptions: [ID]!) {
    addSave(adoptions: $adoptions) {
        saveDate
        adoptions {
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
            account {
                username
            }
        }
    }
}
`;

export const ADD_MEDICINE = gql `
mutation addSave($medicines: [ID]!) {
    addSave(medicines: $medicines) {
        saveDate
        medicines {
            name
            recovered
            died
            account {
                username
            }
        }
    }
}
`;

export const ADD_ACCOUNT = gql `
mutation addAccount(
    $username: String!
    $email: String!
    $password: String!
) {
    addAccount(
        username: $username
        email: $email
        password: $password
    ) {
        token
        account {
            _id
        }
    }
}
`;
