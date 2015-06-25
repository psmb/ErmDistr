module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			compass: {
				files: "scss/**/*.scss",
				tasks: ['compass:compile'],
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
			compile: {
				options: {
					environment: 'production',
					config: 'config.rb'
				}
			}
		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-concat');

	// create custom task-list
	grunt.registerTask('default', ["watch"]);
	grunt.registerTask('build', ['bower_concat', 'compass:compile']);
};
