var web3Provider;

if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(web3Provider);

let abi = JSON.parse("[{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"gender\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"age\",\"type\": \"uint256\"},{\"indexed\": false,\"name\": \"badgeClassId\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"issuerId\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"timestamp\",\"type\": \"uint256\"},{\"indexed\": false,\"name\": \"issuer\",\"type\": \"address\"}],\"name\": \"LogStatistics\",\"type\": \"event\"},{\"constant\": false,\"inputs\": [{\"name\": \"gender\",\"type\": \"string\"},{\"name\": \"age\",\"type\": \"uint256\"},{\"name\": \"badgeClassId\",\"type\": \"string\"},{\"name\": \"issuerId\",\"type\": \"string\"},{\"name\": \"timestamp\",\"type\": \"uint256\"}],\"name\": \"storeStatistics\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"}]");
let contractAddress = "0x0457173093Bec092E0ea8b8f8b93930850cFA99E";
let contract = web3.eth.contract(abi).at(contractAddress);


function getStatisticalData() {

    contract.LogStatistics({}, {
        fromBlock: 0,
        toBlock: 'latest'
    }, function (error, result) {
        if (!error) {
            console.log('Geslacht: ' + result.args.gender);
            console.log('Leeftijd: ' + result.args.age);
            console.log('BadgeClassID: ' + result.args.badgeClassId);
            console.log('IssuerID: ' + result.args.issuerId);
            console.log('Tijd: ' + result.args.timestamp);
            console.log('Issuer: ' + result.args.issuer);
            console.log(' ');
        } else {
            console.log(error);
        }
    });

}

