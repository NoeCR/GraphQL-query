// Configuraciones de express
import express from 'express';
import compression from 'compression';
import cors from 'cors';
// Configuracion para definir los esquemas de GraphQL y los resolvers
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
// Configuración de las opciones HTTP para el uso de la UI de GraphQL en express
// import graphQLHTTP from 'express-graphql';  -> Deshabilitado para usar Apollo server 
// Servidor de Apollo para montar el playground con nuestros datos
import { ApolloServer } from 'apollo-server-express';
// Importación del schema
import schema from './schema/index';
// Metodo que nos permitira crear un servidor http
import { createServer } from 'http';

const app = express();

app.use('*', cors());

app.use(compression());

// Servidor Apollo para leer nuestros scheams
const server = new ApolloServer({
    schema,
    introspection: true
});
// Configuración para leer en formato JSON 
server.applyMiddleware({ app });

// Configuración para usar la interface de GraphQL con express
// app.use('/', graphQLHTTP({
//     schema: schema,
//     graphiql: true
// }));

const PORT = 5300;
// Creamos servidor HTTP usando la configuración de nuestra app
const httpServer = createServer(app);

httpServer.listen(
    { port: PORT },
    () => console.log(`API GraphQl http://localhost:${PORT}/graphql`)
);