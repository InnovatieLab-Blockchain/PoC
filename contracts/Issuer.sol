pragma solidity ^0.4.23;

import './Profile.sol';
import './BadgeContract.sol';
import './OCW.sol';

contract Issuer is BadgeContract, Profile {

    event LogCreation(string, string, string, string, string);
    event LogStorage(string, string);
    event LogRevocation(string, string, string);
    event LogStatistics(string, string);
    event LogVerification(string, string, string);

    mapping (string => BadgeInfo) badgeInfoMap;
    address ocwAddress = 0xA68E8aB9Ae51beCE48cA73d15a9b9fBEA1253937;

    constructor(string id, string typeOB, string name, string url, string email) Profile(id, typeOB, name, url, email) public {
        emit LogCreation("Issuer created. Data: ", name, id, url, email);
    }

    function store(string hash, string assertionTime, string statistics) external {
        badgeInfoMap[hash] = BadgeInfo(assertionTime, false, "", "");
        emit LogStorage("Stored a badge with hash:", hash);

        OCW ocw = OCW(ocwAddress);
        ocw.storeStatistics(statistics);
        emit LogStatistics("Statistical data:", statistics);
    }

    function revoke(string hash, string time, string reason) external {
        BadgeInfo storage info = badgeInfoMap[hash];

        if(info.revoked) {
            emit LogRevocation("The badge has already been revoked. Hash and reason:", hash, info.revocationReason);
        } else if(bytes(info.assertionTime).length == 0) {
            emit LogRevocation("Trying to revoke an unstored badge. Hash and reason:", hash, reason);
        } else {
            info.revoked = true;
            info.revocationReason = reason;
            info.revocationTime = time;
            emit LogRevocation("The badge has been revoked. Hash and reason:", hash, reason);
        }
    }

    function verify(string hash) external returns (bool) {
        BadgeInfo storage info = badgeInfoMap[hash];

        if(info.revoked) {
            emit LogVerification("The badge with given hash exists, but has been revoked:", hash, info.revocationReason);
            return false;
        } else if(bytes(info.assertionTime).length == 0) {
            emit LogVerification("The badge with given hash does not exist!", hash, "Invalid badge!");
            return false;
        } else {
            emit LogVerification("The badge with given hash does exist.", hash, "Valid badge!");
            return true;
        }
    }

    struct BadgeInfo {
        string assertionTime;
        bool revoked;
        string revocationReason;
        string revocationTime;
    }
}