const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Insert your deployment script here
  const networkName = hre.network.name;
  const networkUrl = hre.network.config.url;
  console.log("Deploying to network", networkName, networkUrl);

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();
  await marketplace.deployed();
  console.log("Marketplace deployed to:", marketplace.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(marketplace.address);
  await nft.deployed();
  console.log("Nft deployed to:", nft.address);
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

/*
Marketplace deployed to: 0x012dD7821EC05a66C499FAa1d50adc59357F51cf
Nft deployed to: 0xdfb928C75468AE116fe7F43c34cFbdd21f463E33
*/
