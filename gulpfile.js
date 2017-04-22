var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var minifycss = require('gulp-minify-css')
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var htmlmin  = require('gulp-htmlmin')
var less = require('gulp-less')
var clean = require('gulp-clean')
var LessAutoprefix = require('less-plugin-autoprefix')
var autoprefix = new LessAutoprefix({browsers:['last 10 versions']})
var watch = require('gulp-watch')
var livereload = require('gulp-livereload')

gulp.task('html', function(){
	var htmlSrc = './src/*.html'
	var dest = './dist/'
	gulp.src(htmlSrc)
		.pipe(htmlmin({collapseWhitespace: true,
						minifycss:true,
						minifyjs:true,
						removeComments:true}))
		.pipe(gulp.dest(dest))
		.pipe(livereload())
})

gulp.task('less',function(){
	gulp.src('./src/less/*.less')
		.pipe(less({plugins:[autoprefix]}))
		.pipe(gulp.dest('./src/css/'))
})

gulp.task('css',['less'],function(){
	gulp.src('./src/css/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css'))
		.pipe(livereload())
})

gulp.task('images', function(){
	gulp.src('./src/image/**/*')
		.pipe(imagemin({
			interlaced:true,
			progressive:true,
			optimizationLevel:5
		}))
		.pipe(gulp.dest('./dist/image'))
		.pipe(livereload())
})


gulp.task('js',function(){
	gulp.src('./src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
		.pipe(livereload())
})

gulp.task('clean', function(){
	gulp(['./dist/css','./dist/js','./dist/images'],{read:false})
	.pipe(clean())
})

gulp.task('watch',function(){
	livereload.listen()
	gulp.watch('./src/*.html',['html'])
	gulp.watch('./src/js/*.js',['js'])
	gulp.watch('./src/less/*.less',['css'])
	gulp.watch('./src/image/**/*',['images'])
})


gulp.task('wless',function(){
	gulp.watch('./src/less/*.less',['less'])
})