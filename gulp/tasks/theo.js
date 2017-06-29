const config = require("../config.js");

const gulp = require("gulp");
const theo = require("gulp-theo");
const rename = require("gulp-rename");

gulp.task("theo", function () {
	return gulp.src(config.theo.src)
		.pipe(theo.plugin({
			transform: { type: config.theo.transformType },
			format: { type: config.theo.formatType }
		}))
		.pipe(rename({
			prefix: "_"
		}))
		.pipe(gulp.dest(config.theo.dest))
});
