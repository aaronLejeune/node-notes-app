const fs  = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    console.log("Your Notes..");
};

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    //REFACTORING --old
    // const duplicateNotes = notes.filter(function (note) { // als er dezelfede titels in komen
    //     return note.title === title;

    // });

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
    } else{
        console.log(title, 'is al ready taken');
    }
    
};
const removeNote = (title) =>{
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.red('Note removed with name', title));
    }
    
    saveNotes(notesToKeep);
};

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green('Your notes:'));

    notes.forEach(note => {
        console.log(chalk.blue('Title: ', note.title));
    });
};

const readNote = (title) => {
    const notes = loadNotes();

    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        
        console.log(noteToRead.title);
        console.log(noteToRead.body);

    } else {
        console.log(title, 'not found');
    }
    
};


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch(e){
        console.log('WARNING, no file yet, creating new one..');
        return [];
    }
    
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
