import * as actionTypes from '../constants/actionTypes';
import Store from '../store/Store';
let wx = require("weixin-js-sdk"); //引入微信jssdk文件

interface audioType{
    type:number,
    data?:any
}
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
/*
* type
*   0 无激活状态组件
*   1 语音一号组件播放
*   2 录音组件播放
*   3 语音二号组件播放
*/
export function save_audio(props:audioType) { // 标记激活组件的id
    return (dispatch:any)=>{
    
            dispatch({
                type:actionTypes.SAVE_AUDIO_ID,
                data:{
                    ...props
                }
            })
        }
        
     
}
export function stop_All() { // 停止所有激活组件
    let typeid:number = Store.getState().home.audio.type
    console.log(typeid)
    if(typeid===1){ // 停止一号语音组件
        Store.getState().home.audio.data.stop();
    }else if(typeid===2){ // 停止录音
        wx.stopRecord();
    }else if(typeid===3){ // 停止二号语音组件
        wx.stopVoice({
            localId: Store.getState().home.audio.data // 需要停止的音频的本地ID，由stopRecord接口获得
        });
            
    }
    
    return (dispatch:any)=>{
    
            dispatch({
                type:actionTypes.SAVE_AUDIO_ID,
                data:{
                     type:0,
                     data:null
                }
            })
        }
        
     
}