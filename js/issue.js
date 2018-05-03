
function storeIssuer() {

  let issuerType = document.getElementById("issuerType").value;
  let issuerId = document.getElementById("issuerId").value;
  let issuerName = document.getElementById("issuerName").value;
  let issuerUrl = document.getElementById("issuerUrl").value;
  let issuerEmail = document.getElementById("issuerEmail").value;
  let issuerSmartcontractAddress = document.getElementById("issuerSmartcontractAddress").value;
  let issuerImage = document.getElementById("issuerImage").value;
  let issuerImageUrl = document.getElementById("issuerImageUrl").value;


  let issuerdata = ["issuerType:" + issuerType,
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
  let storedData = sessionStorage.getItem("issuerdata");
  if (storedData) {
    issuerdata = JSON.parse(storedData);


}

}


// hulp code
// sessionStorage.setItem("issuer-image", issueImage.value); 
//     //console.log("issuerType:",issuerType)