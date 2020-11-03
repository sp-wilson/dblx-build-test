module.exports = function(api) {
    const env = api.env();

    const presets = [
        [
            "@babel/preset-env",
            {
                loose: true, // TO BE TESTED
                ...(env === "modern" && {
                    targets: {
                        esmodules: true
                    },
                    modules: false
                }),
                exclude: ["transform-regenerator", "transform-async-to-generator"]
            }
        ]
    ];

    const plugins = [
        "@babel/plugin-syntax-dynamic-import",
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: false,
                useESModules: env === "modern"
            }
        ],
        env !== "modern" && [
            "module:fast-async",
            {
                compiler: {
                    noRuntime: true,
                    sourceMap: false
                }
            }
        ]
    ].filter(Boolean);

    return {
        presets,
        plugins
    };
};
