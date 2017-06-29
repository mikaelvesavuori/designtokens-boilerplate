const gulp = require("gulp");

gulp.task("default", ["clean", "theo"], function() {
	gulp.watch(["designtokens/**/*.json"], ["build"]);
});
