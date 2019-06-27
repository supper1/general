import React from 'react';
import { connect } from 'react-redux'
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import okImg from '../../img/ok.png'
import viewImg from '../../img/view.png'
import Anthology from '../../compontents/Anthology/index'
import Poster from '../../compontents/Poster/index'
import isokImg from '../../img/isok.png'
import commentImg from '../../img/comment.png'
import shareImg from '../../img/share.png';
import './index.styl'
import TweenMax from 'gsap';
import {Props,State} from './index.d'
import {vedioArr,videoData} from '../data'
import qs from 'querystring';

class Vedio extends React.Component<Props, State> {
    isokDom:any
    LikeDom:any
    readonly state: State = {
        inputOff:true,
        Comments:[
            {
                "createTime": "2019-06-25",
                "student": {
                    "imgUrl": "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTK7H70jhKO2oEyKkLB4EqHEJARTZxfCsLHbeN00gkoJPpIUTib8mx6kdr97FqYZo78a9tNibF2zdDlw\/132",
                    "nickName": "李锋️"
                },
                "id": 1,
                "content": "假字假字假字假字假字假字假字假字假字假字假字假字假字假字",
                "praise": 2
            }
        ],
        "myPraise":[
            {
                "commentId":1,
                "id":1
            }
        ],
        shareOff:false,
        data:null,
        id:0
    }
    public async componentWillMount() {
        window.onscroll=()=>{
            if(window.scrollY>(window.innerWidth*2.6-window.innerHeight)){
                this.setState({
                    inputOff:false,

                })
            }else{
                this.setState({
                    inputOff:true,

                })
            }
         }
         let url: string = window.location.search.replace('?', '')
         let id: number = Number(qs.parse(url).id)   // 获取url里面参数
         if(!id){
           this.props.history.goBack()
         }else{
           
            let arr:Array<videoData> = vedioArr.filter(item=>item.id===id)
            this.setState({
              data:arr[0],
              id
            })
         }
    }
    public back = (): void => {
        this.props.history.goBack()
    }
    scrollto = ():void => {
        window.scrollTo(0, window.innerWidth*2.4);
    }
    isok = ():void => {
        TweenMax.to(this.isokDom, 0, { scale:1 })
        TweenMax.killAll();
        TweenMax.from(this.isokDom, 1.2, { scale:1.8 })
    }
    Like = ():void => {
        TweenMax.to(this.LikeDom, 0, { scale:1 })
        TweenMax.killAll();
        TweenMax.from(this.LikeDom, 1.2, { scale:1.6 })
    }
    commentLike = ():void => {
        
    }
    shareFun = ():void => { // 打开分享
        this.setState({
            shareOff:true
        })
    }
    closeShare = ():void => { // 关闭分享
        this.setState({
            shareOff:false
        })
    }
    render() {
        return (
            <div id="Vedio">
                <div className="vedio_box">
                    <video
                        src={this.state.data.url}
                        width="100%"
                        height="100%"
                        poster={this.state.data.imgUrl}
                        controls
                    >

                    </video>
                </div>
                <div className="vedio_dec">
                    <div className="title_box">
                        <div className="title">
                            {this.state.data.order}  {this.state.data.title}
                       </div>
                        <div className="icon_box">
                            <div className="icon_item">
                                <img src={okImg} ref={div=>this.isokDom=div} onClick={this.isok}/>
                                <span>
                                    195123312
                                </span>
                            </div>
                            <div className="icon_item">
                                <img src={viewImg} />
                                <span>
                                    19512342
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dec_box">
                        本期介绍：{this.state.data.dec}
                    </div>
                </div>
                <Anthology push={this.props.history.push} />
                <Poster push={this.props.history.push}/>
                <div className={this.state.inputOff?"comment_box":"comment_box active"}>
                    <span className="comment_text" onClick={this.scrollto}>
                        全部评论
                    <span>
                            212331
                    </span>
                    </span>
                    <span className="icon_box">
                        <div className="icon_item" onClick={this.scrollto}>
                            <img src={commentImg} alt="评论" />
                            <span>
                                评 论
                        </span>
                        </div>
                        <div className="icon_item" 
                        ref={div=>this.LikeDom=div}
                         onClick={this.Like}>
                            <img src={isokImg} alt="点赞" onClick={this.commentLike}/>
                            <span>
                                点 赞
                        </span>
                        </div>
                        <div className="icon_item" onClick={this.shareFun}>
                            <img src={shareImg} alt="分享" />
                            <span>
                                分 享
                        </span>
                        </div>
                    </span>
                </div>
                <div className="comments">
                   {   this.state.Comments.map(item=><div key={item.id} className="item">
                            <div className="tip">
                                <div className="user_dec">
                                    <img
                                    src={item.student.imgUrl} 
                                    alt="头像地址"
                                    />
                                    <div className="user_dec_box">
                                        <div className="user_name">
                                            {item.student.nickName}
                                        </div>
                                        <div className="user_time">
                                            {item.createTime}
                                        </div>
                                    </div>
                                </div>
                                <div className="ok_num">
                                        <img src={isokImg} alt="点赞"/>
                                        <span>
                                            {item.praise}
                                        </span>
                                </div>
                            </div>
                            <div className="content">
                            {item.content}
                            </div>

                        </div>) }
                </div>

             {!this.state.inputOff&&<div className="input_box">
                    <img 
                    src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7H70jhKO2oEyKkLB4EqHEJARTZxfCsLHbeN00gkoJPpIUTib8mx6kdr97FqYZo78a9tNibF2zdDlw/132" 
                    alt="头像"/>

                    <input type="text" className="input"/>
                    <button className="submit">发 表</button>
                </div>}
                {this.state.shareOff&&<div onClick={this.closeShare} className="share_box">

                </div>}
            </div>
        );
    }
}
const mapState = (state: any) => ({
    home: state.home
});
const mapDispatchToProps = (dispatch: any) => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}
export default connect(mapState, mapDispatchToProps)(Vedio);
