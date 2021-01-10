

/**
 * 查看返回的编码并作出相应响应
 * @param {Number} code 响应编码
 */
export const checkResponseCode = (code) => {
    switch(code){
        case 400:
            // 权限校验失败
            // 判断是否开启了权限校验 true 是 false 不是
            // if(config.ENV.bspFlag){ 
                // 跳转登录页面
               window.location.href = "http://www.baidu.com"
            // }
            
        break
        case 200:
        break
        default:
        break
    }
}
