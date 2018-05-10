var web3Provider;

if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(web3Provider);

let abi = JSON.parse("[{\"constant\": true,\"inputs\": [],\"name\": \"name\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"typeOB\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"assertionTime\",\"type\": \"string\"},{\"name\": \"statistics\",\"type\": \"string\"}],\"name\": \"store\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"url\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"description\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"email\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_description\",\"type\": \"string\"}],\"name\": \"setDescription\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"time\",\"type\": \"string\"},{\"name\": \"reason\",\"type\": \"string\"}],\"name\": \"revoke\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"telephone\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"id\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_telephone\",\"type\": \"string\"}],\"name\": \"setTelephone\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"}],\"name\": \"verify\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_id\",\"type\": \"string\"},{\"name\": \"_typeImage\",\"type\": \"string\"},{\"name\": \"_caption\",\"type\": \"string\"},{\"name\": \"_author\",\"type\": \"string\"}],\"name\": \"setImage\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"image\",\"outputs\": [{\"name\": \"id\",\"type\": \"string\"},{\"name\": \"typeImage\",\"type\": \"string\"},{\"name\": \"caption\",\"type\": \"string\"},{\"name\": \"author\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"inputs\": [{\"name\": \"id\",\"type\": \"string\"},{\"name\": \"typeOB\",\"type\": \"string\"},{\"name\": \"name\",\"type\": \"string\"},{\"name\": \"url\",\"type\": \"string\"},{\"name\": \"email\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"constructor\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogCreation\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogStorage\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogRevocation\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogStatistics\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogVerification\",\"type\": \"event\"}]");
let contractAddress = "0xd01ffc9f6f637daac866639596d846505fefd2c4";
let contract = web3.eth.contract(abi).at(contractAddress);

function storeBadgeOnBlockchain() {
    let hash = hashOpenBadge(sessionStorage.getItem("openBadge"));
    let time = new Date().toLocaleString();
    let statistics = sessionStorage.getItem("metadataData");

    console.log(hash, time, statistics);
    contract.store.sendTransaction(hash, time, statistics, {
            from: web3.eth.accounts[0],
            gas: 4000000
        },
        function (error, result) {
            if (!error) {
                console.log(result);
                alert('Badge hash has been stored on the blockchain.\n The hash of the badge is ' + hash);
                sessionStorage.setItem('Badgehash', hash);

            } else {
                console.error(error);
                alert('Error during assertion of badge hash.');
            }
        });
}

function revokeBadgeOnBlockchain() {
    //TODO: extract json from uploaded file and hash
    // let hash = Sha256.hash(getJsonFromUrl(document.getElementById("revokeHash").value));

    let hash = document.getElementById("revokeHash").value;
    let time = document.getElementById("revokeTime").value;
    let reason = document.getElementById("revokeReason").value;

    contract.revoke.sendTransaction(hash, time, reason, {
            from: web3.eth.accounts[0],
            gas: 4000000
        },
        function (error, result) {
            if (!error) {
                console.log(result);
                alert('Badge hash has been revoked.');
            } else {
                console.error(error);
                alert('Error during revocation.');
            }
        });
}

function verifyBadgeOnBlockchain() {
    //TODO: extract json from uploaded file and hash
    // let hash = Sha256.hash(getJsonFromUrl(document.getElementById("verifyJson").value));
    let hash = prompt("Voer de hash in");

    contract.verify.call(hash, {
            from: web3.eth.accounts[0],
            gas: 4000000
        },
        function (error, result) {
            if (!error) {
                console.log(result);
                if (result) {
                    alert('The badge is valid!');
                } else {
                    alert('The badge is invalid!')
                }
            } else {
                console.error(error);
                alert('Error during verification of badge hash.');
            }
        });
}