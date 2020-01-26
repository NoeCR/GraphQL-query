import { IResolvers } from "graphql-tools";



const query : IResolvers = {
    Query: {
        hello(): string {
            return 'Hi everybody'
        },
        helloWithName(__: void, { name } ): string {
            return `Hello ${name}`
        },
        helloCourseGraphQL(): string {
            return 'Hello to the course of GraphQL!'
        }
    }
};

export default query;