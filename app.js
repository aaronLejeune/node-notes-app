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
    handler: function(argv){
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
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

//craete remove command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function () {
        console.log('list all notes');
    }
});

//craete remove command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('read a note');
    }
});

yargs.parse();



