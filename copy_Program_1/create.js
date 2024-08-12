const fs = require('fs');
const path = require('path');

const successText = "I am fresh and Young";
const file = "fresh.txt";
const folder = "Program_1";
const errorMessage = "FS Operation failed";
const UintBArray = new Uint8Array(Buffer.from(successText));

const create = async () => {
    const filePath = path.join(folder, file);
    try{
        await fs.promises.writeFile(filePath, successText, {
        flag: "wx"
    } )
    } catch (err){
        console.error(`${errorMessage}: ${err.message}`);
    }

};

create();