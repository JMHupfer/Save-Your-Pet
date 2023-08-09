const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Adoption {
    _id: ID
    name: String
    type: String
    age: Int
    description: String
}

type Medicine {
    _id:ID
    name: String
    recovered: String
    died: String
    }

type Account {
    _id: ID
    username: String
    email: String
    password: String
    adoptions: [Adoption]
    Medicines: [Medicine]
}

type Auth {
    token: ID
    account: Account
}

type Query {
    accounts: [Account]
    adoptions: [Adoption]
    adoption(_id:ID!): Adoption
    medicines: [Medicine]
    medicine(_id:ID!): Medicine
    account: Account
    getAllMedicine:[Medicine]
}

type Mutation {
    addAccount(username:String!, email:String!, password:String!): Auth
    addAdoption(adoptions: [ID]!): Adoption
    addMedicine(adoptions: [ID]!): Medicine
    updateAccount(username:String, email:String, password:String): Account
    updateAdoption(_id:ID!, status:String): Adoption
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;