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


function login() {
    //    get the deidentified badge from field or ipfs
    let loginJson = sessionStorage.getItem('login')
    let loginUsers = JSON.parse(loginJson);
    var login = sessionStorage.getItem('uportID');
    // var login = "2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V";

    

    loginId = loginUsers[login];
    loginSalt =loginUsers['salt'];
    

    if (loginId == login) {
        
    
    var recipientID = sessionStorage.getItem('uportID');
    let ipfsUrl = "www.nu.nl";

    universiteitConnect.attestCredentials({
            sub: recipientID,
            claim: {
                DIPLOMA: {
                    naam: 'Master',
                    description: 'Master in economics',
                    salt: 'test',
                    id: 'uportID',
                    url: '' + ipfsUrl
                }
            },
            notifications: true,
            // callbackUrl: 'student2.html',
            // exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            // uriHandler: (log) => { console.log(log)}

        })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);
            // document.getElementById("scoreboard").style.display = "inline";

        })

    }
    else {
        alert('het lukt niet')
    }

    
}

const aTEST = function () {
    var recipientID = sessionStorage.getItem('uportID');
    let ipfsUrl = "www.nu.nl";

    universiteitConnect.attestCredentials({
            sub: recipientID,
            claim: {
                DIPLOMA: {
                    naam: 'Master',
                    description: 'Master in economics',
                    salt: 'test',
                    id: 'uportID',
                    url: '' + ipfsUrl
                }
            },
            notifications: true,
            // callbackUrl: 'student2.html',
            // exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            // uriHandler: (log) => { console.log(log)}

        })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);
            // document.getElementById("scoreboard").style.display = "inline";

        })
};

const bTEST = function () {
    var recipientID = sessionStorage.getItem('uportID');
    let ipfsUrl = "www.nu.nl";

    universiteitConnect.attestCredentials({
            sub: recipientID,
            claim: {
                DIPLOMA: {
                    naam: 'Master',
                    description: 'Master in economics',
                    salt: 'test',
                    id: 'uportID',
                    url: '' + ipfsUrl
                }
            },
            notifications: true,
            // callbackUrl: 'student2.html',
            // exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            // uriHandler: (log) => { console.log(log)}

        })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);
            // document.getElementById("scoreboard").style.display = "inline";

        })
};