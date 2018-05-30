pragma solidity ^0.4.23;

contract OCW {

    event LogStatistics(string gender, uint age, string badgeClassId, string issuerId, uint timestamp, address issuer);

    Statistics[] statistics;

    struct Statistics {
        string gender;
        uint age;
        string badgeClassId;
        string issuerId;
        uint timestamp;
        address issuer;
    }

    function storeStatistics(string gender, uint age, string badgeClassId, string issuerId, uint timestamp) public {
        statistics.push(Statistics(gender, age, badgeClassId, issuerId, timestamp, msg.sender));
        emit LogStatistics(gender, age, badgeClassId, issuerId, timestamp, msg.sender);
    }


}