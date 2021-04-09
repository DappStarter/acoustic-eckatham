require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain property hidden arm borrow search'; 
let testAccounts = [
"0xfd8b0e698f3cc8b79159bab80a350d3081b5e22b57586d2af84a8c3b13aa9b28",
"0x0f3e4369afdf3d0f488c1e79a66b4bfb27694a69fa1ecb99ab7b65c5f659e8a0",
"0x2bc42be9a2651eeabb79d3221a289ddff6975eb76e130982a3ea356f9cf89e0a",
"0x34e8a4887b97dbe70271ae77e98a8610105e6f1a2ef0da643956a6ee9cc50d8c",
"0x166f518e40aaf10b51ceff1c8c4125dfabb854e1cf08204ea4b8aa543174d2f0",
"0x19a4d40918903ec98e585d52c91cc1990511df42bf04688d2db9fec8a818587a",
"0x0b27eb9cf52d640b26dcff9f8b244c1b41a2c2a1e7ec1367d3fe2da1efc30314",
"0x1b4572f8f610cfa5a34e34880c4880cad31641771857aced175e3ae6f69ba6f0",
"0x49b3196f31fe77dd6982dbb9e3809d32d41edccfe1953c9b8007738cf7e6bc93",
"0x563a649c281c76c063dd8e93547916db0d31a2e6c9476700de5b4056c3ad66f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
