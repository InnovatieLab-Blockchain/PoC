
function storeIssuer() {

  var issuerType = document.getElementById("issuerType").value;
  var issuerId = document.getElementById("issuer-id").value;
  var issuerUrl = document.getElementById("issuer-url").value;
  var issuerEmail = document.getElementById("issuer-email").value;
  var issueSmartcontractAddress = document.getElementById("issuer-smartcontract-address").value;
  var issueImage = document.getElementById("issuer-image").value;


  var issuerdata = ["issuerType:" + issuerType, 
                    "issuerId:" + issuerId, 
                    "issuerUrl:" + issuerUrl, 
                    "issuerEmail:" + issuerUrl, 
                    "issuerSmartcontractAddress:" + issueSmartcontractAddress,
                    "issuerImage:" + issueImage 
                  ];



  // store array data to the session storage
  sessionStorage.setItem("issuerData", JSON.stringify(issuerdata));

  //Use JSON to retrieve the stored data and convert it 
  var storedData = sessionStorage.getItem("issuerdata");
  if (storedData) {
    issuerdata = JSON.parse(storedData);


}

}


// hulp code
// sessionStorage.setItem("issuer-image", issueImage.value); 
//     //console.log("issuerType:",issuerType)