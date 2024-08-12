const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const errorText = "FS operation failed";
const oldFile = 'wrongFilename.txt';
const newFile = 'properFilename.md';

const rename = async () => {
    const oldFilePath = path.join(__dirname, oldFile);
    const newFilePath = path.join(__dirname, newFile);

    try {
        await fsPromises.access(oldFilePath, fs.constants.F_OK);

        try {
            await fsPromises.access(newFilePath, fs.constants.F_OK);
            throw new Error(errorText);
        } catch(err) {
            if (err.code !== 'ENOENT') throw err;
        }
    await fsPromises.rename(oldFilePath, newFilePath);

    console.log(`Datei ${oldFile} erfolgreich in ${newFile} umbenannt.`);
    } catch(err) {
        console.error(`${errorText}: ${err.message}`);
    }

};

rename();