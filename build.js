var Metalsmith  = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    tojson = require('metalsmith-to-json');

Metalsmith(__dirname)
    .source('./data')
    .destination('./site/api')
    .use( markdown() )
    .use( tojson({
        createIndexes : true,
        indexPaths : ['residential-projects', 'commercial-projects', 'sales-centres'],
        onlyOutputIndex : false
    }))
    .build(function( err, files ) {
        if( err ) throw err;
    });
