pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract OCW {

    event LogStoreStatistics(string, address, string);
    event LogGetStatistics(string, address);

    struct Statistics {
        string[] json;
    }

    mapping (address => Statistics) statistics;

    function storeStatistics(string data) public {
        statistics[msg.sender].json.push(data);
        emit LogStoreStatistics("New statistics have been stored. Issuer and statistics: ", msg.sender, data);
    }

    function getStatisticsFor(address issuer) public returns (string[]) {
        emit LogGetStatistics("Retrieve statistics for issuer: ", issuer);
        return statistics[issuer].json;
    }

}