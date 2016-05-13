var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var Builder = require('systemjs-builder');


/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
    runSequence('build-sjs', done);
});

gulp.task('build-sjs', function (done) {
    runSequence('build-assets', buildSJS);
    function buildSJS () {
        var builder = new Builder();
        builder.loadConfig('./systemjs.conf.js')
        .then(function() {
            return builder
                .bundle(config.app + 'main',
                        config.build.path + config.app + 'main.js', 
                config.systemJs.builder);
        })
        .then(function() {
            console.log('Build complete');
            done();
        })
        .catch(function (ex) {
            console.log('error', ex);
            done('Build failed.');
        });
    }
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', function (done) {
    runSequence('clean-build', ['sass', 'fonts', 'others'], function () {
        done();

        gulp.src(config.app + '**/*.html', {
            base: config.app
        })
        .pipe(gulp.dest(config.build.app));

        gulp.src(config.app + '**/*.css', {
            base: config.app
        })
        .pipe(cssnano())
        .pipe(gulp.dest(config.build.app));

        gulp.src(config.assetsPath.scripts + '**/*.js', {
            base: config.assetsPath.scripts
        }).pipe(gulp.dest(config.build.assetPath));

        gulp.src(config.app + '**/*-data.ts', {
                base: config.app
            })
            .pipe(gulp.dest(config.build.app));

        return gulp.src(config.index)
            .pipe(useref())
            .pipe(gulpif('*.js', uglify()))
            .pipe(gulpif('*.css', cssnano()))
            .pipe(gulpif('!*.html', rev()))
            .pipe(revReplace())
            .pipe(gulp.dest(config.build.path));
    });
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
    gulp.src(config.assetsPath.fonts + '**/*.*', {
        base: config.assetsPath.fonts
    })
    .pipe(gulp.dest(config.build.fonts));

    gulp.src(['node_modules/font-awesome/fonts/*.*'])
    .pipe(gulp.dest(config.build.fonts));
});

gulp.task('others', function () {
    gulp.src(config.assetsPath.images + '**/*.*', {
            base: config.assetsPath.images})
        .pipe(gulp.dest(config.build.images));

    gulp.src(config.assetsPath.imgHD + '**/*.*', {
            base: config.assetsPath.imgHD})
        .pipe(gulp.dest(config.build.imgHD));

    gulp.src(config.root + 'favicon.png', {
            base: config.root})
        .pipe(gulp.dest(config.build.path));

    gulp.src(config.app + '**/*.json', {
            base: config.app
        }).pipe(gulp.dest(config.build.app));
});