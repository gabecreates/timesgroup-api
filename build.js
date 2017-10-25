var Metalsmith  = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    tojson = require('metalsmith-to-json');

Metalsmith(__dirname)
    .use( markdown() )
    .use( tojson({
        outputPath : '',
        createIndexes : true,
        indexPaths : ['posts'],
        onlyOutputIndex : false
    }))
    .build(function( err, files ) {
        if( err ) throw err;
    });
