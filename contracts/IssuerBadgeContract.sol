pragma solidity ^0.4.23;

interface IssuerBadgeContract {

    function storeBadge(bytes32 hash, string timestamp, string statistics) external;

    function revokeBadge(bytes32 hash, string timestamp, string revocationReason) external;

}