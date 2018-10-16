var gulp=require("gulp");

gulp.task("copy-html",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\dapus"));
})
gulp.task("css",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dapus\\css"));
})
gulp.task("img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dapus\\img"))
})
gulp.task("js",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\dapus\\js"))
})



gulp.task("watch",function(){
	gulp.watch("index.html",["copy-html"]);
	gulp.watch("img/**/*.{jpg,png}",["img"]);
	gulp.watch("css/**/*",["css"]);
	gulp.watch("js/**/*",["js"]);
})
