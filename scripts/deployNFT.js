const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Insert your deployment script here
  const networkName = hre.network.name;
  const networkUrl = hre.network.config.url;
  console.log("Deploying to network", networkName, networkUrl);

  const contract = await hre.ethers.getContractFactory("NFT");
  let nftContract = await contract.deploy();
  await nftContract.deployed();
  let nftContractAddress = nftContract.address;

  console.log("Deployed NFT Contract at ", nftContractAddress);
}
// We recommend this pattern to be able to use
// async/await everywhere and properly handle errors.
main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
