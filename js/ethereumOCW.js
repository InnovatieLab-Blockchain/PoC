var web3Provider;

if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(web3Provider);

let abi = [{ "constant": false, "inputs": [{ "name": "data", "type": "string" }], "name": "storeStatistics", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "issuer", "type": "address" }], "name": "getStatisticsFor", "outputs": [{ "name": "", "type": "string[]" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "", "type": "string" }, { "indexed": false, "name": "", "type": "address" }, { "indexed": false, "name": "", "type": "string" }], "name": "LogStoreStatistics", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "", "type": "string" }, { "indexed": false, "name": "", "type": "address" }], "name": "LogGetStatistics", "type": "event" }];
let contractAddress = "0xA68E8aB9Ae51beCE48cA73d15a9b9fBEA1253937";
let contract = web3.eth.contract(abi).at(contractAddress);

function getStatisticalData() {
    //TODO: extract json from uploaded file and hash
    // let hash = Sha256.hash(getJsonFromUrl(document.getElementById("revokeHash").value));

    let address_issuer = "0x350BdAfafD67309687946Ff910eb5a6064d96C05";
    contract.getStatisticsFor.call(address_issuer, {
        from: web3.eth.accounts[0],
        gas: 4000000
    },
        function (error, result) {
            if (!error) {
                console.log(result);
                
                sessionStorage.setItem("createdMetaData", JSON.stringify(result));
                displayContractMetaData();
            } else {
                console.error(error);
            }
        });
}



const displayContractMetaData = () => {
    let displayMetaData = JSON.parse(sessionStorage.createdMetaData);
    let created_metadata_text = "";
    for (let key in displayMetaData) {
        created_metadata_text += key + ": " + displayMetaData[key] + "<br>";
    }
    
    document.getElementById("createdMetaData").innerHTML = created_metadata_text;

};