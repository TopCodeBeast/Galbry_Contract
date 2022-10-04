/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_RPC_URL,
      chainId: 3,
      accounts: [process.env.ROPSTEN_DEPLOYER_PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      chainId: 4,
      accounts: [process.env.RINKEBY_DEPLOYER_PRIVATE_KEY],
    },
    bsctest: {
      url: process.env.BSCTEST_RPC_URL,
      chainId: 97,
      accounts: [process.env.BSCTEST_DEPLOYER_PRIVATE_KEY],
    },
  },
};
