function showCredential() {
    var e = document.getElementById('diploma');
    let diploma = e.options[e.selectedIndex].text;
    
    
    
    
    let credential = JSON.parse(localStorage.getItem("profile"));
    let credentialName = credential['name'];
    let credentialEmail = credential['email'];
    let credentialNaam = credential[diploma]['naam'];    
    let credentialId = credential[diploma]['id'];
    let credentialSalt = credential[diploma]['salt'];
    let credentialUrl = credential[diploma]['url'];


    
    document.getElementById("credentialIssuer").innerHTML = localStorage.getItem("issuerCredential:");
    document.getElementById("credentialName").innerHTML = credentialName;
    
    document.getElementById("credentialEmail").innerHTML = credentialEmail;
    document.getElementById("credentialNaam").innerHTML = credentialNaam;
    document.getElementById("credentialId").innerHTML = credentialId;
    document.getElementById("credentialSalt").innerHTML = credentialSalt;
    document.getElementById("credentialUrl").innerHTML = credentialUrl;
}