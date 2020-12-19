import apollo from "apollo-server-express";

const {gql} = apollo;

import {orderTypeDef} from "./order/typeDef";
import {userTypeDefs} from "./user/typeDef";
import {userResolver} from "./user/resolver";
import {orderResolver} from "./order/resolver";
import {GraphQLScalarType} from "graphql";

export const root = gql`
    directive @auth( isAdmin: Boolean = false ) on OBJECT | FIELD_DEFINITION
    
    enum Role {
      ADMIN
      REVIEWER
      USER
      UNKNOWN
    }  
    
    scalar Date

    
    type Query {
      root: String
    }
    
    type Mutation {
      root: String
    }
`;


export const rootResolver = {
    Query: {
        root: (obj, args, context, info) => "root",
    },

    Mutation: {
        root: (obj, args, context, info) => "root"
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(ast.value) // ast value is always in string format
            }
            return null;
        },
    }),
};


export const typeDefs = [root, orderTypeDef, userTypeDefs];

export const resolvers = [rootResolver, orderResolver, userResolver];
