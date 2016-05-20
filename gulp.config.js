var historyApiFallback = require('connect-history-api-fallback')
var connectLogger = require("connect-logger");

module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var tmp = root + 'tmp/';
    var test = root + 'test/';
    var testHelper = test + 'test-helpers/';
    var e2e = test + 'e2e/';
    var assets = root + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        imagens: assets + 'imagens/',
        fonts: assets + 'fonts/',
        scripts: assets + 'scripts/'
    };
    var index = root + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsTestFiles = {
        unit: [app + '**/*.spec.ts'],
        e2e: [e2e + '**/*.ts'],
        helper: [testHelper + '**/*.ts']
    };
    var build = {
        cache: 'pettitfour.appcache',
        favicon: 'dist/favicon.ico',
        path: 'dist/',
        app: 'dist/app/',
        fonts: 'dist/fonts/',
        imagens: 'dist/assets/imagens/',
        assetPath: 'dist/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var report = {
        path: 'report/'
    };
    var browserSync = {
        dev: {
            port: process.env.PORT || 3000,
            ui: {
                port: 3002
            },
            server: {
                baseDir: './',
                middleware: [connectLogger(), historyApiFallback()]
            },
            files: [
                "index.html",
                "systemjs.conf.js",
                "assets/styles/main.css",
                "tmp/app/**/*.js",
                "app/**/*.css",
                "app/**/*.html"
            ]
        },
        prod: {
            port: process.env.PORT || 80,
            ui: {
                port: 8081
            },
            server: {
                baseDir: './' + build.path,
                middleware: [connectLogger(), historyApiFallback()]
            }
        }
    };

    var e2eConfig = {
        seleniumTarget: 'http://127.0.0.1:3000'
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: { DEBUG: false, ENV: 'production' }
        }
    };

    var config = {
        root: root,
        app: app,
        test: test,
        tmp: tmp,
        testHelper: testHelper,
        e2e: e2e,
        e2eConfig: e2eConfig,
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        tsTestFiles: tsTestFiles,
        browserSync: browserSync,
        systemJs: systemJs
    };


    return config;
};
