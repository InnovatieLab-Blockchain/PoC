function verify(url) {
//    get the deidentified badge from field or ipfs

    let deidentifiedBadgeString = "" + getJsonFromUrl(url) + "";
    let deidentifiedBadge = JSON.parse(deidentifiedBadgeString);
    
    let recipientID = document.getElementById("verifyId").value;
    let recipientSalt = document.getElementById("verifySalt").value;

    deidentifiedBadge['recipient']['salt'] = recipientSalt;
    deidentifiedBadge['recipient']['identity'] = hashRecipientIdentity(recipientID, recipientSalt);
    console.log(hashRecipientIdentity(recipientID, recipientSalt));
    let stringifiedFullBadge = JSON.stringify(deidentifiedBadge);
    
    console.log(hashOpenBadge(stringifiedFullBadge));
    return hashOpenBadge(stringifiedFullBadge);

    
    
}