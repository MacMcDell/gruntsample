/// <binding ProjectOpened='watch, prod' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            local: ['localBundles', 'assetsLocal.json'],
            prod: ['bundles', 'assetsProd.json']
        },
        uglify: {
            options: {
                sourceMap: true
            },
            prod: {
                files: {
                    'bundles/jquery.js': ['Scripts/jquery-*.min.js'],
                    'bundles/jqueryval.js': ['Scripts/jquery.validate*.min.js'],
                    'bundles/modernizr.js': ['Scripts/modernizr-*.js'],
                    'bundles/bootstrap.js': ['Scripts/bootstrap.js', 'Scripts/respond.js']
                    //  'bundles/site.js': ['Scripts/site.js']
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            prod: {
                files: {
                    'bundles/main.css': ['Content/bootstrap.css', 'Content/site.css']
                }
            }

        },
        filerev: {
            prod: {
                src: [
                    'bundles/jquery.js',
                    'bundles/jqueryval.js',
                    'bundles/modernizr.js',
                    'bundles/bootstrap.js',
                    'bundles/site.js',
                    'bundles/main.css']
               
            },
            local: {
                src: [
                 'Scripts/jquery-*.min.js',
                'Scripts/jquery.validate*.min.js',
                'Scripts/modernizr-*.js',
                'Scripts/bootstrap.js',
                'Scripts/respond.js',
                'Content/bootstrap.css',
                 'Content/site.css'
                ],
                dest: 'localBundles'

            }



        },
        filerev_assets: {
            prod: {
                options: {
                    dest: 'assetsProd.json',
                    prefix: "/",
                    prettyPrint: true
                }
            },
            local: {
                options: {
                    dest: 'assetsLocal.json',
                    prefix: "/",
                    prettyPrint: true
                }
            }
        },
        watch: {
            local: {
                files: ['Scripts/**/*.js', 'Content/**/*.css'],
                tasks: ['local']
            },
            prod: {
                files: ['Scripts/**/*.js', 'Content/**/*.css'],
                tasks: ['prod']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-filerev-assets');
    grunt.loadNpmTasks('grunt-contrib-watch');


  //  grunt.registerTask('cleandirs', ['clean']);
  grunt.registerTask('prod', ['clean:prod','uglify:prod', 'cssmin:prod', 'filerev:prod', 'filerev_assets:prod']);
    grunt.registerTask('local', ['clean:local','filerev:local', 'filerev_assets:local']);
  





};