var web3Provider;

if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(web3Provider);

let abi = JSON.parse("[{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogCreation\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"Log\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"Log\",\"type\": \"event\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"time\",\"type\": \"uint256\"},{\"name\": \"reason\",\"type\": \"string\"}],\"name\": \"revoke\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_description\",\"type\": \"string\"}],\"name\": \"setDescription\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_id\",\"type\": \"string\"},{\"name\": \"_typeImage\",\"type\": \"string\"},{\"name\": \"_caption\",\"type\": \"string\"},{\"name\": \"_author\",\"type\": \"string\"}],\"name\": \"setImage\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_telephone\",\"type\": \"string\"}],\"name\": \"setTelephone\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"gender\",\"type\": \"string\"},{\"name\": \"age\",\"type\": \"uint256\"},{\"name\": \"badgeClassId\",\"type\": \"string\"},{\"name\": \"issuerId\",\"type\": \"string\"},{\"name\": \"timestamp\",\"type\": \"uint256\"}],\"name\": \"store\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"inputs\": [{\"name\": \"id\",\"type\": \"string\"},{\"name\": \"typeOB\",\"type\": \"string\"},{\"name\": \"name\",\"type\": \"string\"},{\"name\": \"url\",\"type\": \"string\"},{\"name\": \"email\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"constructor\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"}],\"name\": \"verify\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"},{\"name\": \"\",\"type\": \"string\"},{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"description\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"email\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"id\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"image\",\"outputs\": [{\"name\": \"id\",\"type\": \"string\"},{\"name\": \"typeImage\",\"type\": \"string\"},{\"name\": \"caption\",\"type\": \"string\"},{\"name\": \"author\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"name\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"telephone\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"typeOB\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"url\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"}]");
let contractAddress = "0x2Db4BA308850B50C1023bE0F436322c7B0375a0D";
let contract = web3.eth.contract(abi).at(contractAddress);

function storeBadgeOnBlockchain() {
    let hash = hashOpenBadge(sessionStorage.getItem("openBadge"));
    //let time = new Date().toLocaleString();
    //let statistics = sessionStorage.getItem("metadataDataStatistics");
    let gender = "Male";
    let age = 60;
    let badgeClassId = "bcId";
    let issuerId = "iId";
    let time = new Date() * 1;

    console.log(hash, gender, age, badgeClassId, issuerId, time);

    contract.store.sendTransaction(hash, gender, age, badgeClassId, issuerId, time, {
            from: web3.eth.accounts[0],
            gas: 4000000
        },
        function (error, result) {
            if (!error) {
                console.log(result);
                sessionStorage.setItem('Badgehash', hash);

            } else {
                console.error(error);
            }
        });
}

function revokeBadgeOnBlockchain() {
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
            } else {
                console.error(error);
            }
        });
}

function verifyBadgeOnBlockchain(source) {
    // TODO: create full badge from deidentified badge and input
    let hash = null;

    if (source === "issuepage") {
        hash = sessionStorage.getItem("Badgehash");
    }
    else {
        hash = verify(document.getElementById("verifyJson").value);
    }
    console.log(hash);

    contract.verify.call(hash, {
            from: web3.eth.accounts[0],
            gas: 4000000
        },
        function (error, result) {
            if (!error) {
                console.log(result[0], result[1], result[2]);

                if(result[0]) {
                    alert('The badge with hash ' + result[2] + ' is valid.');
                } else {
                    if(result[1] === 'Invalid badge. Badge not found.') {
                        alert(result[1] + ' (' + result[2] + ')');
                    } else {
                        alert(result[1] + ' ' + result[2]);
                    }
                }
            } else {
                console.error(error);
                alert.error(error);
            }
        });
}

function getStatisticalData() {
    let address_issuer = "0x350BdAfafD67309687946Ff910eb5a6064d96C05";
    contract.getStatisticsFor.call(address_issuer, {
        from: web3.eth.accounts[0],
        gas: 4000000
    },
        function (error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.error(error);
            }
        });
}