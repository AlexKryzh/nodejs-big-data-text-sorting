var fs = require('fs'),
    readline = require('readline'),
    lines_catalogue = [];
file = {
    create: function(filename, content){
        //create empty file
        fs.writeFile(filename, content, function(err) {
            if (err) throw err;
        });
    },
    append: function(filename, content){
        //append content to file
        fs.appendFile(filename, content, 'utf8', function (err) {
            if (err) throw err;
        });
    },
    indexLines: function(filename, cb){
        var file = this;
        readline.createInterface({
            input: fs.createReadStream(filename)
        })
        .on('line', function (line) {
            catalogue.saveIdentifier(line);
        })
        .on('close', function () {
            //order catalogue identifiers in alphabetical order
            catalogue.order();
            cb();
        });
    },
    sortLines: function(index, identifier, output_file, cb){
        //we use extra hash to resolve filesystem difference
        //some filesystems is not case sensitive
        var filename = 'tmp/' + identifier + '-' + string.createHash(identifier)+ '.txt',
            lines = [],
            file = this;

        //operations for first block of lines
        if(index === 0){
            //create output empty file
            this.create(output_file, '');
        }

        readline.createInterface({
            input: fs.createReadStream(filename)
        })
        .on('line', function (line) {
            lines.push(line);
        })
        .on('close', function () {
            //append lines to output file
            file.append(output_file, string.formatLines(index, lines));
            cb();
        });
    }
};

return file;