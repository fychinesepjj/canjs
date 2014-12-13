({
    appDir: './scripts',
    dir: './dist',
    baseUrl: ".",
    mainConfigFile: './scripts/config.js',
    optimizeCss: 'none',
    removeCombined: true,
    modules: [
        {
            name: 'config',
            include: ['jquery', 'canjs']
        },
        {
            name: 'test/say',
            exclude: ['config']
        }
    ],
})