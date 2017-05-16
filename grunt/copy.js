module.exports = function(grunt){
    var devPath = grunt.config('devPath');
    var devJspmPackages = grunt.config('devJspmPackages');

    var jspmCfg = grunt.config('jspm');
    var pkgJson = require(__dirname+'/../package.json');

    return {
        devJspmConf: {
            expand: true,
            src: 'config/jspm.conf.js',
            dest: devPath+'/',
            flatten: true,
            options: {
                process: function(content){
                    return content.replace(/dev\//g, '').replace(/\.\.\//g, '/dev');
                }
            }
        }
    }
};
