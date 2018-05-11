pragma solidity ^0.4.23;

import './Profile.sol';
import './BadgeContract.sol';
import './OCW.sol';

contract Issuer is BadgeContract, Profile {

    event LogCreation(string, string, string, string, string);
    event Log(string, string, string);

    mapping (string => BadgeInfo) badgeInfoMap;
    address ocwAddress = 0xA68E8aB9Ae51beCE48cA73d15a9b9fBEA1253937;
    //address ocwAddress = 0xef55bfac4228981e850936aaf042951f7b146e41;

    constructor(string id, string typeOB, string name, string url, string email) Profile(id, typeOB, name, url, email) public {
        emit LogCreation("Issuer created. Data: ", name, id, url, email);
    }

    function store(string hash, string assertionTime, string statistics) external {
        badgeInfoMap[hash] = BadgeInfo(assertionTime, false, "", "");

        OCW ocw = OCW(ocwAddress);
        ocw.storeStatistics(statistics);

        emit Log("The badge hash and statistics have been stored.", hash, statistics);
    }

    function revoke(string hash, string time, string reason) external {
        BadgeInfo storage info = badgeInfoMap[hash];

        if(info.revoked) {
            emit Log("The badge has already been revoked with reason: ", info.revocationReason, info.revocationTime);
        } else if(bytes(info.assertionTime).length == 0) {
            emit Log("Badge not found: ", hash, "");
        } else {
            info.revoked = true;
            info.revocationReason = reason;
            info.revocationTime = time;
            emit Log("The badge has been revoked:", hash, reason);
        }
    }

    function verify(string hash) external returns (bool, string, string) {
        BadgeInfo storage info = badgeInfoMap[hash];

        if(info.revoked) {
            return (false, "Invalid badge. The badge exists, but has been revoked:", info.revocationReason);
        } else if(bytes(info.assertionTime).length == 0) {
            return (false, "Invalid badge. Badge not found.", hash);
        } else {
            return (true, "Valid badge.", hash);
        }
    }

    struct BadgeInfo {
        string assertionTime;
        bool revoked;
        string revocationReason;
        string revocationTime;
    }
}