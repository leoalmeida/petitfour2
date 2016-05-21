var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var Builder = require('systemjs-builder');
var manifest = require('gulp-manifest');
var mergeStream = require('merge-stream');
var path = require('path');

gulp.task('heroku:production', function (done) {
    runSequence('build-sjs', 'build-assets', 'build-manifest', done);
});

/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
    runSequence('build-sjs', 'build-assets', 'build-manifest', done);
});


gulp.task('build-sjs', function (done) {
    runSequence('tsc-app', buildSJS);
    function buildSJS () {
        var builder = new Builder();
        builder.loadConfig('./systemjs.conf.js')
            .then(function() {
                return builder
                    .buildStatic(config.app + 'main.js',
                        config.tmp + config.app + 'bundle.js',
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

        gulp.src(config.app + '**/*.html', {
                base: config.app
            })
            .pipe(gulp.dest(config.build.app));

        gulp.src(config.app + '**/*.css', {
                base: config.app
            })
            .pipe(cssnano())
            .pipe(gulp.dest(config.build.app));

        gulp.src(config.assetsPath.imagens + '**/*.*', {
                base: config.assetsPath.imagens
            })
            .pipe(gulp.dest(config.build.assetPath + 'imagens'));


//        gulp.src(config.assetsPath.scripts + '**/*.js', {
//            base: config.assetsPath.scripts
//        }).pipe(gulp.dest(config.build.assetPath));

        gulp.src(config.index)
            .pipe(useref())
            .pipe(gulpif('assets/lib.js', uglify()))
            .pipe(gulpif('*.css', cssnano()))
            .pipe(gulpif('!*.html', rev()))
            .pipe(revReplace())
            .pipe(gulp.dest(config.build.path))
            .on('finish', done);
    });
});

gulp.task('build-manifest', function(){
    mergeStream(
        gulp.src([
            path.join(config.root + '*.html'),
            path.join(config.root + 'favicon.png'),
            path.join(config.root + 'fonts/*.*'),
            path.join(config.assetsPath.imagens + '*.{png,svg,jpg}'),
            path.join(config.app + 'templates/*.html'),
            path.join(config.app + 'stylesheets/*.css'),
            path.join(config.app + 'data/menu.json'),
            path.join(config.app + 'data/verbs.json'),
            path.join(config.assets + '*.js'),
            path.join(config.assets + '*.css')
        ], {
            base: config.build.path
        })
    ).pipe(manifest({
            hash: true,
            preferOnline: true,
            timestamp: true,
            network: ['*'],
            filename: 'pettitfour.appcache',
            exclude: 'app.manifest'
        }))
        .pipe(gulp.dest('dist'));
});

/* Copy fonts in packages */
gulp.task('fonts', function () {
    gulp.src(config.assetsPath.fonts + '**/*.*', {
            base: config.assetsPath.fonts
        })
        .pipe(gulp.dest(config.build.fonts));

    gulp.src([
            'node_modules/font-awesome/fonts/*.*'
        ])
        .pipe(gulp.dest(config.build.fonts));
});

gulp.task('others', function () {
    gulp.src(config.root + 'pettitfour.appcache', {
            base: config.root})
        .pipe(gulp.dest(config.build.path));

    gulp.src(config.root + 'favicon.png', {
            base: config.root})
        .pipe(gulp.dest(config.build.path));

    gulp.src(config.app + '**/*.json', {
            base: config.app
        }).pipe(gulp.dest(config.build.app));
});
