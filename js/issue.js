
const storeIssuer = () => {

  let issuerType = document.getElementById("issuerType").value;
  let issuerId = document.getElementById("issuerId").value;
  let issuerName = document.getElementById("issuerName").value;
  let issuerUrl = document.getElementById("issuerUrl").value;
  let issuerEmail = document.getElementById("issuerEmail").value;
  let issuerSmartcontractAddress = document.getElementById("issuerSmartcontractAddress").value;
  let issuerImage = document.getElementById("issuerImage").value;
  let issuerImageUrl = document.getElementById("issuerImageUrl").value;
  let issuerIpfsUrl = ipfsUrl;

  issuerdata = [
    "issuerType:" + issuerType,
    "issuerId:" + issuerId,
    "issuerName:" + issuerName,
    "issuerUrl:" + issuerUrl,
    "issuerEmail:" + issuerUrl,
    "issuerSmartcontractAddress:" + issuerSmartcontractAddress,
    "issuerImage:" + issuerImage,
    "issuerImageUrl:" + issuerImageUrl,
    "issuerIpfsUrl:" + issuerIpfsUrl
  ];



  // store array data to the session storage
  
  sessionStorage.setItem("issuerData", JSON.stringify(issuerdata));

  //Use JSON to retrieve the stored data and convert it 
  let storedData = sessionStorage.getItem("issuerdata");
  if (storedData) {
    issuerdata = JSON.parse(storedData);


  }

  

}


const displayIssuer = () => {

let displayIssuer = JSON.parse(sessionStorage.issuerData);

const createdIssuer = [...displayIssuer];

let text = "";


let i;
for (i = 0; i < createdIssuer.length; i++) {
  text += createdIssuer[i] + "<br>";
}
  document.getElementById("hiddenIssuer").style.display = "inline";
  document.getElementById("toggleIssuer").innerHTML = text;


}

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
    let recipientType = document.getElementById("recipienttype").value

    let recipientdata = [
      "recipienttype:" + recipientType,
    ]

    sessionStorage.setItem("recipientData", JSON.stringify(recipientdata));

    let storeData = sessionStorage.getItem("recipientdata");
    if (storedData) {
      recipientdata = JSON.parse(storedData);
    }
  }





// hulp code
// sessionStorage.setItem("issuer-image", issueImage.value); 
//     //console.log("issuerType:",issuerType)issuerType = document.getElementById("issuerType").value;


