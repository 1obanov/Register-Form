module.exports = {
	path: {
		src: {
			html: ['*.html'],
			htmlProd: ['*.html'],
			js: 'js/*.js',
			jsProd: ['js/*.js', '!js/*.min.js'],
			jsMinProd: 'js/*.min.js',
			style: 'scss/*.scss',
			styleCss: 'scss/*.css',
			styleProd: 'scss/*.scss',
			img: ['img/**/*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)',
				'!img/wp*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)'],
			imgTrash: ['img/wp*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)'],
			imgProd: ['img/**/*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)',
				'!img/wp*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)',
				'!img/uno*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)'],
			imgProdUnoptimized: ['img/uno*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)'],
			imgProdTrash: ['img/wp*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)'],
			fonts: 'fonts/**/*.+(otf|eot|woff2|woff|ttf|svg|OTF|EOT|WOFF2|WOFF|TTF|SVG)',
			other: 'other/**/*.*',
		},
		build: {
			html: 'build',
			js: 'build/assets/js/',
			css: 'build/assets/css/',
			styleCss: 'build/assets/css/',
			img: 'build/assets/img/',
			imgTrash: 'build/content-images/',
			fonts: 'build/assets/fonts/',
			serve: 'build/',
			serveIndex: 'build/home.html',
			other: 'build/assets/other',
		},
		production: {
			html: '../dist/',
			js: '../dist/assets/js/',
			css: '../dist/assets/css/',
			styleCss: '../dist/assets/css',
			img: '../dist/assets/img/',
			imgTrash: '../dist/content-images/',
			fonts: '../dist/assets/fonts/',
			serve: '../dist/',
			serveIndex: 'dist/home.html',
			other: '../dist/assets/other',
		},
		watch: {
			html: ['*.html', 'template/**/*.html'],
			js: ['js/**/*.js'],
			style: ['scss/**/*.+(scss|sass)'],
			styleCss: 'scss/*.css',
			img: 'img/**/*.+(jpg|jpeg|png|svg|gif|ico|JPG|JPEG|PNG|SVG|GIF|ICO)',
			fonts: 'fonts/**/*.+(otf|eot|woff2|woff|ttf|svg|OTF|EOT|WOFF2|WOFF|TTF|SVG)'
		},
		scrennPage: '../01-home.html',
		clean: ['!build', 'build/*.*', 'build/assets/**', 'build/content-images/**'],
		cleanProd: ['../dist/assets/**', '../dist/content-images/**', '!../dist/content-images/index.html', '../dist/*.html', '!../dist/index.html', '!../dist/assets', '!../dist/assets/index.html', '../dist/assets/css/**/*.*', '!../dist/assets/css', '!../dist/assets/css/style-wp.css', '!../dist/assets/css/index.html', '../dist/assets/fonts/**/*.*', '!../dist/assets/fonts', '!../dist/assets/fonts/index.html', '../dist/assets/img/**/*.*', '!../dist/assets/img', '!../dist/assets/img/index.html', '../dist/assets/js/**/*.*', '!../dist/assets/js', '!../dist/assets/js/index.html', '!../dist/assets/js/general.js', '../dist/assets/other/**/*.*', '!../dist/assets/other', '!../dist/assets/other/index.html']
	}
};