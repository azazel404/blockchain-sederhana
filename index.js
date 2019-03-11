const sha256 = require('sha256');


//class declarasi blockchain 
class Block{
    constructor(index,timestamp,data,prevHash){
        this.index = index;
        this.timestamp = timestamp;
        this.data  = data;
        this.prevHash = prevHash
        this.Hash = sha256(
            this.index + this.timestamp + this.data + this.prevHash
        );
    }
}

//object create genesis blok
const createGenesisBlock = () => new Block(0,Date.now(),'Genesis Blok','0');

const nextBlock = (lastBlock,data) => new Block(lastBlock.index + 1,Date.now(),data,lastBlock.thisHash);


const createBlockChain = num => {
    const blockchain = [createGenesisBlock()];
    let previousBLock = blockchain[0];
        for(let i = 1; i < num; i++){
            const blockToAdd = nextBlock(previousBLock,`this is block ${i}`);
            blockchain.push(blockToAdd);
            previousBLock = blockToAdd;
           
        }
    console.log(previousBLock);
        
}

const lengthToCreate = 5;
createBlockChain(lengthToCreate);