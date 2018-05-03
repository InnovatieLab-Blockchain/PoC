 let ipfsUrl = null;



 function upload() {
        const reader = new FileReader();
        reader.onloadend = function () {
            const ipfs = window.IpfsApi({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
            
            const buf = buffer.Buffer(reader.result) // Convert data into buffer
            ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
                if (err) {
                    console.error(err)
                    return
                }
                ipfsUrl = `https://ipfs.io/ipfs/${result[0].hash}`
                console.log(`${ipfsUrl}`)
                document.getElementById("issuerIpfsUrl").innerHTML = ipfsUrl
                document.getElementById("issuerIpfsUrl").href = ipfsUrl
                // document.getElementById("output").src = url
            })
        }
        const issuerImage = document.getElementById("issuerImage");
        reader.readAsArrayBuffer(issuerImage.files[0]); // Read Provided File
    }