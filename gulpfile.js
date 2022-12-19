const {src,dest,watch,series}=require('gulp')
const sourcemaps= require('gulp-sourcemaps')
const terser=require('gulp-terser')
const concat=require('gulp-concat')

function minifyJS(){
    
    return src('app.js')
    .pipe(terser())
    .pipe(concat('main.js'))
    .pipe(dest('js'));
}

function watchTask(){
    watch('app.js', minifyJS)
    
}
exports.default=series(minifyJS, watchTask);