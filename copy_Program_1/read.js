const fsPromises = require('fs').promises;
const path = require('path');

const errorText = "FS Operation failed";
const file = "fileToRead.txt";
const folder = "Program_1";


const read = async () => {
    let content = "";
    const filePath = path.join(folder, file);
    try {
        await fsPromises.access(filePath, fsPromises.constants.F_OK);
        content = await fsPromises.readFile(filePath, 'utf-8');

    } catch(err) {
        throw new Error(errorText);
    }
    console.log(content); 
}

read();