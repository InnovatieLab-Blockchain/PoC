pragma solidity ^0.4.23;

interface BadgeContract {

    function store(bytes32 hash, string timestamp, string statistics) external;

    function revoke(bytes32 hash, string timestamp, string revocationReason) external;

    function verify(bytes32 hash) external returns (bool);

}