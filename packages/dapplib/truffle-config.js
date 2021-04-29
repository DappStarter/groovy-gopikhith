require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name recipe saddle artwork hidden drive fringe spin'; 
let testAccounts = [
"0x99ab1fd6666a835128be67f742e046fd71480da0dc60045179911207be6a6a19",
"0x3885e8d1fec4e607e2538d203be28e05efef660c42f6f274cc0d2df5a4664831",
"0xc6a21a6b8ec1371e4abac57d2de35c2b01e6929efb8ade5d8cc6261b873a7c8d",
"0x3ad8c59799cdffa54955fbc80f6d41bd64a3fa7144247931839c290238ffeb51",
"0x79c0d3e8b979da9a4231b0d63356873b1920ba727075f1e25e1148587f2f3bb9",
"0x6ff72da98856cf43501cb69bec0de1269d639a6173eef9eee8259f0a4e65b4fa",
"0x4f03beecb42e3fac180f8183b446540bded79eb8b632d4cd29d8f3a1425e96be",
"0xed4176b9359f95ec5066ffd418ae590eed943170885e6faa38908f3aa93a1b38",
"0x993ac11df2d9798ca44de915802f20dd887b334c2e90c3c943ca332ed25f8ea7",
"0x1d23563ada28c9ea7dc7e43a29c5a6ac7a55cb489477af8b62f84d0a6abed79c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
