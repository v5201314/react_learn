const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy.createProxyMiddleware('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true, //控制服务器收到的请求头中Host的值
            pathRewrite:{'^/api1':''} //重写请求路径(必须重写)
        }),
        proxy.createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}