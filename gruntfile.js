module.exports = function(grunt) {

	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	watch: {
		options: {
			livereload: false,
		},
		main: {
			files: ['*/*.scss', './_layouts/*.html', './_includes/*.html', '*.html', './_posts/*.md'],
			tasks: ['default'],
		}
	},

	shell : {
		jekyllBuild : {
			command : 'jekyll build'
		}
	},
	
	sass: {
		dist: {
			options: {
				style: 'expanded'
			},
			files: {
				'./css/main.css': './_sass/main.scss'
			}
		}
	},

	autoprefixer: {
   		options: {
			 browsers: ['last 2 versions', 'ios 7']
		},
	    multiple_files: {
			expand: true,
			flatten: true,
			src: 'build/css/main.css',
			dest: 'css'
		},
	},

	browserSync: {
    	dev: {
			bsFiles: {
				src : ['./_site/*']
			},
			options: {
				server: {
					 baseDir: "./_site"
				},
				watchTask: true // < VERY important
			}
		}
	}	
		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-shell');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['sass', 'autoprefixer', 'shell:jekyllBuild']);
	grunt.registerTask('up', ['browserSync', 'watch']);

};
