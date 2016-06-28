string = {
    createHash: function(identifier){
        //create hash with summ of charcodes of characters in string
        var hash = 0,
            i = 0;
        for(i=0; i < identifier.length; ++i){
            hash +=  identifier.charCodeAt(i);
        }
        return hash;
    },
    formatLines: function(index, lines){
        //create text block with lines with apropiate linebreaks
        var content = '',
            linebreak = "\r\n";
        //deactivate a linebreak if it's first block of lines
        if(index === 0){
            linebreak = '';
        }
        //sort lines in alphabetical order
        content = lines.sort();
        //convert lines array to string with lines
        content = content.join("\r\n");
        //add linebreak to separate this block from previous one
        content = linebreak + content;

        return content;
    }
};

return string;