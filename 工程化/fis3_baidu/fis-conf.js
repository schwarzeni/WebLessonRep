// 加 md5
fis.match('*.{js,css,png,jpg}', {
    useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.html', {
    // fis-optimizer-htmlmin 插件进行压缩
    optimizer: fis.plugin('htmlmin')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩
    optimizer: fis.plugin('png-compressor')
});

// fis.media('debug').match('*.{js,css,png}', {
//     useHash: false,
//     useSprite: false,
//     optimizer: null
// });

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('*.{less,css}', {
    packTo: '/static/aio.css'
});

fis.match('{/js/jquery-3.1.1.js, /js/fun.js}', {
    packTo: '/static/aio.js'
});
