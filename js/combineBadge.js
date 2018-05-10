//Function used to get badge parts from (ipfs)url if needed
function getJsonFromUrl(ipfs_url) {
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", ipfs_url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function createDeidentifiedOpenBadge() {
    let openBadge = JSON.parse(sessionStorage.getItem("openBadge"));
    delete openBadge['recipient']['salt'];
    delete openBadge['recipient']['identity'];
    console.log(openBadge);
    sessionStorage.setItem("deidentifiedOpenBadge", JSON.stringify(openBadge));

    return openBadge;
}

function createBadge() {
    let openBadgetemplate = JSON.parse(openBadgeTemplate);
    let metadataData = JSON.parse(sessionStorage.getItem("metadataData"));
    let recipientData = JSON.parse(sessionStorage.getItem("recipientData"));
    let issuerData = JSON.parse(sessionStorage.getItem("issuerData"));
    let badgeData = JSON.parse(sessionStorage.getItem("badgeData"));

    //fill recipient part
    openBadgetemplate['recipient']['identity'] = hashRecipientIdentity(recipientData['recipientId'], recipientData['recipientSalt']);
    openBadgetemplate['recipient']['salt'] = recipientData['recipientSalt'];

    //fill badge part
    openBadgetemplate['badge']['type'][1] = badgeData['badgeType'];
    openBadgetemplate['badge']['id'] = badgeData['badgeId'];
    openBadgetemplate['badge']['name'] = badgeData['badgeName'];
    openBadgetemplate['badge']['description'] = badgeData['badgeDescription'];
    openBadgetemplate['badge']['criteria'] = badgeData['badgeCriteria'];
    openBadgetemplate['badge']['image'] = badgeData['badgeImage'];

    // if (badgeData['badgeImage'] === "") {
    //     openBadgetemplate['badge']['image'] = badgeData['badgeUrl'];
    //
    // } else {
    //     let badgeImageIpfsUrl = createIpfsUrl(badgeData['badgeImage'], "file");
    //     console.log(badgeImageIpfsUrl);
    //     openBadgetemplate['badge']['image'] = badgeImageIpfsUrl;
    // }

    //fill issuer part
    openBadgetemplate['badge']['issuer']['id'] = issuerData['issuerId'];
    openBadgetemplate['badge']['issuer']['name'] = issuerData['issuerName'];
    openBadgetemplate['badge']['issuer']['image'] = issuerData['issuerImage'];
    openBadgetemplate['badge']['issuer']['url'] = issuerData['issuerUrl'];
    openBadgetemplate['badge']['issuer']['email'] = issuerData['issuerEmail'];

    //fill assertion part
    openBadgetemplate['type'][1] = metadataData['metadataInputX'];
    openBadgetemplate['id'] = metadataData['metadataInputY'];
    openBadgetemplate['evidence'] = issuerData['issuerSmartcontractAddress'];
    openBadgetemplate['issuedOn'] = new Date().toLocaleString();


    //fill issuer part


    console.log(openBadgetemplate);

    let stringifiedOpenBadge = JSON.stringify(openBadgetemplate);

    sessionStorage.setItem("openBadge", stringifiedOpenBadge);

    document.getElementById('showCreatedOpenBadgeValue').value = JSON.stringify(openBadgetemplate, undefined, 4);

    createDeidentifiedOpenBadge();

    saveTextAsFile();

    //TODO: put deidentified open badge on IPFS
}


//Example of OpenBadge for reference
const openBadgeTemplate = "{\n" +
    "  \"@context\": \"https://w3id.org/openbadges/v2\",\n" +
    "  \"type\": [\n" +
    "    \"Assertion\",\n" +
    "    \"\"\n" +
    "  ],\n" +
    "  \"id\": \"\",\n" +
    "  \"recipient\": {\n" +
    "    \"type\": \"uport_client_id\",\n" +
    "    \"hashed\": true,\n" +
    "    \"salt\": \"\",\n" +
    "    \"identity\": \"\"\n" +
    "  },\n" +
    "  \"evidence\": \"\",\n" +
    "  \"issuedOn\": \"\",\n" +
    "  \"badge\": {\n" +
    "    \"type\": [\n" +
    "      \"BadgeClass\",\n" +
    "      \"\"\n" +
    "    ],\n" +
    "    \"id\": \"\",\n" +
    "    \"name\": \"\",\n" +
    "    \"description\": \"\",\n" +
    "    \"image\": \"\",\n" +
    "    \"criteria\": \"\",\n" +
    "    \"issuer\": {\n" +
    "      \"type\": [\n" +
    "        \"Issuer\",\n" +
    "        \"uport_client_id\"\n" +
    "      ],\n" +
    "      \"id\": \"\",\n" +
    "      \"name\": \"\",\n" +
    "      \"image\": \"\",\n" +
    "      \"url\": \"\",\n" +
    "      \"email\": \"\"\n" +
    "    }\n" +
    "  }\n" +
    "}";