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
			command : 'jekyll build --drafts'
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
	    main: {
			expand: true,
			flatten: true,
			src: 'css/main.css',
			dest: 'css'
		},
	},
		
	imagemin: {                          // Task
		dynamic: {                         // Another target
			files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'assets/',                   // Src matches are relative to this path
				src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
				dest: 'assets/'                  // Destination path prefix
			}]
		}
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

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.registerTask('default', ['sass', 'autoprefixer', 'shell:jekyllBuild']);
	grunt.registerTask('up', ['browserSync', 'watch']);

};
