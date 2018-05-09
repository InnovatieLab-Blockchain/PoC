// Below you can find the code to combine the assertion, issuer and badge part into an OpenBadge.
// Use the 'createBadge' function to do that, but with your own jsonstrings.

function getBadgeClass(badgeclass_string) {
    let badgePart = JSON.parse(badgeclass_string);
    delete badgePart["@context"];
    return badgePart;
}

function getIssuer(issuer_string) {
    let issuerPart = JSON.parse(issuer_string);
    delete issuerPart["@context"];
    return issuerPart
}

function getAssertion(assertion_string) {
    return JSON.parse(assertion_string);
}

//Function used to get badge parts from (ipfs)url if needed
function getJsonFromUrl(ipfs_url) {
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", ipfs_url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

//Old createbadge for ref
// function createBadge(assertion_string, issuer_string, badgeclass_string, recipient_string) {
//     let recipient_part = getRecipient(recipient_string);
//     let unfinished_badge_part = getAssertion(assertion_string);
//
//     unfinished_badge_part["recipient"] = recipient_part;
//
//     let issuer_part = getIssuer(issuer_string);
//     let badgeclass_part = getBadgeClass(badgeclass_string);
//
//     badgeclass_part["issuer"] = issuer_part;
//     unfinished_badge_part["badge"] = badgeclass_part;
//
//     let finished_badge = unfinished_badge_part;
//     // console.log("Below the combined OpenBadge");
//     // console.log(finished_badge);
//
//     sessionStorage.setItem("finishedBadge", JSON.stringify(finished_badge));
//
//     return finished_badge;
// }

//Example of assertion part of OpenBadge
const assertion_string = "{\n" +
    "  \"@context\": \"https://w3id.org/openbadges/v2\",\n" +
    "  \"type\": \"Assertion\",\n" +
    "  \"id\": \"542135\",\n" +
    "  \"recipient\": {\n" +
    "    \"type\": \"uport_client_id\",\n" +
    "    \"hashed\": true,\n" +
    "    \"salt\": \"deadsea\",\n" +
    "    \"identity\": \"sha256$a46e865c5c7ef86405ba71b85acd8e2e95166c4b111448089f2e1599f42fe1bb\"\n" +
    "  },\n" +
    "  \"image\": \"https://ipfs.io/ipfs/plaatjeBadgeBiomedicalEngineering\",\n" +
    "  \"evidence\": \"0x3d4D00cc34Fb4EF84089e0dB78593d3A1dD90E1d\",\n" +
    "  \"issuedOn\": \"2018-03-15T15:06:59Z\"\n" +
    "}";

//Example of badgeclass part of OpenBadge
const badgeclass_string = "{\n" +
    "\t\"@context\": \"https://w3id.org/openbadges/v2\",\n" +
    "\t\"type\": \"BadgeClass\",\n" +
    "\t\"id\": \"http://ipfs.io/ipfs/BadgeClassTypeForMscEngineeringinJSON\",\n" +
    "\t\"name\": \"MSc in Biomedical Engineering\",\n" +
    "\t\"description\": \"As a biomedical engineer you will develop new methods for the diagnosis and treatment of patients.\",\n" +
    "\t\"image\": \"https://ipfs.io/ipfs/plaatjeBadgeBiomedicalEngineering\",\n" +
    "\t\"criteria\": \"https://ipfs.io/ipfs/vakkencriteriaBestand-Tekst\"\n" +
    "}";

//Example of issuer part of OpenBadge
const issuer_string = "{\n" +
    "  \"@context\": \"https://w3id.org/openbadges/v2\",\n" +
    "  \"type\": [\n" +
    "    \"Issuer\",\n" +
    "    \"uport_client_id\"\n" +
    "  ],\n" +
    "  \"id\": \"2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ\",\n" +
    "  \"name\": \"Rijksuniversiteit Groningen\",\n" +
    "  \"image\": \"https://ipfs.io/ipfs/QmewkrDQHJpLf4cfGo1QF9v7ppvrBXWkt7r3uYaTP97Brf\",\n" +
    "  \"url\": \"https://www.rug.nl/\",\n" +
    "  \"email\": \"communicatie@rug.nl\"\n" +
    "}";

//Test example of completed OpenBadge for reference
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


function getRecipient(recipient_string) {
    let recipientPart = JSON.parse(recipient_string);
    delete recipientPart["@context"];
    return recipientPart
}

function removeRecipientDataFromOB(open_badge_string) {

    return deidentifiedOpenBadge;
}


function createBadge() {
    let openBadgetemplate = JSON.parse(openBadgeTemplate);
    let metadataData = JSON.parse(sessionStorage.getItem("metadataData"));
    let recipientData = JSON.parse(sessionStorage.getItem("recipientData"));
    let issuerData = JSON.parse(sessionStorage.getItem("issuerData"));
    let badgeData = JSON.parse(sessionStorage.getItem("badgeData"));

    openBadgetemplate['type'][1] = metadataData['metadataInput1'];
    openBadgetemplate['id'] = metadataData['metadataInput2'];
    openBadgetemplate['recipient']['identity'] = hashRecipientIdentity(recipientData['recipientId'], recipientData['recipientSalt']);
    openBadgetemplate['recipient']['salt'] = recipientData['recipientSalt'];



    console.log(openBadgetemplate);


//    extract assertion part from template
//


}

function createRandomUUID() {

    return uuid;
}
