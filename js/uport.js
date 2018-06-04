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
    let loginJson = localStorage.getItem('loginHU')
    let loginUsers = JSON.parse(loginJson);
    var login = sessionStorage.getItem('uportID');
    // var login = "2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V";


    loginId = loginUsers[login];


    if (loginId == login) {


        huConnect.requestCredentials({
            requested: ['name', 'phone', 'country', 'avatar'],
            
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
    } else {
        alert('Your not entitled to issue badges');
    }
};

// let id = '2ougf8BY4MbyJJDkjEULoXHr95ziFEXQ94V';

const uportAttestLogin = function () {
    huConnect.requestCredentials({
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


const uportAttestCredentialLogin = function () {
    huConnect.requestCredentials({
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
        window.location.href = "attestEmployeeStudent.html";
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


}


function verifyUport() {
    var e = document.getElementById('diploma');
    var diploma = e.options[e.selectedIndex].text;



    raboConnect.requestCredentials({
            verified: [diploma, 'name', 'email'],
            notifications: true
        })
        .then((profile) => {
            console.log(diploma);               
            localStorage.setItem("profile", JSON.stringify(profile));
                             
                      
            alert(profile.name + '\n' +
                'Thanks for sharing! \n' +
                'Your ' + diploma + ' credential. \n' +
                'You will hear from us soon!'
            )
            // console.log("Rabocred:", raboCredentials.settings.address)
            raboCredentials.lookup(raboCredentials.settings.address).then(prof => {
                console.log("Rabo:", prof)
                console.log("userAddress:", profile.address)
            })
            raboCredentials.lookup(profile.verified[0].iss).then(profIss => {
                console.log("Issuer:", profIss)
                console.log("Issuer:", profIss.name)
                sessionStorage.setItem("issuerCredential:", profIss.name);
                localStorage.setItem("issuerCredential:", profIss.name);

            })

        })


};

function inlogStudent() {

    huConnect.requestCredentials({
            verified: ['HU_student'],


        })
        .then((profile) => {
            user_data.uportId = profile.address;
            sessionStorage.setItem("uportID", user_data.uportId);

            console.log(profile)
            if (profile.HU_student.naam == 'Student of the Hogeschool Utrecht') {
                window.location.href = "student.html";
            } else {
                alert('Sorry')
            }
        })


};

function inlogEmployee() {
    huConnect.requestCredentials({
            verified: ['HU_employee'],


        })
        .then((profile) => {

            console.log(profile)
            user_data.uportId = profile.address;
            sessionStorage.setItem("uportID", user_data.uportId);
            if (profile.HU_employee.naam == 'Employee of the Hogeschool Utrecht') {
                window.location.href = "employee.html";
            } else {
                alert('Sorry')
            }
        })


};


function employeeAttest() {
    var recipientID = '2oeBs78G1SYZeLJtF1A3yAXqKyiaffcNfa8';
    // var recipientID = sessionStorage.getItem('uportID');
    huConnect.attestCredentials({

            sub: recipientID,
            claim: {
                HU_employee: {
                    naam: 'Employee of the Hogeschool Utrecht',
                }
            },
            notifications: true,


        })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);


        })

}

function studentAttest() {
    // var recipientID = sessionStorage.getItem('uportID');
    var recipientID = '2oeBs78G1SYZeLJtF1A3yAXqKyiaffcNfa8';
    huConnect.attestCredentials({
            sub: recipientID,
            claim: {
                HU_student: {
                    naam: 'Student of the Hogeschool Utrecht',
                }
            },
            notifications: true,


        })
        .then(function (attestation) {
            console.log("Attestation = " + attestation);


        })
}





function attestJournalistiek() {

    let loginJson = localStorage.getItem('HBO_Journalistiek')
    let loginUsers = JSON.parse(loginJson);
    var login = sessionStorage.getItem('uportID');

    loginId = loginUsers.studie.studenten[login];
    loginSalt = loginUsers.studie.studieSalt;

    console.log(loginId);



    if (loginId == login) {
        var recipientID = loginId;

        let ipfsUrl = "https://ipfs.io/ipfs/Qmb8Dy8kDrniSgGHoZ8xGi9Y5pUwBWyVfTFyHxExwgfNhS";

        huConnect.attestCredentials({
                sub: recipientID,
                claim: {
                    HBO_Journalistiek: {
                        naam: 'HBO_Journalistiek',
                        description: 'Een journalist of journaliste is een beroepsbeoefenaar die nieuwsfeiten verzamelt over recente gebeurtenissen van algemeen belang, die deze feiten onderzoekt of analyseert en daarover publiceert in een actueel (nieuws)medium.',
                        salt: '' + loginSalt,
                        id: '' + recipientID,
                        url: '' + ipfsUrl,
                    }
                },
                notifications: true,

            })
            .then(function (attestation) {
                console.log("Attestation = " + attestation);
            })
    } else {
        alert('Your not entitled to claim this credential')
    }
}


function attestAccountancy() {

    let loginJson = localStorage.getItem('HBO_Accountancy')
    let loginUsers = JSON.parse(loginJson);
    var login = sessionStorage.getItem('uportID');

    loginId = loginUsers.studie.studenten[login];
    loginSalt = loginUsers.studie.studieSalt;

    console.log(loginId);



    if (loginId == login) {

        var recipientID = sessionStorage.getItem('uportID');
        let ipfsUrl = "https://ipfs.io/ipfs/QmbQ2qLv87RxBJCdF7RXNVpmzwd7WWRdJNBEkbfpXe3faH";

        huConnect.attestCredentials({
                sub: recipientID,
                claim: {
                    HBO_Accountancy: {
                        naam: 'HBO_Accountancy',
                        description: 'De opleiding Accountancy bereidt je voor op een carrière als registeraccountant of accountant-administratieconsulent.',
                        salt: '' + loginSalt,
                        id: '' + recipientID,
                        url: '' + ipfsUrl,

                    }
                },
                notifications: true,
                // callbackUrl: 'student2.html',
                // exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
                // uriHandler: (log) => { console.log(log)}

            })
            .then(function (attestation) {
                console.log("Attestation = " + attestation);
                

            })

    } else {
        alert('Your not entitled to claim this credential')
    }

};


