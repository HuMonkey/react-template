import path from 'path';

export default {
    html: { template: 'src/index.ejs' },
    entry: 'src/index.js',
    publicPath: '',
    hash: true,
    alias: {
        '@': path.resolve(__dirname, './src/')
    },
    extraBabelPlugins: [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ]
}
