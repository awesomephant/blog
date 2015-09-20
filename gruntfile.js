module.exports = function(grunt) {

	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	aws: grunt.file.readJSON('aws-keys.json'),

	watch: {
		options: {
			livereload: false,
		},
		main: {
			files: ['./_data/*.yml', './research/*.html', '*/*.scss', './_layouts/*.html', './_includes/*.html', '*.html', './_posts/*.md', './_drafts/*.md', 'assets/**/*'],
			tasks: ['dev'],
		}
	},

	shell : {
		buildDev : {
			command : 'jekyll build --drafts'
		},
		buildProduction: {
			command: 'jekyll build'
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
	postcss: {
		options: {
			processors: [
				require('autoprefixer-core')({browsers: 'last 2 versions'}),
				require('cssnano')()
			]
		},
		dev: {
			src: 'css/*.css',
			dest: 'css/main.css'
		},
		production: {
			src: 'css/*.css',
			dest: './tmp/_site/css/main.css'
		}
	},

	clean: ["./tmp", "_site"],

	htmlmin: {                                     // Task
  	production: {
			options: {                                 // Target options
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true
		 	},                                // Target
			files: [{
				expand: true,
				flatten: false,
				src: './_site/**/*.html',
				dest: './tmp/'
			}],
    },
  },
	copy: {
  	main: {
    	files: [
      	{src: ['_site/feed.xml'], dest: './tmp/_site/feed.xml'},
    	],
  	},
	},

	imagemin: {                          // Task
		dynamic: {                         // Another target
			files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'tmp/_site/assets/',                   // Src matches are relative to this path
				src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
				dest: 'tmp/_site/assets'                  // Destination path prefix
			}]
		}
	},

	responsive_images: {
  	production: {
    	options: {
      	sizes: [
					{name: 'small', width: 320},
					{name: 'medium', width: 640},
					{name: 'big', width: 1000},
					{name: 'huge', width: 1600},
				]
      },
      files: [{
        expand: true,
        src: ['assets/**/*.{jpg,png}'],
        dest: 'tmp/_site'
      }]
    },
		dev: {
			options: {
				sizes: [
					{name: 'small', width: 320},
					{name: 'medium', width: 640},
					{name: 'big', width: 1000},
				]
			},
			files: [{
				expand: true,
				src: ['assets/**/*.jpg'],
				dest: '_site'
			}]
		},
  },

	compress: {
  	html: {
    	options: { mode: 'gzip',},
    	expand: true,
    	cwd: 'tmp/_site',
    	src: ['**/*.html'],
    	dest: 'tmp/_site',
			ext: '.html.gz'
  	},
		css: {
    	options: {
      	mode: 'gzip',
    	},
    	expand: true,
    	cwd: 'tmp/_site',
    	src: ['**/*.css'],
    	dest: 'tmp/_site',
			ext: '.css.gz'
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
	},

	aws_s3: {
  	options: {
    	accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
    	secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
    	region: 'eu-west-1',
    	uploadConcurrency: 5, // 5 simultaneous uploads
    	downloadConcurrency: 5 // 5 simultaneous downloads
  	},
  	production: {
    	options: {
      	bucket: 'maxkoehler.com',
      	differential: true,
      	gzipRename: 'ext'
    	},
    	files: [
      	{expand: true, cwd: 'tmp/_site', src: ['**'], dest: '/'},
    	]
  	},
	},
});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-shell');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-responsive-images');

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.loadNpmTasks('grunt-aws-s3');

	grunt.registerTask('dev', ['sass', 'postcss:dev', 'shell:buildDev']);
	grunt.registerTask('production', ['clean', 'sass', 'postcss:production', 'shell:buildProduction', 'htmlmin', 'copy', 'responsive_images:production', 'imagemin', 'compress']);

	grunt.registerTask('up', ['browserSync', 'watch']);
	grunt.registerTask('deploy', ['production', 'aws_s3']);

};
