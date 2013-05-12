/*global module:false, require, connect*/

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
	"use strict";
	return connect.static(path.resolve(point));
};

module.exports = function (grunt) {
	"use strict";
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		livereload: {
			port: 35729 // Default livereload listening port.
		},
		connect: {
			livereload: {
				options: {
					port: 9001,
					middleware: function (connect, options) {
						return [lrSnippet, folderMount(connect, options.base)];
					}
				}
			}
		},
		lint: {
			src: ['src/main/js/*.js'],
			tests: ['src/test/js/*.js']
		},
		qunit: {
			files: ['src/test/html/*.html']
		},
		jshint: {
			all: ['Gruntfile.js', 'src/main/js/*.js', 'src/test/js/*.js'],
			options: {
				browser: true
			},
			
			src: {
				globals: { define: true }
			},
			tests: {
				globals: { QUnit: true, define: true }
			}
		},
		regarde: {
			js: {
				files: 'src/**/*.js',
				tasks: ['qunit', 'livereload'],
				spawn: true
			}
		},
		uglify: {
			build: {src: 'src/main/**/*.js', dest: 'target/min.js'}
		}
	});
	
  grunt.loadNpmTasks('grunt-istanbul');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Default task.
	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['uglify']);
};
