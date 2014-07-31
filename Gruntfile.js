'use strict';

module.exports = function(grunt){

	// load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// grunt configuration
	grunt.initConfig({
		// metadata
		pkg: grunt.file.readJSON('package.json'),

		// task: compass
		compass: {
			dist: {
				options: {
					sassDir: 'public/sass',
					cssDir: 'public/css',
					outputStyle: 'expanded'
				}
			}
		},

		// task: clean
		clean: [
			'public/css/*',
			'.sass-cache'
		],

		// task: concat
		concat: {
			options: {
				stripBanners: true
			},
			css: {
				src: [
					'public/css/base/reset.css',
                    'public/css/base/common.css',
					'public/css/ui/font.css',
					'public/css/ui/button.css',
                    'public/css/ui/icon.css',
                    'public/css/ui/tip.css',
                    'public/css/ui/bubble.css',
					'public/css/gmp.css',
					'public/css/highlight/github.css'
				],
				dest: 'public/css/bundle.css'
			}
		},

		// task: watch
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			},
			sass: {
				files: '**/*.{scss,sass}',
				tasks: ['compass', 'concat']
			}
		}
	});

	// register default tasks
	grunt.registerTask('default', ['clean', 'compass', 'concat']);
}