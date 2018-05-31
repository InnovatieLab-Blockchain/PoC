pragma solidity ^0.4.23;

import './Profile.sol';
import './BadgeContract.sol';
import './OCW.sol';

contract Issuer is BadgeContract, Profile {

    event LogCreation(string, string, string, string, string);
    event LogStorage(string hash, uint timestamp);
    event LogRevocation(string hash, uint timestamp, string reason, string result);
    event LogVerification(string hash, uint timestamp, bool valid, string result);

    mapping (string => BadgeInfo) badgeInfoMap;
    address ocwAddress = 0x0457173093Bec092E0ea8b8f8b93930850cFA99E;

    constructor(string id, string typeOB, string name, string url, string email) Profile(id, typeOB, name, url, email) public {
        emit LogCreation("Issuer created. Data: ", name, id, url, email);
    }

    function store(string hash, string gender, uint age, string badgeClassId, string issuerId, uint timestamp) external {
        badgeInfoMap[hash] = BadgeInfo(timestamp, false, "", 0);

        OCW ocw = OCW(ocwAddress);
        ocw.storeStatistics(gender, age, badgeClassId, issuerId, timestamp);

        emit LogStorage(hash, timestamp);
    }

    function revoke(string hash, uint timestamp, string reason) external {
        BadgeInfo storage info = badgeInfoMap[hash];

        if(info.revoked) {
            emit LogRevocation(hash, timestamp, reason, "The badge has already been revoked.");
        } else if(info.assertionTime == 0) {
            emit LogRevocation(hash, timestamp, reason, "Badge not found on blockchain.");
        } else {
            info.revoked = true;
            info.revocationReason = reason;
            info.revocationTime = timestamp;
            emit LogRevocation(hash, timestamp, reason, "Succesfully revoked the badge.");
        }
    }

    function verify(string hash, uint timestamp) external returns (bool, string, string) {
        BadgeInfo storage info = badgeInfoMap[hash];
        string memory message;

        if(info.revoked) {
            message = "Invalid badge. The badge exists, but has been revoked.";
            emit LogVerification(hash, timestamp, false, message);
            return (false, message, info.revocationReason);
        } else if(info.assertionTime == 0) {
            message = "Badge not found.";
            emit LogVerification(hash, timestamp, false, message);
            return (false, message, hash);
        } else {
            message = "Valid badge";
            emit LogVerification(hash, timestamp, true, message);
            return (true, message, hash);
        }
    }

    struct BadgeInfo {
        uint assertionTime;
        bool revoked;
        string revocationReason;
        uint revocationTime;
    }
}