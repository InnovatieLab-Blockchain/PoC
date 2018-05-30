pragma solidity ^0.4.23;

interface BadgeContract {

    function store(string hash, string gender, uint age, string badgeClassId, string issuerId, uint timestamp) external;

    function revoke(string hash, uint timestamp, string revocationReason) external;

    function verify(string hash) external returns (bool, string, string);

}

