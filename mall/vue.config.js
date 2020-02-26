const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {

    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    // publicPath:'/app',
    // outputDir:'dist',
    // indexPath:'index2.html',
    // lintOnSave:false,
    productionSourceMap:true,
    chainWebpack:(config)=>{
        config.resolve.alias
            .set("@", resolve("src"))
            // .set("assets", resolve("src/assets"))
            // .set("components", resolve("src/components"))
            // .set("base", resolve("baseConfig"))
            .set("public", resolve("public"));
        config.plugins.delete('prefetch');
    }
}
