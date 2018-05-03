// Below you can find the code to combine the assertion, issuer and badge part into an OpenBadge.
// Use the 'createBadge' function to do that, but with your own jsonstrings.

function getBadgeClass(badgeclass_string) {
    badgeclass = JSON.parse(badgeclass_string);
    delete badgeclass["@context"];
    return badgeclass
}

function getIssuer(issuer_string) {
    issuer_ipfs = JSON.parse(issuer_string);
    delete issuer_ipfs["@context"];
    return issuer_ipfs
}

function getAssertion(assertion_string) {
    assertion = JSON.parse(assertion_string);
    return assertion
}

//Function used to get badge parts from (ipfs)url if needed
function getJsonFromUrl(ipfs_url) {
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", ipfs_url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function createBadge(assertion_string, issuer_string, badgeclass_string) {
    unfinished_badge_part = getAssertion(assertion_string);
    issuer_part = getIssuer(issuer_string);
    badgeclass_part = getBadgeClass(badgeclass_string);
    badgeclass_part["issuer"] = issuer_part;
    unfinished_badge_part["badge"] = badgeclass_part;
    finished_badge = unfinished_badge_part;
    console.log("Below the combined OpenBadge");
    console.log(finished_badge);

    let test = JSON.parse(this.test_string_json);
    console.log("Below an example of Test OpenBadge");
    console.log(test);
}

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
const test_string_json = "{\n" +
    "  \"@context\": \"https://w3id.org/openbadges/v2\",\n" +
    "  \"type\": \"Assertion\",\n" +
    "  \"id\": \"542135\",\n" +
    "  \"recipient\": {\n" +
    "    \"type\": \"uport_client_id\",\n" +
    "    \"hashed\": true,\n" +
    "    \"salt\": \"deadsea\",\n" +
    "    \"identity\": \"sha256$a46e865c5c7ef86405ba71b85acd8e2e95166c4b111448089f2e1599f42fe1bb\"\n" +
    "  },\n" +
    "  \"evidence\": \"0x3d4D00cc34Fb4EF84089e0dB78593d3A1dD90E1d\",\n" +
    "  \"issuedOn\": \"2018-03-15T15:06:59Z\",\n" +
    "  \"badge\": {\n" +
    "    \"type\": [\n" +
    "      \"BadgeClass\",\n" +
    "      \"https://ipfs.io/ipfs/BadgeClassFormatOpIpfsInJSON\"\n" +
    "    ],\n" +
    "    \"id\": \"http://ipfs/BadgeClassTypeForMscEngineeringinJSON\",\n" +
    "    \"name\": \"MSc in Biomedical Engineering\",\n" +
    "    \"description\": \"As a biomedical engineer you will develop new methods for the diagnosis and treatment of patients.\",\n" +
    "    \"image\": \"https://ipfs.io/ipfs/plaatjeBadgeBiomedicalEngineering\",\n" +
    "    \"criteria\": \"https://ipfs.io/ipfs/vakkencriteriaBestand-Tekst\",\n" +
    "    \"issuer\": {\n" +
    "      \"type\": [\n" +
    "        \"Issuer\",\n" +
    "        \"uport_client_id\"\n" +
    "      ],\n" +
    "      \"id\": \"2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ\",\n" +
    "      \"name\": \"Rijksuniversiteit Groningen\",\n" +
    "      \"image\": \"https://ipfs.io/ipfs/QmewkrDQHJpLf4cfGo1QF9v7ppvrBXWkt7r3uYaTP97Brf\",\n" +
    "      \"url\": \"https://www.rug.nl/\",\n" +
    "      \"email\": \"communicatie@rug.nl\"\n" +
    "    }\n" +
    "  }\n" +
    "}";

//Run code
createBadge(assertion_string, issuer_string, badgeclass_string);


