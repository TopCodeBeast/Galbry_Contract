/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      chainId: 5,
      accounts: [process.env.GOERLI_DEPLOYER_PRIVATE_KEY],
    },
    bsctest: {
      url: process.env.BSCTEST_RPC_URL,
      chainId: 97,
      accounts: [process.env.BSCTEST_DEPLOYER_PRIVATE_KEY],
    },
  },
};
