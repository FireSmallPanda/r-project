import axios from 'axios'
import service from './contactApi'
import { checkResponseCode } from './httpUtil'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://www.woheyun.com'
// service 循环遍历输出不同的请求方法
let instance = axios.create({
    timeout:15000
})
const http = {}; // 包裹请求方法的容器

// 请求格式/参数的统一
for(let key in service){
    let api = service[key]; // url method
    // async 作用：避免进入回调地狱
    http[key] = async function(
        params, // 请求参数 get：url，put，post，patch（data），delete：url
        isFormData=false,// 标识是否是form-data请求
        config={}, // 配置参数
        id
    ){
        let newParams = {}

        //  content-type是否是form-data的判断
        if(params && isFormData){
            newParams = new FormData()
            for(let i in params){
                newParams.append(i,params[i])
            }
        }else{
            newParams = params
        }
        // 若有id则ID拼接在url之后
        if(!!id){
            api.url = `${api.url}/${id}`
        }
        // 不同请求的判断
        let response = {}; // 请求的返回值
        if(api.method === 'put'|| api.method === 'post'||api.method === 'patch'){
            try{
                response =  await instance[api.method](api.url,newParams,config)
            }catch(err){
                response = err
            }
        }else if(api.method === 'delete'|| api.method === 'get'){
            config.params = newParams
            try{
                response =  await instance[api.method](api.url,config)
            }catch(err){
                response = err
            }
        }
        return response; // 返回响应值
    }
}

// 拦截器的添加
// 请求拦截器
instance.interceptors.request.use(config=>{
    // 发起请求前做些什么

    return config
},()=>{
    // 请求错误

})
// 响应拦截器
instance.interceptors.response.use(res=>{
    // 请求成功
    // 根据返回code进行处理
    // checkResponseCode(res.data.code?res.data.code:res.data.errorNo)    
    return res.data
},(res)=>{
    // 对错误进行捕获
   console.log("An error occurred in the request.")
   alert('数据异常，请稍后再试') 
   console.log(res)
})

export default http