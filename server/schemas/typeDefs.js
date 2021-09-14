// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        username
        email
        password
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(username: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }
`;

//export the typeDefs
module.exports = typeDefs;