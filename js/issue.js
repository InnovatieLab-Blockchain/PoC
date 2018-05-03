
function storeIssuer() {

  var issuerType = document.getElementById("issuerType").value;
  var issuerId = document.getElementById("issuerId").value;
  var issuerName = document.getElementById("issuerName").value;
  var issuerUrl = document.getElementById("issuerUrl").value;
  var issuerEmail = document.getElementById("issuerEmail").value;
  var issuerSmartcontractAddress = document.getElementById("issuerSmartcontractAddress").value;
  var issuerImage = document.getElementById("issuerImage").value;
  var issuerImageUrl = document.getElementById("issuerImageUrl").value;


  var issuerdata = ["issuerType:" + issuerType, 
                    "issuerId:" + issuerId, 
                    "issuerName:" + issuerName,
                    "issuerUrl:" + issuerUrl, 
                    "issuerEmail:" + issuerUrl, 
                    "issuerSmartcontractAddress:" + issuerSmartcontractAddress,
                    "issuerImage:" + issuerImage, 
                    "issuerImageUrl:" + issuerImageUrl
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