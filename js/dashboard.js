var web3Provider;

if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(web3Provider);

var abi = JSON.parse("[{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\":" +
    " \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"\",\"type\": \"string\"}],\"name\": \"LogCreation\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"hash\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"timestamp\",\"type\": \"uint256\"}],\"name\": \"LogStorage\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"hash\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"timestamp\",\"type\": \"uint256\"},{\"indexed\": false,\"name\": \"reason\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"result\",\"type\": \"string\"}],\"name\": \"LogRevocation\",\"type\": \"event\"},{\"anonymous\": false,\"inputs\": [{\"indexed\": false,\"name\": \"hash\",\"type\": \"string\"},{\"indexed\": false,\"name\": \"timestamp\",\"type\": \"uint256\"},{\"indexed\": false,\"name\": \"valid\",\"type\": \"bool\"},{\"indexed\": false,\"name\": \"result\",\"type\": \"string\"}],\"name\": \"LogVerification\",\"type\": \"event\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"timestamp\",\"type\": \"uint256\"},{\"name\": \"reason\",\"type\": \"string\"}],\"name\": \"revoke\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_description\",\"type\": \"string\"}],\"name\": \"setDescription\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_id\",\"type\": \"string\"},{\"name\": \"_typeImage\",\"type\": \"string\"},{\"name\": \"_caption\",\"type\": \"string\"},{\"name\": \"_author\",\"type\": \"string\"}],\"name\": \"setImage\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"_telephone\",\"type\": \"string\"}],\"name\": \"setTelephone\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"gender\",\"type\": \"string\"},{\"name\": \"age\",\"type\": \"uint256\"},{\"name\": \"badgeClassId\",\"type\": \"string\"},{\"name\": \"issuerId\",\"type\": \"string\"},{\"name\": \"timestamp\",\"type\": \"uint256\"}],\"name\": \"store\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"inputs\": [{\"name\": \"id\",\"type\": \"string\"},{\"name\": \"typeOB\",\"type\": \"string\"},{\"name\": \"name\",\"type\": \"string\"},{\"name\": \"url\",\"type\": \"string\"},{\"name\": \"email\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"constructor\"},{\"constant\": false,\"inputs\": [{\"name\": \"hash\",\"type\": \"string\"},{\"name\": \"timestamp\",\"type\": \"uint256\"}],\"name\": \"verify\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"},{\"name\": \"\",\"type\": \"string\"},{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"description\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"email\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"id\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"image\",\"outputs\": [{\"name\": \"id\",\"type\": \"string\"},{\"name\": \"typeImage\",\"type\": \"string\"},{\"name\": \"caption\",\"type\": \"string\"},{\"name\": \"author\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"name\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"telephone\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"typeOB\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [],\"name\": \"url\",\"outputs\": [{\"name\": \"\",\"type\": \"string\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"}]");
var contractAddress = "0x861e60CA218728Cf8736C70fa7895d098719465d";
var contract = web3.eth.contract(abi).at(contractAddress);

function dashboard() {

    contract.LogStorage(function (error, result) {
        if (!error) {
            console.log(result);

            var table = document.getElementById("storageTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);

            var ts = new Date(parseInt(result.args.timestamp, 10));
            var tstamp = ts.toString('dd/MM/yy HH:mm:ss');

            cell1.innerHTML = result.args.hash;
            cell2.innerHTML = tstamp;
        } else {
            console.log(error);
        }
    });

    contract.LogRevocation(function (error, result) {
        if (!error) {
            console.log(result);

            var table = document.getElementById("revocationTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            var ts = new Date(parseInt(result.args.timestamp, 10));
            var tstamp = ts.toString('dd/MM/yy HH:mm:ss');

            cell1.innerHTML = result.args.hash;
            cell2.innerHTML = tstamp;
            cell3.innerHTML = result.args.reason;
            cell4.innerHTML = result.args.result;
        } else {
            console.log(error);
        }
    });

    contract.LogVerification(function (error, result) {
        if (!error) {
            console.log(result);

            var table = document.getElementById("verificationTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            var ts = new Date(parseInt(result.args.timestamp, 10));
            var tstamp = ts.toString('dd/MM/yy HH:mm:ss');

            cell1.innerHTML = result.args.hash;
            cell2.innerHTML = tstamp;
            cell3.innerHTML = result.args.valid;
            cell4.innerHTML = result.args.result;
        } else {
            console.log(error);
        }
    });


}

