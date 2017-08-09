const browserSync = require('browser-sync');
const reload = browserSync.reload;
const gulp = require('gulp');
const jshint = require('gulp-jshint');

const PATHS = {
    js: {
        src: 'app/script/*.js'
    },
    html: {
        src: 'app/*.html'
    }
};

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function () {
    browserSync({
        server: "./"
    });
});

// Lint task.
gulp.task('lint', function () {
    gulp.src(PATHS.js.src)
        .pipe(jshint());
});

// Default task to be run with `gulp`.
gulp.task('default', ['lint', 'browser-sync'], function () {
    gulp.watch(PATHS.html.src).on('change', reload);
    gulp.watch(PATHS.js.src, ['lint']).on('change', reload);
});
