var lines_catalogue = [],
    identifiers = {},
    //identifier_length determinates how much characters we will use for  identifiers catalogue
    //this number depend on input file size
    //and maximum opened files permission of system
    //some formula to calculate apropiate identifier_length can be done
    identifier_length = 1;

catalogue = {
    get: function(){
        return lines_catalogue;
    },
    set: function(data){
        lines_catalogue = data;
        return;
    },
    order: function(){
        this.set(lines_catalogue.sort());
    },
    loop: function(index, output_file, cb){
        var lines = this.get();
        var identifier = lines[index],
            catalogue = this;
        if(index < lines.length){
            file.sortLines(index, identifier, output_file, function(){
                //next lines
                catalogue.loop(index + 1, output_file, cb);
            });
        }else{
            //loop finished
            cb();
        }
    },
    saveIdentifier: function(line){
        var line_identifier = line.substring(0, identifier_length);
        var line_filename = 'tmp/' + line_identifier + '-' + string.createHash(line_identifier) + '.txt';
        //save line identifier in catalogue
        //we use temporal identifiers{} instead of indexOF beacuse it is faster
        if(identifiers[line_identifier] !== null){
            identifiers[line_identifier] = null;
            lines_catalogue.push(line_identifier);
            //create txt file with identifier name where we will save lines
            file.create(line_filename, '');
        }
        //save line to tmp file
        file.append(line_filename, line + "\r\n");
    }
};

return catalogue;