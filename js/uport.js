const Connect = uportconnect.Connect;
const SimpleSigner = uportconnect.SimpleSigner;
const Credentials = uportconnect.Credentials;


// var uportconnect = window.uportconnect
// var uport = new uportconnect.Connect('MyDApp')


const universiteitCredentials = new Credentials({
    appName: 'RUG',
    address: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
    network: 'rinkeby',
    signer: SimpleSigner('11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6')
});

const raboCredentials = new Credentials({
    appName: 'Rabobank',
    address: '2otfT9XykJx5HJEquMhg4WTeLNKkx8ZkjBE',
    network: 'rinkeby',
    signer: SimpleSigner('13b1ed7eb7d0af503dd5f9e292356d58ece0e50221c3ba65ec8ce4c5a3b99c51')
})

const huCredentials = new Credentials({
    appName: 'Hogeschoool Urecht',
    address: '2onTmcUmv8dAYUFtDyMXXF9SRquLsbWL5FE',
    network: 'rinkeby',
    signer: SimpleSigner('57d6571577187c940caafa3e0d34aa43fbed18c1bce3ab60202bee2ba5465b60')
})



const universiteitConnect = new Connect('RUG', {
    clientId: '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ',
    network: 'rinkeby',
    signer: SimpleSigner('11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6')
});

const raboConnect = new Connect('Rabobank', {
    clientId: '2otfT9XykJx5HJEquMhg4WTeLNKkx8ZkjBE',
    network: 'rinkeby',
    signer: SimpleSigner('13b1ed7eb7d0af503dd5f9e292356d58ece0e50221c3ba65ec8ce4c5a3b99c51')
});

const huConnect = new Connect('Hogeschool Utrecht', {
    clientId: '2onTmcUmv8dAYUFtDyMXXF9SRquLsbWL5FE',
    network: 'rinkeby',
    signer: SimpleSigner('57d6571577187c940caafa3e0d34aa43fbed18c1bce3ab60202bee2ba5465b60')
})


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
        sessionStorage.setItem("uportID", user_data.uportId);
        sessionStorage.setItem("uportName", user_data.uportName);
        window.location.href = "issue.html";
    })
};

// let id = '2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V';

const uportAttestLogin = function () {
    universiteitConnect.requestCredentials({
        requested: ['name', 'phone', 'country', 'avatar'],
        notifications: true
    }).then((credentials) => {
        console.log("Credentials:", credentials);

        user_data.uportId = credentials.address;
        user_data.uportName = credentials.name;
        user_data.uportCountry = credentials.country;
        user_data.uportPhone = credentials.phone;
        sessionStorage.setItem("uportID", user_data.uportId);
        sessionStorage.setItem("uportName", user_data.uportName);
        window.location.href = "attest.html";
    })
};


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
            // exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
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
};

function login() {
    //    get the deidentified badge from field or ipfs
    let loginJson = localStorage.getItem('login2')
    let loginUsers = JSON.parse(loginJson);
    var login = sessionStorage.getItem('uportID');
    // var login = "2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V";



    loginId = loginUsers[login];
    loginSalt = loginUsers['salt'];


    if (loginId == login) {

        var recipientID = sessionStorage.getItem('uportID');
        let ipfsUrl = "https://ipfs.io/ipfs/QmbQ2qLv87RxBJCdF7RXNVpmzwd7WWRdJNBEkbfpXe3faH";

        huConnect.attestCredentials({
                sub: recipientID,
                claim: {
                    DIPLOMA: {
                        naam: 'HBO_Accountancy',
                        description: 'De opleiding Accountancy bereidt je voor op een carrière als registeraccountant of accountant-administratieconsulent.',
                        salt: '' + loginSalt,
                        id: '' + recipientID,
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

    } else {
        alert('Je hebt geen recht op diploma!')
    }


}

function login2() {
    //    get the deidentified badge from field or ipfs
    let loginJson = localStorage.getItem('login')
    let loginUsers = JSON.parse(loginJson);
    var login = sessionStorage.getItem('uportID');
    // var login = "2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V";



    loginId = loginUsers[login];
    loginSalt = loginUsers['salt'];


    if (loginId == login) {


        var recipientID = sessionStorage.getItem('uportID');
        let ipfsUrl = "https://ipfs.io/ipfs/QmUWzctECC3hAJcJEMHdiuijqb3Y8dEq6bADrKFbgxe7Km";

        universiteitConnect.attestCredentials({
                sub: recipientID,
                claim: {
                    DIPLOMA: {
                        naam: 'HBO_Journalistiek',
                        description: 'Een journalist of journaliste is een beroepsbeoefenaar die nieuwsfeiten verzamelt over recente gebeurtenissen van algemeen belang, die deze feiten onderzoekt of analyseert en daarover publiceert in een actueel (nieuws)medium.',
                        salt: '' + loginSalt,
                        id: '' + recipientID,
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

    } else {
        alert('Je hebt geen recht op diploma!')
    }


}


function verifyUport() {
    var e = document.getElementById('diploma');
    var diploma = e.options[e.selectedIndex].text;
    


    raboConnect.requestCredentials({
            requested: [diploma],
            
            notifications: true
        })
        .then((profile) => {
            console.log(profile)
            sessionStorage.setItem("profile", JSON.stringify(profile));
            alert('Bedankt voor het delen');
            // console.log("Rabocred:", raboCredentials.settings.address)
            raboCredentials.lookup(raboCredentials.settings.address).then(prof => {
                console.log("Rabo:", prof)
                console.log("userAddress:", profile.address)
            })
            // raboCredentials.lookup(profile.verified[0].iss).then(prof => {
            //     console.log(prof)

            // })
        })


}


