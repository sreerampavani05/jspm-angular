module.exports = {
    default: [],
    'dev:build': [
        'copy:devJspmConf'
    ],
    serve: [
        'dev:build',
        'connect:dev',
        'concurrent:dev'
    ]
};
