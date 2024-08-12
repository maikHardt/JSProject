const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const errorText = "FS operation failed";
const folder = 'Program_1';

const list = async () => {
    const folderPath = path.join(__dirname, folder);

    try {
        await fsPromises.access(folderPath, fs.constants.F_OK);
        const files = await fsPromises.readdir(folderPath);
        console.log('Dateien im Ordner ${folder}:');
        files.forEach(file => console.log(file));
    } catch(err) {
        console.error(`${errorText}: ${err.message}`);
    }
};

list();