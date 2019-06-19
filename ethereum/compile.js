const path = require('path');
const solc=require('solc');
const fs=require('fs-extra');

const buildPath=path.resolve(__dirname,'build');
fs.removeSync(buildPath);


const campaignPath=path.resolve(__dirname,'contracts','Campaign.sol');
const source=fs.readFileSync(campaignPath,'utf8');
const output=solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);//creates build folder

for(let contract in output){
  fs.outputJsonSync(//writes json file to path specified
    path.resolve(buildPath,contract.replace(':','') + '.json'),
    output[contract]//contents written to json file
  );
}
