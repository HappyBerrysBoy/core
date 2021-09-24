const WBNB = artifacts.require('WBNB')
const BiswapFactory = artifacts.require('BiswapFactory')

module.exports = async function(deployer) {
  deployer.deploy(WBNB)
  await deployer.deploy(BiswapFactory, '0x5FB1EC24ae3d3a24e777cA2Cd7eA3314143D170F')
  let instance = await BiswapFactory.deployed()
  console.log(instance.address)
  await instance.setFeeTo('0xC2D4C763F24b2841f54b2D6f5830631F81e9659B')
  let res = await instance.feeTo.call()
  console.log('fee - ', res)

  let INIT_CODE_HASH = await instance.INIT_CODE_HASH.call()
  console.log('INIT_CODE_HASH - ', INIT_CODE_HASH)
}
