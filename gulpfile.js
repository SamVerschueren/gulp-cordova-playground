'use strict';
const gulp = require('gulp');
const create = require('gulp-cordova-create');
const del = require('del');

gulp.task('clean', () => del('.cordova'));

gulp.task('build', ['clean'], () => {
	return gulp.src('build/dist')
		.pipe(create());
});
