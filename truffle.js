var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "trick trophy social verify easy unfair fuel mask deer parrot shallow high";

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*',
      gas: 4712388,
      gasPrice: 100000000000,
    },
  },
compilers: {
    solc: {
        version: "^0.5.8"
    }
}
};
