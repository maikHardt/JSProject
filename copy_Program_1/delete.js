const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const errorText = "FS Operation failed";
const file = "fileToRemove.txt";
const folder = "Program_1";


const remove = async () => {
    const filePath = path.join(folder, file);
    try {        
        await fsPromises.access(filePath, fs.constants.F_OK);
        
        // Datei löschen
        await fsPromises.unlink(filePath); 
        console.log(`Datei ${filePath} erfolgreich gelöscht.`);    
    } catch(err) {
        console.error(`${errorText}: ${err.message}`);
    }
   
};

remove();