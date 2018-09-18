const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('autoprefixer', () => {
	return gulp.src('./public/stylesheets/dev/*.css')
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('./public/stylesheets'))
});

