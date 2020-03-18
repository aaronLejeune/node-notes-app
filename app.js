const yargs = require('yargs');
const notes = require('./notes');


//customize yargs version
yargs.version('1.1.0');

//craete add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note description',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

//craete remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'remove note with title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//craete remove command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes();
    }
});

//craete remove command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'remove note with title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();



