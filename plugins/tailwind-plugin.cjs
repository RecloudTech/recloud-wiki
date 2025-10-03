function tailwindPlugin(context, options) {
    return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions) {
            postcssOptions.plugins = [
                require('tailwindcss'),
                require('postcss-import'),
                require('autoprefixer'),
            ];
            return postcssOptions;
        },
    };
}

module.exports = tailwindPlugin;
