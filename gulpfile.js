var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
amdOptimize  = require('gulp-amd-optimizer');


var requireConfig = {
      baseUrl: "scripts",
      paths: {
        "jquery": "component/jquery.min",
        "canjs": "component/can",
    }
};


gulp.task('minify', function () {
   return gulp.src('scripts/component/*.js')
      .pipe(uglify())
      .pipe(concat('dest.js'))
      .pipe(gulp.dest('build'))
});

gulp.task('rjs_minify', function() {
	return gulp.src('test/*.js', {'base': requireConfig.baseUrl})
        .pipe(amdOptimize(requireConfig))
        .pipe(concat('rjs_minify.js'))
        .pipe(gulp.dest('build'))
})

