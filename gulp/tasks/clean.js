const gulp = require("gulp");
const del = require("del");

gulp.task("clean", function() {
	return del.sync("export");
});
