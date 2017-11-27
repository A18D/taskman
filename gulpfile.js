const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('jslib', function () {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js'
    ])
        .pipe(gulp.dest('app/js/lib'));
});

gulp.task('bootstrap', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(gulp.dest('app/css'));
});

gulp.task('fonts', function () {
    return gulp.src('node_modules/bootstrap/fonts/*')
        .pipe(gulp.dest('app/fonts'));
});

gulp.task('less', function () {
    return gulp.src('styles/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./app/css'))
});

gulp.task('build', ['less', 'bootstrap', 'fonts', 'jslib']);