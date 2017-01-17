var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
gulp.task('buildSass',function(){
	gulp.src('src/sass/*.scss')
		.pipe(sass({outputStyle:'expanded'}))
		.pipe(gulp.dest('src/css'))
		//编译成功后，利用browserSync刷新页面
		.pipe(browserSync.reload(({stream:true})));
});

gulp.task('jtSass',function(){
	gulp.watch('src/sass/*.scss',['buildSass']);
})
//利用'browser-sync'创建静态服务器
gulp.task('server',function(){
	browserSync({
		/*server:{
			baseDir:"./src"//设置当前目录为静态服务器
		},*/
		port:4000,
		//代理 localhost=192.168.0.100,,'./src/*.php'
		proxy:'http://localhost/codingtwo/src/',
		//监听html文档
		files:['./src/*.html'],
	});
	gulp.watch('src/sass/*.scss',['buildSass']);
})