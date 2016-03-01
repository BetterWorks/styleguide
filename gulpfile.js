var gulp         = require('gulp');
var connect      = require('gulp-connect');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('webserver', function()
{
	connect.server(
	{
		livereload: true,
		port      : 9001
	});
});

gulp.task('less', function()
{
    gulp.src('styles/app.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
  	.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});
gulp.task('html', function()
{
	gulp.src('**/*.html')
	.pipe(connect.reload());
});

gulp.task('watch', function()
{
	gulp.watch('**/*.less', ['less']);
	gulp.watch('**/*.html', ['html']);
});

gulp.task('server', ['less', 'webserver', 'watch']);
gulp.task('default', ['server']);
