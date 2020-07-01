// eslint-disable-next-line no-unused-vars
module.exports = ({ file, options, env }) => {
    const { mode } = options;

    return {
        plugins: {
            'postcss-import': {},
            'postcss-preset-env': {
                importFrom: './src/assets/styles/app.css',
            },
            cssnano: mode === 'production' ? {} : false,
        },
    };
};
