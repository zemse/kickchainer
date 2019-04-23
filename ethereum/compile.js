//jshint esversion:6
const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;
console.log(output);
if (Object.entries(output).length === 0) {
  throw '\nError in compilation please check in Remix editor\n';
} else {
  fs.removeSync(buildPath);
  fs.ensureDirSync(buildPath);

  for (let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(':','') + '.json'),
      output[contract]
    );
  }
}
