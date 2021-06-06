
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Teeth = await hre.ethers.getContractFactory("Teeth");
  const teeth = await Teeth.deploy("Teeth", "Teeth");

  await teeth.deployed();
  console.log("Token deployed to:", teeth.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
