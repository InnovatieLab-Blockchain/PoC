pragma solidity ^0.4.23;

interface BadgeContract {

    function store(string hash, string timestamp, string statistics) external;

    function revoke(string hash, string timestamp, string revocationReason) external;

    function verify(string hash) external returns (bool, string, string);

}
