const Connect = uportconnect.Connect;
const SimpleSigner = uportconnect.SimpleSigner;
const Credentials = uportconnect.Credentials;

console.log(Credentials);

// var uportconnect = window.uportconnect
// var uport = new uportconnect.Connect('MyDApp')


const universiteitCredentials = new Credentials({
    appName: 'RUG',
    address: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
    network: 'rinkeby',
    signer: SimpleSigner('11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6')
});


const universiteitConnect = new Connect('RUG', {
    clientId: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
    network: 'rinkeby',
    signer: SimpleSigner('11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6')
});


const user_data = {};

const uportLogin = function () {
    universiteitConnect.requestCredentials({
        requested: ['name', 'phone', 'country', 'avatar'],
        notifications: true
    }).then((credentials) => {
        console.log("Credentials:", credentials);

        user_data.uportId = credentials.address;
        user_data.uportName = credentials.name;
        user_data.uportCountry = credentials.country;
        user_data.uportPhone = credentials.phone;

        window.location.href = "issue.html";
    })
};

// let id = '2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V';


const uportAttest = function () {

    let deidentifiedOpenBadge = sessionStorage.getItem("deidentifiedOpenBadge");
    let recipientData = JSON.parse(sessionStorage.getItem("recipientData"));
    let badgeData = JSON.parse(sessionStorage.getItem("badgeData"));
    let ipfsUrl = sessionStorage.getItem("ipfsDeidentiefiedOpenBadge");
    let hash = hashOpenBadge(sessionStorage.getItem("openBadge"));
    recipientID = recipientData['recipientId'];
    recipientSalt = recipientData['recipientSalt'];

    //fill badge part

    badgeName = badgeData['badgeName'];
    badgeDescription = badgeData['badgeDescription'];


    //fill issuer part

    // issuerName = issuerData['issuerName'];
    // issuerSC = issuerData['issuerSmartcontractAddress'];


    universiteitConnect.attestCredentials({
        sub: recipientID,
        claim: {
            DIPLOMA: {
                naam: '' + badgeName,
                description: '' + badgeDescription,
                salt: '' + recipientSalt,
                id: '' + recipientID,
                url: '' + ipfsUrl
            }
        },
        notifications: true,
        // callbackUrl: 'student2.html',
        exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
        // uriHandler: (log) => { console.log(log)}

    })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);
            // document.getElementById("scoreboard").style.display = "inline";
            document.getElementById("after_claim").style.display = "inline";
            document.getElementById("after_submit").style.display = "none";
            document.getElementById("userName").style.display = "none";
            readCounter();
        })
}
