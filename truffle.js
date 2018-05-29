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
            from: "0x994A00E5D296c58A5313c03f17EfF9c111aC9281",
            network_id: 4,
            gas: 4612388 
          }
    }
};