// DD INIT - start
const httpServerOptions = {
    middleware: false,
};
const graphqlOptions = {
    depth: 2,
    collapse: true,
    signature: false
};
const tracer = require('dd-trace');
tracer.init({
    plugins: false
});
tracer.use('http', {
    server: httpServerOptions,
});
tracer.use('express', httpServerOptions);
tracer.use('graphql', graphqlOptions);
// DD INIT - end

const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

// use for Dev
const gateway = new ApolloGateway({
    serviceList: [
        {name: 'books', url: 'http://localhost:4001'},
        {name: 'publishers', url: 'http://localhost:4002'}
    ],
    debug: true,
});

const server = new ApolloServer({
    gateway,
    subscriptions: false
});

server.listen().then(({url}) => {
    console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {
    console.error(err)
});
