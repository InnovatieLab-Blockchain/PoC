let issuerIpfsUrlGlobal = null;
let badgeIpfsUrlGlobal = null;

const createIpfsUrlForIssuerImage = () => {
    const reader = new FileReader();
    reader.onloadend = function () {
        const ipfs = window.IpfsApi({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

        const buf = buffer.Buffer(reader.result); // Convert data into buffer
        ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
            if (err) {
                console.error(err);
                return
            }
            issuerIpfsUrlGlobal = `https://ipfs.io/ipfs/${result[0].hash}`;
            // console.log(`${issuerIpfsUrlGlobal}`);
            document.getElementById("issuerIpfsUrl").innerHTML = issuerIpfsUrlGlobal;
            document.getElementById("issuerIpfsUrl").href = issuerIpfsUrlGlobal;
            // document.getElementById("output").src = url
        })
    };
    const issuerImage = document.getElementById("issuerImage");
    reader.readAsArrayBuffer(issuerImage.files[0]); // Read Provided File
};

const createIpfsUrlForBadgeImage = () => {
    const reader = new FileReader();
    reader.onloadend = function () {
        const ipfs = window.IpfsApi({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

        const buf = buffer.Buffer(reader.result); // Convert data into buffer
        ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
            if (err) {
                console.error(err);
                return
            }
            badgeIpfsUrlGlobal = `https://ipfs.io/ipfs/${result[0].hash}`;
            // console.log(`${badgeIpfsUrlGlobal}`);
            document.getElementById("badgeIpfsUrl").innerHTML = badgeIpfsUrlGlobal;
            document.getElementById("badgeIpfsUrl").href = badgeIpfsUrlGlobal;
            // document.getElementById("output").src = url
        })
    };
    const issuerImage = document.getElementById("badgeImage");
    reader.readAsArrayBuffer(issuerImage.files[0]); // Read Provided File
};

// TODO: create generic ipfsuploader
// FOR LATER
// function createIpfsUrl(datastring, datatype) {
//     let created_ipfs_url = null;
//     if (datatype === 'file') {
//         console.log("File");
//         const reader = new FileReader();
//         reader.readAsDataURL(datastring);
//         const ipfs = window.IpfsApi({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
//
//         const buf = buffer.Buffer(reader.result);// Convert data into buffer
//         ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
//             if (err) {
//                 console.error(err);
//                 return err;
//             }
//             created_ipfs_url = `https://ipfs.io/ipfs/${result[0].hash}`;
//             console.log(`${created_ipfs_url}`);
//             //    filereader leest file uit en gooit naar ipfs om url terug te krijgen
//         });
//         return created_ipfs_url;
//
//     }
//     else {
//         console.log("String");
//
//         ipfs.files.add(datastring, (err, result) => { // Upload buffer to IPFS
//             if (err) {
//                 console.error(err);
//                 return err;
//             }
//             created_ipfs_url = `https://ipfs.io/ipfs/${result[0].hash}`;
//         });
//         return created_ipfs_url;
//
//     }
// }



const putDeidentifiedOpenBadgeOnIpfs = () => {

    let deidentifiedOpenBadge= sessionStorage.getItem('deidentifiedOpenBadge');
    const ipfs = window.IpfsApi({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    const buf = buffer.Buffer(deidentifiedOpenBadge); // Convert data into buffer
    ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
        if (err) {
            console.error(err);
            return
        }
        ipfsDeidentiefiedOpenBadge = `https://ipfs.io/ipfs/${result[0].hash}`;
        console.log(`${ipfsDeidentiefiedOpenBadge}`);
        
        sessionStorage.setItem("ipfsDeidentiefiedOpenBadge", ipfsDeidentiefiedOpenBadge);
        
        
    })

};
