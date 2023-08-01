const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Adoption {
    _id: ID
    name: String
}

type Medicine {
    _id:ID
    name: String
    recovered: number
    died: number
    }

type Account {
    _id: ID
    username: String
    email: String
    adoptions: [Adoption]
    Medicines: [Medicine]
}

type Auth {
    token: ID
    account: Account
}

type Query {
    accounts: [Account]
    adoptions: (account:ID, name: string)[Adoption]
    adoption: (_id:ID!): Adoption
    medicines: (account:ID, name: string)[Medicine]
    medicine: (_id:ID!): Medicine
    account: Account
}

type Mutation {
    addAccount(username:String!, email:String!, password:String!): Auth
    addAdoption(adoptions: [ID]!): Adoption
    addMedicine(adoptioins: [ID]!): Medicine
    updateAccount(username:String, email:String, password:String): Account
    updateAdoption(_id:ID!, status:String): Adoption
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;