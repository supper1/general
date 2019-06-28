/**
 * @description 数据请求模块，轻度封装fetch
 * @author raziel
 * @since 19/05/23
 */
import 'whatwg-fetch'
import qs  from 'querystring'
import Loading from '../compontents/Loading'
import Cookies from 'js-cookie'
const baseUrl:string = ''; // 接口baseUrl
// const baseUrl:string = ''; // 接口baseUrl
interface params {
    url:string,
    data:any,
}

export default async function(props:params){
   
     
    return fetch(
        baseUrl + props.url,
        {
            method: 'POST',
            headers: {
                'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: qs.stringify(props.data),
            credentials:'include',
        }).then((response:Body)=>{
           

            return response.json()
        }).then((res:any) => {
            if(res.code===0){

                Cookies.remove("userdata")
                window.location.href = 'https://minsight.speiyou.com/i/usercenter/api/wxoauth?app_id=wx17745458a8a5358c&callback_url='+window.location.origin
            }else{

                return res;
            }
        }).catch(function (err:string) {
            if (err) {
                console.log('api error, HTTP CODE: ' + err)
                return
            }
        })
}