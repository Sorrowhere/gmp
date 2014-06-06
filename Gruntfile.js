'use strict';

module.exports = function(grunt){

	// load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// grunt configuration
	grunt.initConfig({
		// metadata
		pkg: grunt.file.readJSON('package.json'),

		// task: clean

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

		// task: concat
		concat: {
			options: {
				stripBanners: true
			},
			css: {
				src: [
					'public/css/base/reset.css'
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
	grunt.registerTask('default', ['compass', 'concat']);
}