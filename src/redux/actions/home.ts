import * as actionTypes from '../constants/actionTypes';
// import Store from '../store/Store';
// let wx = require("weixin-js-sdk"); //引入微信jssdk文件
export function share() {
    
    return (dispatch:any)=>{
        let u:string = navigator.userAgent;
        let isiOS:boolean = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isiOS){
            dispatch({
                type:actionTypes.SHARE_URL,
                data:{
                    url:window.location.href
                }
            })
           
        }else{
            dispatch({
                type:actionTypes.SHARE_URL,
                data:{
                    url:false
                }
            })
        }
        
    }
}
 