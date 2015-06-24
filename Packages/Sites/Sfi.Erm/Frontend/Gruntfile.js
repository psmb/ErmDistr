module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			compass: {
				files: "scss/**/*.scss",
				tasks: ['compass:dist'],
			},
		},
		bower_concat: {
			all: {
				dest: 'Public/Built/_bower.js',
				cssDest: 'Public/Built/_bower.css',
				mainFiles: {
					'foundation': 'js/foundation/foundation.js'
				},
			}
		},
		compass: {
			dist: {
				options: {
					environment: 'development',
					config: "config.rb"
				}
			}
		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-browser-sync');

	// create custom task-list
	grunt.registerTask('default', ["watch"]);
};
