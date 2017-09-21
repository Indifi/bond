/*
 * created by aditya on 21/09/17
 */

"use strict";

const gulp = require("gulp");
const webpack = require("webpack");
const loadPlugins = require("gulp-load-plugins");
const rimraf = require("rimraf");

const popupWebpackConfig = require("./popup/webpack.config");
const eventWebpackConfig = require("./event/webpack.config");
const contentWebpackConfig = require("./content/webpack.config");

const plugins = loadPlugins();

gulp.task('popup-js', ['clean'], (cb) => {
    webpack(popupWebpackConfig, (err, stats) => {
        if(err) {
            throw new plugins.util.PluginError('webpack', err);
        }
        plugins.util.log('[webpack]', stats.toString());
        cb();
    });
});

gulp.task('event-js', ['clean'], (cb) => {
    webpack(eventWebpackConfig, (err, stats) => {
        if(err) {
            throw new plugins.util.PluginError('webpack', err);
        }
        plugins.util.log('[webpack]', stats.toString());
        cb();
    });
});

gulp.task('content-js', ['clean'], (cb) => {
    webpack(contentWebpackConfig, (err, stats) => {
        if(err) {
            throw new plugins.util.PluginError('webpack', err);
        }
        plugins.util.log('[webpack]', stats.toString());
        cb();
    });
});

gulp.task('popup-html', ['clean'], () => {
    return gulp.src('popup/src/index.html')
        .pipe(plugins.rename('popup.html'))
        .pipe(gulp.dest('./build'))
});

gulp.task('popup-images', ['clean'], () => {
    return gulp.src('popup/src/images/*')
        .pipe(gulp.dest('./build/popup-images'))
});

gulp.task('copy-manifest', ['clean'], () => {
    return gulp.src('manifest.json')
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
    rimraf('./build', cb);
});

gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'popup-images', 'event-js', 'content-js']);

gulp.task('watch', ['default'], () => {
    gulp.watch('popup/**/*', ['build']);
    gulp.watch('content/**/*', ['build']);
    gulp.watch('event/**/*', ['build']);
});

gulp.task('default', ['build']);

