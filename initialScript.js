ganache-cli -s upvu -a 20 --gasLimit 12000000

deployer = "0x5FB1EC24ae3d3a24e777cA2Cd7eA3314143D170F";devAddress="0xC2D4C763F24b2841f54b2D6f5830631F81e9659B";user1="0xACf0Ba9F86258265c7F74e92117AA82b67d33000";user2="0x71F49cCA9A2f69e9e656b797cf62fF447F621Dd6";user3="0x48a30475ab740AdFaA0a7dFaEe8D0803D9f42Ad4";

// hodl, getBal, getBN
function getCurrBlock(){return new Promise((resolve, reject) => {web3.eth.getBlockNumber().then(r => {resolve(r);})});};
eth = web3.eth;utils = web3.utils;function getBal(user, token=hodl){token.balanceOf(user).then(r => {console.log(r.toString());})};function getBN(callback){callback.then(r => {console.log('BN Value:', r);console.log('==================');console.log('Converted Value:', utils.BN(r).toString())})};

BiswapRouter02.deployed().then(r => {router = r;});

// 다른 console에서 배포된 아이들 가져오기
const routerAbi = require('../biswap-periphery/build/contracts/BiswapRouter02.json');
const router = new web3.eth.Contract(routerAbi.abi, '0xE3cf4260FF3A9211FDF46636F283e1a0F599B8DB');

const hodlAbi = require('../sct-socks/build/contracts/Hodls1.json');const sctAbi = require('../sct-socks/build/contracts/BSCT.json');const sctmAbi = require('../sct-socks/build/contracts/BSCTM.json');const krwpAbi = require('../sct-socks/build/contracts/BKRWP.json');const steemAbi = require('../sct-socks/build/contracts/BSTEEM.json');
const hodl = new web3.eth.Contract(hodlAbi.abi, '0x66350Da78c7c7Bf5a067916Dc0A6f5c7494C1601');
const sct = new web3.eth.Contract(sctAbi.abi, '0xa58F30836C52faC2Ad56316D246417272F82ec19');
const sctm = new web3.eth.Contract(sctmAbi.abi, '0xcCD3A14E4B0904d726e216AdD9269163bbb42711');
const krwp = new web3.eth.Contract(krwpAbi.abi, '0x9178742B44450c569aAEe92F9FC48AB2627735C7');
const steem = new web3.eth.Contract(steemAbi.abi, '0x05d96CDA39A05B2f83808addf97D491C67637d25');

// get events
// async function getEvent(name, token=hodl){var lastTempBlock = await getCurrBlock();token.getPastEvents(name, {fromBlock:0, toBlock:lastTempBlock}).then(r => {console.log(r);})}

// events 참조
// hodl.getPastEvents('Transfer', {fromBlock:0, toBlock:1000})

