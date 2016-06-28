var shell = require('gulp-shell');

gulp.task('generate-file', ['check-params'], shell.task([
    'ruby -e \'a=STDIN.readlines;' + util.env.lines + '.times do;b=[];16.times do; b << a[rand(a.size)].chomp end; puts b.join(" "); end\' < /usr/share/dict/words > file.txt'
]));

gulp.task('check-params', function(){
	var lines = util.env.lines;
	if(!lines || lines !== parseInt(lines, 10)){
		util.log(util.colors.green('Please define desired quantity of lines, example: \'generate-file --lines 100\''));
		process.exit(-1);
	}
});