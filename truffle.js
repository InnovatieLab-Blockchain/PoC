module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "*"
        },
        rinkeby: {
            host: "localhost",
            port: 8545,
            from: "0xA6e514656E36E8cDd385588ffD36AD77A7203E5E",
            network_id: 4,
            gas: 4612388 
          }
    }
};