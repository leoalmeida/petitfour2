var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-report', 'clean-ts', 'clean-sass']);

/* Clean build folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});

/* Clean sass compile */
gulp.task('clean-sass', function () {
    return del([config.assetsPath.styles + '**/*.css']);
});

/* Clean js and map */
gulp.task('clean-ts', function () {
    return del([config.tmp]);
});

gulp.task('clean-ts-app', function () {
    return del([
        config.tmp + config.app + '**/*.js',
        config.tmp + config.app + '**/*.js.map'
    ]);
});
