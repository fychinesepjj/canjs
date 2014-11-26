var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
amd = require('amd-optimize');

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
        return gulp.src('scripts/test/*.js')
        .pipe(amd('say', requireConfig))
        .pipe(concat('rjs_minify.js'))
        .pipe(gulp.dest('build'))
})

