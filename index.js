const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

// use for Dev
const gateway = new ApolloGateway({
    serviceList: [
        {name: 'books', url: 'http://localhost:4001'},
        {name: 'publishers', url: 'http://localhost:4002'},
        {name: 'users', url: 'http://localhost:4003'}
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
