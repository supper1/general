import request from './request'
import Cookies from 'js-cookie';
import qs from 'querystring-browser';
import store from '../redux/store/Store'
import { Dispatch, AnyAction } from 'redux'
import * as actionTypes from '../redux/constants/actionTypes';
let wx = require("weixin-js-sdk"); //引入微信jssdk文件
let dispatch: Dispatch<AnyAction> = store.dispatch
      
export async function getInfoByOpenId(openid: string) { // 根据openid获取个人信息
    return request({
        url: `/auth/getInfoByOpenId`,
        data: { openid }
    });
}
export async function updateStudentGrade(gradeId: number) { // 更新年级
    return request({
        url: `/index/updateStudentGrade`,
        data: { gradeId }
    });
}

// export async function islogin() { // 登录验证接口
//     let url: string = window.location.search.replace('?', '')
//     let urlObj: any = qs.parse(url)   // 获取url里面参数
//     let userdata: any = store.getState().home.userdata // 获取redux里面登录态
//     if (userdata.openid) { // 检验redux里面登录态
//         return true
//     } else if (Cookies.get('userdata')) { // 检验cookie里面登录态

//         let data_str: string = Cookies.get('userdata') // 获取cookie里面用户数据
//         let data: object = JSON.parse(data_str)
//         // .................跳转项目首页
//         dispatch( // 同步登陆态到redux
//             {
//                 type: actionTypes.SAVE_USERDATA,
//                 data: {
//                     ...data
//                 }
//             }
//         )

//     } else { // 检验url是否存在openid

//         if (urlObj.open_id && urlObj.open_id.length > 20) {

//             return new Promise((resolve, reject) => {
//                 getInfoByOpenId(urlObj.open_id) // 通过openid去获取用户数据
//                     .then(logins => {
//                         if (logins && logins.code === 1) {
//                             let data = logins.data
//                             dispatch( // 同步用户数据到redux
//                                 {
//                                     type: actionTypes.SAVE_USERDATA,
//                                     data: {
//                                         ...data
//                                     }
//                                 }
//                             )
//                             window.location.href = window.location.origin // 跳转到首页
//                         }
//                         // if(window.localStorage.getItem("englishId")&&window.localStorage.getItem("englishId")!="undefined"){
//                         //     window.location.href = window.location.origin + '/user/?id=' + window.localStorage.getItem("englishId")
//                         //     window.localStorage.removeItem("englishId")
//                         // }else{
//                         // }
//                         resolve()
//                     })
//             })
//         } else { // 跳转北京获取openid
//             return new Promise((resolve, reject) => {
//                 window.location.href = 'https://minsight.speiyou.com/i/usercenter/api/wxoauth?app_id=wx17745458a8a5358c&callback_url=' + window.location.origin
//             });
//         }
//     }
// }
export async function wxconfig() { // 微信jssdk授权
    let url = store.getState().home.url ? store.getState().home.url : window.location.href
    return request(
        {
            url: `/auth/getSignature`,
            data: {
                url
            }
        }
    );
}
export async function configShare() { // 验证微信分享
    let res = await wxconfig()
    if (!res) return
    let url = window.location.origin + '/'
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: "wx17745458a8a5358c", // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        signature: res.data.signature,// 必填，签名
        jsApiList: ['onMenuShareTimeline',
            'onMenuShareAppMessage',
            'previewImage',
            'hideAllNonBaseMenuItem',
            'showMenuItems',
            "startRecord",
            "stopRecord",
            "onVoiceRecordEnd",
            "playVoice",
            "stopVoice",
            "onVoicePlayEnd",
            "uploadVoice"
        ] // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {

        wx.hideAllNonBaseMenuItem();
        wx.showMenuItems({
            menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline'] // 要显示的菜单项，所有menu项见附录3
        });
        wx.onMenuShareTimeline({
            title: '学而思阅读训练营', // 分享标题
            link: url,// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://xueersiimg.xrspy.com/english/share_icon.png', // 分享图标
            success: function () {
                // 用户点击了分享后执行的回调函数


            }
        })

        wx.onMenuShareAppMessage({
            title: '学而思阅读训练营', // 分享标题
            desc: '快来参加学而思英语阅读训练营吧', // 分享描述
            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://xueersiimg.xrspy.com/english/share_icon.png', // 分享图标

            success: function () {
                // 用户点击了分享后执行的回调函数


            }
        });
    });

}
 
 