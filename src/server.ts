import {GraphQLServer} from 'graphql-yoga'
import {resolvers} from './resolvers'
import path from 'path'


const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schemas/schema.graphql'), 
    resolvers
})
server.start()