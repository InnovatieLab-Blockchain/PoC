const storeIssuer = () => {

    let issuerType = document.getElementById("issuerType").value;
    let issuerId = document.getElementById("issuerId").value;
    let issuerName = document.getElementById("issuerName").value;
    let issuerUrl = document.getElementById("issuerUrl").value;
    let issuerEmail = document.getElementById("issuerEmail").value;
    let issuerSmartcontractAddress = document.getElementById("issuerSmartcontractAddress").value;
    let issuerImageUrlSelf = document.getElementById("issuerImageUrlSelf").value;
    let issuerImageUrlIpfs = ipfsUrl;

    if (issuerImageUrlSelf) {
        issuerImageUrl = document.getElementById("issuerImageUrlSelf").value;
    } else {
        issuerImageUrl = issuerImageUrlIpfs;
    }

    let issuerdata = {
        issuerType: issuerType,
        issuerId: issuerId,
        issuerName: issuerName,
        issuerUrl: issuerUrl,
        issuerEmail: issuerEmail,
        issuerSmartcontractAddress: issuerSmartcontractAddress,
        issuerImageString: issuerImageUrl,
    };


    // store array data to the session storage
    sessionStorage.setItem("issuerData", JSON.stringify(issuerdata));


    // TODO: Niet nodig?
    //Use JSON to retrieve the stored data and convert it
    let storedData = sessionStorage.getItem("issuerData");
    console.log(storedData);
    if (storedData !== null) {
        issuerdata = JSON.parse(storedData);
    }

};

const displayIssuer = () => {

    let displayIssuer = JSON.parse(sessionStorage.issuerData);
    created_issuer_text = "";

    for (key in displayIssuer) {
        created_issuer_text += key + ": " + displayIssuer[key] + "<br>";
    }

    document.getElementById("hiddenIssuer").style.display = "inline";
    document.getElementById("toggleIssuer").innerHTML = created_issuer_text;
};

const storeBadge = () => {

    let badgeType = document.getElementById("badgeType").value;
    let badgeId = document.getElementById("badgeId").value;
    let badgeName = document.getElementById("badgeName").value;
    let badgeDescription = document.getElementById("badgeDescription").value;
    let badgeCriteria = document.getElementById("badgeCriteria").value;
    let badgeImage = document.getElementById("badgeImage").value;
    let badgeImageUrl = document.getElementById("badgeImageUrl").value;


    let badgedata = [
        "badgeType:" + badgeType,
        "badgeId:" + badgeId,
        "badgeName:" + badgeName,
        "badgeDescription:" + badgeDescription,
        "badgeCriteria:" + badgeCriteria,
        "badgeImage:" + badgeImage,
        "badgeImageUrl:" + badgeImageUrl
    ];


    // store array data to the session storage
    sessionStorage.setItem("badgeData", JSON.stringify(badgedata));

    //Use JSON to retrieve the stored data and convert it
    let storedData = sessionStorage.getItem("badgeData");
    if (storedData) {
        badgedata = JSON.parse(storedData);


    }

}

const displayBadge = () => {
    let displayBadge = JSON.parse(sessionStorage.badgeData);

    const createdBadge = [...displayBadge];

    let text = "";


    let i;
    for (i = 0; i < createdBadge.length; i++) {
        text += createdBadge[i] + "<br>";
    }
    document.getElementById("hiddenBadge").style.display = "inline";
    document.getElementById("toggleBadge").innerHTML = text;


}

const storeRecipient = () => {
    let recipientType = document.getElementById("recipientType").value;
    let recipientId = document.getElementById("recipientId").value;
    let recipientSalt = document.getElementById("recipientSalt").value;
    let recipientHashed = document.getElementById("recipientHashed").value;
    let recipientEmail = document.getElementById("recipientEmail").value;
    

    let recipientdata = {
        recipientType: recipientType,
        recipientId: recipientId,
        recipientSalt: recipientSalt,
        recipientHashed: recipientHashed,
        recipientEmail: recipientEmail,        
        };

    // store array data to the session storage
    sessionStorage.setItem("recipientData", JSON.stringify(recipientdata));



        // TODO: Niet nodig?
        //Use JSON to retrieve the stored data and convert it

        let storeData = sessionStorage.getItem("recipientData");
        if(storedData !== null) {
            recipientdata = JSON.parse(storedData);
}
};

const displayRecipient = () => {

    let displayRecipient = JSON.parse(sessionStorage.recipientData);
    created_recipient_text = "";

    for (key in displayRecipient) {
        created_recipient_text += key + ": " + displayRecipient[key] + "<br>";
    }

    document.getElementById("hiddenRecipient").style.display = "inline";
    document.getElementById("toggleRecipient").innerHTML = created_recipient_text;
};

const storeMetaData = () => {
    let metadataInput1 = document.getElementById("metadataInput1").value;
    let metadataInput2 = document.getElementById("metadataInput2").value;

    // let metadataImageUrlSelf = document.getElementById("metadataImageUrlSelf").value;
    // let metadataImageUrlIpfs = ipfsUrl;

    // if (metadataImageUrlSelf) {
    //     metadataImageUrl = document.getElementById("metadataImageUrlSelf").value;
    // } else {
    //     metadataImageUrl = metadataImageUrlIpfs;
    // }

    let metadatadata = {
        metadataInput1: metadataInput1,
        metadataInput2: metadataInput2,

    };

    // store array data to the session storage
    sessionStorage.setItem("metadataData", JSON.stringify(metadatadata));



    // TODO: Niet nodig?
    //Use JSON to retrieve the stored data and convert it

    let storeData = sessionStorage.getItem("metadataData");
    if (storedData !== null) {
        metadatadata = JSON.parse(storedData);
    }
};

const displayMetaData = () => {

    let displayMetaData = JSON.parse(sessionStorage.metadataData);
    created_metadata_text = "";

    for (key in displayMetaData) {
        created_metadata_text += key + ": " + displayMetaData[key] + "<br>";
    }

    document.getElementById("hiddenMetaData").style.display = "inline";
    document.getElementById("toggleMetaData").innerHTML = created_metadata_text;
};

// hulp code
// sessionStorage.setItem("issuer-image", issueImage.value); 
//     //console.log("issuerType:",issuerType)issuerType = document.getElementById("issuerType").value;


