const fs  = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    console.log("Your Notes...");
};

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){ // als er dezelfede titels in komen
        return note.title === title;
        
    });

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
    } else{
        console.log(title, 'is al ready taken');
    }
    
};
const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) { // als er dezelfede titels in komen
        return note.title !== title;
    });

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.red('No note found with name', title));
    }
    
    saveNotes(notesToKeep);
};

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch(e){
        console.log('WARNING, no file yet, creating new one..');
        return [];
    }
    
};

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};
