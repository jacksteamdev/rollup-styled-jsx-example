const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

// @ts-check

const isProd = process.env.NODE_ENV === 'production';
const extensions = ['.js', '.ts', '.tsx'];

export default {
    input: [
        'src/Demo.tsx',
    ],
    output: {
        dir: "./public/dist",
        format: 'es',
        sourcemap: isProd? false : true,
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': isProd ? 'production' : 'development',
        }),
        nodeResolve({
            extensions,
        }),
        commonjs({
            include: /node_modules/,
        }),
        babel({
            extensions,
            exclude: /node_modules/,
            babelrc: false,
            // runtimeHelpers: true,
            presets: [
                ['@babel/preset-env', {
                    "targets": "> 5%, not dead",
                }],
                '@babel/preset-react',
                '@babel/preset-typescript',
            ],
            plugins: [
                "styled-jsx/babel",
                // ["module-resolver", {
                //     root: ["./src/"],
                //     alias: {
                //         "react": "./node_modules/es-react/react.js",
                //         "react-dom": "./node_modules/es-react/react-dom.js",
                //     }
                // }],
                // 'react-require',
                // '@babel/plugin-syntax-dynamic-import',
                // '@babel/plugin-proposal-class-properties',
                // ['@babel/plugin-proposal-object-rest-spread', {
                //     useBuiltIns: true,
                // }],
                // ['@babel/plugin-transform-runtime', {
                //     corejs: 3,
                //     helpers: true,
                //     regenerator: true,
                //     useESModules: false,
                // }],
            ],
        }),
        (isProd && terser()),
    ]
};