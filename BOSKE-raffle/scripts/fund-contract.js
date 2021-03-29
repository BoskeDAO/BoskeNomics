const { ethers } = require("ethers");
const fs = require("fs");
const Randomness = artifacts.require("RandomNumberConsumer");
const Lottery = artifacts.require("Lottery");
const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || "1000000000000000000";
let raw = fs.readFileSync("../abis/LinkToken.json");
const ABI = JSON.parse(raw);

module.exports = async function(callback) {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // Hard coded for rinkeby
  const linkAddress = "0x01be23585060835e02b77ef475b0cc51aa1e0709";
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const linkContract = new ethers.Contract(linkAddress, ABI, wallet);

  var randomnessContract = await Randomness.deployed();
  var lotteryContract = await Lottery.deployed();
  console.log(lotteryContract.address);
  console.log(randomnessContract.address);

  await linkContract
    .transfer(randomnessContract.address, payment)
    .then(function(tx) {
      console.log(tx);
    });
  callback();
};
