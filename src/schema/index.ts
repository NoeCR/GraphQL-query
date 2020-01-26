import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import 'graphql-import-node'; // Para traer el contenido de un fichero con extensión graphql
import typeDefs from './schema.graphql';
import resolvers from '../resolvers/resolversMap';

// Relación de la definicion de la query con los métodos que resolverám
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;