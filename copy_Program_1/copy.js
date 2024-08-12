const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const errorText = "FS Operation failed";
const sourceFolder = "Program_1";
const destinationFolder = "copy_Program_1";

const copy = async (source, destination) => {
    try {
        await fsPromises.access(source, fs.constants.F_OK);
        
        try {
            await fsPromises.access(destination, fs.constants.F_OK);
            throw new Error(errorText);

        } catch(err) {
            if (err.code !== 'ENOENT') throw err;
        }
        
        await fs.promises.mkdir(destination);
        const items = await fsPromises.readdir(source, { withFileTypes: true});

        for (const item of items) {
            const srcPath = path.join(source, item.name);
            const destPath = path.join(destination, item.name);
            if (item.isDirectory()) {
                await copy(srcPath, destPath);
            } else {
                await fsPromises.copyFile(srcPath, destPath);
            }
        }
    } catch (err) {
        console.error(`${errorText}: ${err.message}`);
        throw err;
    }
};

copy(sourceFolder, destinationFolder);