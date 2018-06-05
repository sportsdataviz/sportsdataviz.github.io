var lunr = require('./js/lunr.js'),
    fs = require('fs')



// create the index
var index = lunr(function(){
    // boost increases the importance of words found in this field
    this.field('title', {boost: 10});
    this.field('author', {boost: 2});
    this.field('year');
    this.ref('id');
});

fs.readFile('./sportvis.json', "utf-8", function (err, data) {
    // this is a store with some document meta data to display
    // in the search results.
    var store = {};

    var entries = JSON.parse(data);

    console.log(">>", typeof entries);

    entries.forEach(function(entry){
        index.add({
            title: entry.title,
            author: entry.author,
            year: entry.year,
            id: entry.id
            // hacky way to strip html, you should do better than that ;)
    //        content: cheerio.load(entry.content.replace(/<[^>]*>/g, ' ')).root().text()
        });
        store[entry.id] = {title: entry.title, author: entry.author, year: entry.year, id: entry.id};
    });

    //fs.writeFileSync('sportvis_index.json', JSON.stringify({
    //    index: index.toJSON(),
    //    store: store
    //}));

    fs.writeFileSync('sportvis_index.json', JSON.stringify(index.toJSON()));

});
