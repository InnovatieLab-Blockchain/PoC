
    function storeIssuer(){

    var issuerType= document.getElementById("issuer-type");
      sessionStorage.setItem(["issuer-type"], issuerType.value);
   

    var issuerId= document.getElementById("issuer-id");
    sessionStorage.setItem("issuer-id", issuerId.value);

    var issuerUrl= document.getElementById("issuer-url");
    sessionStorage.setItem("issuer-url", issuerUrl.value);
    
    var issuerEmail= document.getElementById("issuer-email");
    sessionStorage.setItem("issuer-email", issuerEmail.value); 

    var issueSmartcontractAddress= document.getElementById("issuer-smartcontract-address");
    sessionStorage.setItem("issuer-smartcontract-address", issueSmartcontractAddress.value); 

    var issueImage = document.getElementById("issuer-image");
    sessionStorage.setItem("issuer-image", issueImage.value); 

      // document.getElementById("result").innerHTML = sessionStorage.issuer-id;

   
    
     
  
      myObj = [issuerType, issuerId  ];
      myJSON = JSON.stringify(myObj);
      localStorage.setItem("testJSON", myJSON);

      

 }

// document.getElementById("result").innerHTML = localStorage.issuerType;
 
