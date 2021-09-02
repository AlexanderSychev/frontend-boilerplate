'use strict';

/** SVG files rules */
module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'url-loader',
            },
        ],
    },
};
