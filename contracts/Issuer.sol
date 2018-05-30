pragma solidity ^0.4.23;

import './Profile.sol';
import './BadgeContract.sol';
import './OCW.sol';

contract Issuer is BadgeContract, Profile {

    event LogCreation(string, string, string, string, string);
    event Log(string, string, string);
    event Log(string, string);

    mapping (string => BadgeInfo) badgeInfoMap;
    address ocwAddress = 0x0457173093Bec092E0ea8b8f8b93930850cFA99E;

    constructor(string id, string typeOB, string name, string url, string email) Profile(id, typeOB, name, url, email) public {
        emit LogCreation("Issuer created. Data: ", name, id, url, email);
    }

    function store(string hash, string gender, uint age, string badgeClassId, string issuerId, uint timestamp) external {
        badgeInfoMap[hash] = BadgeInfo(timestamp, false, "", 0);

        OCW ocw = OCW(ocwAddress);
        ocw.storeStatistics(gender, age, badgeClassId, issuerId, timestamp);

        emit Log("The badge hash and statistics have been stored.", hash);
    }

    function revoke(string hash, uint time, string reason) external {
        BadgeInfo storage info = badgeInfoMap[hash];

        if(info.revoked) {
            emit Log("The badge has already been revoked with reason: ", info.revocationReason);
        } else if(info.assertionTime == 0) {
            emit Log("Badge not found: ", hash);
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
        } else if(info.assertionTime == 0) {
            return (false, "Invalid badge. Badge not found.", hash);
        } else {
            return (true, "Valid badge.", hash);
        }
    }

    struct BadgeInfo {
        uint assertionTime;
        bool revoked;
        string revocationReason;
        uint revocationTime;
    }
}