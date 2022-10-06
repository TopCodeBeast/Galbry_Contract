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
Marketplace deployed to: 0xbcE8148CEA5CE1b30025853FdC8B4783110CBCF3
Nft deployed to: 0xD9671bffB2c3C3b6b10e0AfC6910a9173FD0BaD7
*/
