function verify(url) {
//    get the deidentified badge from field or ipfs
    let deidentifiedBadgeString = "" + getJsonFromUrl(url) + "";
    let deidentifiedBadge = JSON.parse(JSON.parse(deidentifiedBadgeString));
    let recipientID = document.getElementById("verifyId").value;
    let recipientSalt = document.getElementById("verifySalt").value;

    deidentifiedBadge['recipient']['identity'] = hashRecipientIdentity(recipientID, recipientSalt);
    deidentifiedBadge['recipient']['salt'] = recipientSalt;
    console.log(deidentifiedBadge);

    return hashOpenBadge(deidentifiedBadge);
}