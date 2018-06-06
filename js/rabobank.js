function showCredential() {
    var e = document.getElementById('diploma');
    let diploma = e.options[e.selectedIndex].text; 
    
    
    
    let credential = JSON.parse(localStorage.getItem(diploma));
    let credentialName = credential['name'];
    let credentialEmail = credential['email'];
    let credentialNaam = credential[diploma]['naam'];    
    let verifyId = credential[diploma]['id'];
    let verifySalt = credential[diploma]['salt'];
    let verifyJson = credential[diploma]['url'];
document.getElementById("link").setAttribute("href",verifyJson);

    
    document.getElementById("credentialIssuer").value = localStorage.getItem("issuerCredential:");
    document.getElementById("credentialName").value = credentialName;
    
    document.getElementById("credentialEmail").value = credentialEmail;
    document.getElementById("credentialNaam").value = credentialNaam;
    document.getElementById("verifyId").value = verifyId;
    document.getElementById("verifySalt").value = verifySalt;
    document.getElementById("verifyJson").value = verifyJson;

    document.getElementById("alertBoxGood").style = "display: none";
    document.getElementById("alertBoxBad").style = "display: none";
}

