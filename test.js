const { ethers, utils } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(
  process.env.ROPSTEN_RPC_URL
);
const wallet1 = new ethers.Wallet(
  process.env.ROPSTEN_WALLET_PRIVATE_KEY1,
  provider
);
const wallet2 = new ethers.Wallet(
  process.env.ROPSTEN_WALLET_PRIVATE_KEY2,
  provider
);

const marketplaceAddress = "0x012dD7821EC05a66C499FAa1d50adc59357F51cf";
const marketplaceAbi =
  require("./artifacts/contracts/Marketplace.sol/Marketplace.json").abi;
const nftAddress = "0xdfb928C75468AE116fe7F43c34cFbdd21f463E33";
const nftAbi = require("./artifacts/contracts/NFT.sol/NFT.json").abi;

const marketplaceContract = new ethers.Contract(
  marketplaceAddress,
  marketplaceAbi,
  provider
);
const nftContract = new ethers.Contract(nftAddress, nftAbi, provider);

const mintToken = async (tokenURI) => {
  console.log("Start Mint Token...");
  const txn = await nftContract.populateTransaction.mintToken(tokenURI);
  console.log(txn);
  const txnRes = await wallet2.sendTransaction(txn);
  console.log(txnRes);
  const txnReceipt = await txnRes.wait();
  console.log(txnReceipt);
  console.log("End Mint Token...");
};

(async () => {
  // await mintToken(
  //   "https://gateway.pinata.cloud/ipfs/QmbfGfcwzYGwtQL4cxUt6HbspmGWTbxYhciTTpVxxwpWVW"
  // );
  const res = await marketplaceContract.fetchAvailableMarketItems();
  console.log(res);
})();

/*
https://gateway.pinata.cloud/ipfs/QmP8wuS8EnCHxcDijXBCT8mjL3kXBmyF7wfvgbZA3g3nWV
https://gateway.pinata.cloud/ipfs/QmbfGfcwzYGwtQL4cxUt6HbspmGWTbxYhciTTpVxxwpWVW
*/
