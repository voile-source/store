module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'localhost:8089/', //接口域名
                changeOrigin: true,             //是否跨域
                ws: false,                       //是否代理 websockets
                secure: false,                   //是否https接口
                pathRewrite: {                  //路径重置
                    '^/api': ''
                }
            }
        }
    }
};