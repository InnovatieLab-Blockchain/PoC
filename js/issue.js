const storeIssuer = () => {
    let issuerType = document.getElementById("issuerType").value;
    let issuerId = document.getElementById("issuerId").value;
    let issuerName = document.getElementById("issuerName").value;
    let issuerUrl = document.getElementById("issuerUrl").value;
    let issuerEmail = document.getElementById("issuerEmail").value;
    let issuerSmartcontractAddress = document.getElementById("issuerSmartcontractAddress").value;
    let issuerImageUrlSelf = document.getElementById("issuerImageUrlSelf").value;
    let issuerImageUrlIpfs = issuerIpfsUrlGlobal;

    let issuerImageUrl = null;
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
        issuerImage: issuerImageUrl,
    };

    // store array data to the session storage
    sessionStorage.setItem("issuerData", JSON.stringify(issuerdata));
};

const displayIssuer = () => {
    let displayIssuer = JSON.parse(sessionStorage.issuerData);
    let created_issuer_text = "";
    for (let key in displayIssuer) {
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
    // let badgeImage = document.getElementById("badgeImage").value;
    let badgeImageUrl = document.getElementById("badgeImageUrl").value;
    let badgeImageUrlIpfs = badgeIpfsUrlGlobal;

    let badgeImageUrlBlank = null;
    if (badgeImageUrl) {
        badgeImageUrlBlank = document.getElementById("badgeImageUrl").value;
    } else {
        badgeImageUrlBlank = badgeImageUrlIpfs;
    }

    let badgedata = {
        badgeType: badgeType,
        badgeId: badgeId,
        badgeName: badgeName,
        badgeDescription: badgeDescription,
        badgeCriteria: badgeCriteria,
        // badgeImage: badgeImage,
        badgeImage: badgeImageUrlBlank

    };

    // store array data to the session storage
    sessionStorage.setItem("badgeData", JSON.stringify(badgedata));
};

const displayBadge = () => {
    let displayBadge = JSON.parse(sessionStorage.badgeData);
    let created_badge_text = "";
    for (let key in displayBadge) {
        created_badge_text += key + ": " + displayBadge[key] + "<br>";
    }

    document.getElementById("hiddenBadge").style.display = "inline";
    document.getElementById("toggleBadge").innerHTML = created_badge_text;
};

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
};

const displayRecipient = () => {
    let displayRecipient = JSON.parse(sessionStorage.recipientData);
    let created_recipient_text = "";
    for (let key in displayRecipient) {
        created_recipient_text += key + ": " + displayRecipient[key] + "<br>";
    }

    document.getElementById("hiddenRecipient").style.display = "inline";
    document.getElementById("toggleRecipient").innerHTML = created_recipient_text;
};

const storeMetaData = () => {
    let metadataInputX = document.getElementById("metadataInputX").value;
    let metadataInputY = document.getElementById("metadataInputY").value;
    let metadataInput1 = document.getElementById("metadataInput1").value;
    let metadataInput2 = document.getElementById("metadataInput2").value;
    let metadataInput3 = document.getElementById("metadataInput3").value;
    let metadataInput4 = document.getElementById("metadataInput4").value;
    let metadataInput5 = document.getElementById("metadataInput5").value;


    let metadatadata = {
        metadataInputX: metadataInputX,
        metadataInputY: metadataInputY,
        metadataInput1: metadataInput1,
        metadataInput2: metadataInput2,
        metadataInput3: metadataInput3,
        metadataInput4: metadataInput4,
        metadataInput5: metadataInput5,

    };

    // store array data to the session storage
    sessionStorage.setItem("metadataData", JSON.stringify(metadatadata));
};

const displayMetaData = () => {
    let displayMetaData = JSON.parse(sessionStorage.metadataData);
    let created_metadata_text = "";
    for (let key in displayMetaData) {
        created_metadata_text += key + ": " + displayMetaData[key] + "<br>";
    }

    document.getElementById("hiddenMetaData").style.display = "inline";
    document.getElementById("toggleMetaData").innerHTML = created_metadata_text;
};



//Download openBadge
function saveTextAsFile() {
  let textToWrite = sessionStorage.getItem('openBadge');
  let textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
  let fileNameToSaveAs = "openBadge.txt";

  let downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

//Destroy temporary element
function destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}
