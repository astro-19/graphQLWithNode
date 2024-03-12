import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// types
import { typeDefs } from "./schema.js";
import db from "./_db.js"

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        }
    }
}

// server configuration
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 1913 }
})

console.log("Server started at port " + 1913)