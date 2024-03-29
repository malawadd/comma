require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: process.env.MUMBAI,
      accounts: [process.env.MNENOMIC],

    },
    optimism: {
      url: process.env.OPT,
      accounts: [process.env.MNENOMIC],

    },
    skale: {
      url: 'https://eth-online.skalenodes.com/v1/hackathon-complex-easy-naos',
      accounts: [process.env.MNENOMIC],

    },
    
  },
};
