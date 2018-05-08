pragma solidity ^0.4.23;

import './Issuer.sol';
import './IssuerBadgeContract.sol';

contract IssuerRuG is IssuerBadgeContract, Issuer {

    event LogCreation(string, string, string, string, string);
    event LogRevocation(string, bytes32, string);
    event LogStatistics(string, string);

    mapping (bytes32 => BadgeInfo) badgeInfoMap;

    constructor(string id, string typeOB, string name, string url, string email) Issuer(id, typeOB, name, url, email) public {
        emit LogCreation("Issuer created. Data: ", name, id, url, email);
    }

    function storeBadge(bytes32 hash, string assertionTime, string statistics) external {
        badgeInfoMap[hash] = BadgeInfo(assertionTime, false, "", "");
        emit LogStatistics("Statistical data:", statistics);
    }

    function revokeBadge(bytes32 hash, string time, string reason) external {
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

    struct BadgeInfo {
        string assertionTime;
        bool revoked;
        string revocationReason;
        string revocationTime;
    }
}