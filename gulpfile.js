


//  GULP SASS
const sass = require('gulp-sass')(require('sass'));




// BABEL
const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);


// // IMAGEMIN
// import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

// // …
// .pipe(imagemin([
// 	gifsicle({interlaced: true}),
// 	mozjpeg({quality: 75, progressive: true}),
// 	optipng({optimizationLevel: 5}),
// 	svgo({
// 		plugins: [
// 			{
// 				name: 'removeViewBox',
// 				active: true
// 			},
// 			{
// 				name: 'cleanupIDs',
// 				active: false
// 			}
// 		]
// 	})
// ]))