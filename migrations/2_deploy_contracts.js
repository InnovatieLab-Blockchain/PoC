var issuer = artifacts.require("./Issuer.sol");

module.exports = function (deployer) {
    deployer.deploy(issuer, '2ojKNym3x16kUNQPq32CNcRpuo8MDH5w5vQ', 'Issuer', 'RuG', 'http://www.rug.nl', 'info@rug.nl');
};
