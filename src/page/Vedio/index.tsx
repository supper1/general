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
import {islogin,generalInfo,addGeneralPraise,addCommentPraise,addComment,generalInfoMore,configShare} from '../../api/api';

import qs from 'querystring';

class Vedio extends React.Component<Props, State> {
    isokDom:any
    LikeDom:any
    tipDom:any
    readonly state: State = {
        inputOff:true,
        commentCount:0,
        Comments:[
            {
                "createTime": "",
                "student": {
                    "imgUrl": "",
                    "nickName": ""
                },
                "id": 1,
                "content": "",
                "praise": 0
            }
        ],
        myPraise:[
            {
                "commentId":1,
                "id":1
            }
        ],
        commentPraiseList:[],
        shareOff:false,
        data:{
            id:0,
            order:"",
            title:"",
            dec:"",
            userId:0,
            url:"",
            imgUrl:"",
        },
        id:0,
        generals:null,
        myGeneral:{
            play:0,
            id:0,
            praise:0
        },
        value:"",
        moreOff:true,
        page:1
    }
    public async componentWillMount() {
        await islogin()
        configShare()
        window.onscroll=()=>{ // 监听页面滚动
            if(window.scrollY>(window.innerWidth*2.6-window.innerHeight)){
                this.setState({
                    inputOff:false,
                })
            }else{
                this.setState({
                    inputOff:true,

                })
            }
            //文档内容实际高度（包括超出视窗的溢出部分）
                var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                //滚动条滚动距离
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                //窗口可视范围高度
                var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
                
                if(clientHeight + scrollTop >= scrollHeight&&this.state.moreOff){
                    
                     this.getMore()
                }
         }
         let url: string = window.location.search.replace('?', '')
         let id: number = Number(qs.parse(url).id)   // 获取url里面参数
         if(!id){ 
           this.props.history.goBack()
         }else{
            let data = await generalInfo(id)
            let arr:Array<videoData> = vedioArr.filter(item=>item.id===id)
            this.setState({
              data:arr[0],
              id,
              generals:data.data.generals,
              myGeneral:data.data.myGeneral,
              commentCount:data.data.commentCount,
              Comments:data.data.commentList,
              commentPraiseList:data.data.commentPraiseList
            })
            if(data.data.commentList.length<15){
                this.setState({
                    moreOff:false
                })
            }
         }
    }
    public back = (): void => { // 返回
        this.props.history.goBack()
    }
    getMore=async ()=>{
        let page = this.state.page+1;
        this.setState({
            page
        })
        let res = await generalInfoMore(this.state.id,page)
        if(!res)return
        if(res.code===1){
            let data = this.state.Comments
            if(res.data.length<15){
                this.setState({
                    moreOff:false
                })
            }
             res.data.map((item:any)=>{
                 data.push(item)
             })
             this.setState({
                Comments:data
             })
        }

    }
    scrollto = ():void => { // 页面滚动
        window.scrollTo(0, window.innerWidth*2.4);
    }
    isok = ():void => { // 点赞方法
        TweenMax.to(this.isokDom, 0, { scale:1 })
        TweenMax.killAll();
        TweenMax.from(this.isokDom, 1.2, { scale:1.8 })
        addGeneralPraise(this.state.id)
        let myGeneral = this.state.myGeneral 
        myGeneral.praise++
        this.setState({
            myGeneral
        })
    }
    Like = ():void => { // 点赞方法
        TweenMax.to(this.LikeDom, 0, { scale:1 })
        TweenMax.killAll();
        TweenMax.from(this.LikeDom, 1.2, { scale:1.6 })
        addGeneralPraise(this.state.id)
        let myGeneral = this.state.myGeneral 
        myGeneral.praise++
        this.setState({
            myGeneral
        })
    }
    scroll = () => {

        setTimeout(function () {
            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
            window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);

    }
    commentLike = (id:number,index:number):void => { // 给评论点赞
        if(this.state.commentPraiseList.indexOf(id)==-1){
            addCommentPraise(id) 
            let commentPraiseList = this.state.commentPraiseList
            let Comments = this.state.Comments
            Comments[index].praise =  Comments[index].praise + 1 // 点赞数+1
            commentPraiseList.push(id) // 标记图标
            this.setState({
                commentPraiseList,
                Comments
            })
        }
        
    }
    shareFun = ():void => { // 打开分享
        this.setState({
            shareOff:true
        })
        window.scrollTo(0, window.innerWidth*.55);
    }
    closeShare = ():void => { // 关闭分享
        this.setState({
            shareOff:false
        })
    }
    submit = ():void => { // 提交留言
        if(this.state.value!=''){
            addComment(this.state.id,this.state.value)
            TweenMax.to(this.tipDom, .5, { top:"40vh" , opacity:1})
            this.setState({
                value:''
            })
            setTimeout(()=>{
                TweenMax.to(this.tipDom, .5, { top:"-10vh" ,opacity:0})
                
            },2000)

        }
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
                                <img src={okImg} ref={div=>this.isokDom=div} alt="点赞" onClick={this.isok}/>
                                <span>
                                    {this.state.myGeneral.praise}
                                </span>
                            </div>
                            <div className="icon_item">
                                <img alt="播放量" src={viewImg} />
                                <span>
                                {this.state.myGeneral.play}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dec_box">
                        本期介绍：{this.state.data.dec}
                    </div>
                </div>
               { this.state.generals&&<Anthology push={this.props.history.push} viewArr={this.state.generals}/>}
                <Poster push={this.props.history.push}/>
                <div className={this.state.inputOff?"comment_box":"comment_box active"}>
                    <span className="comment_text" onClick={this.scrollto}>
                        全部评论
                    <span>
                            {this.state.commentCount}
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
                            <img src={isokImg} alt="点赞"/>
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
                   {   this.state.Comments.map((item,index)=><div key={item.id} className="item">
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
                                <div className="ok_num" onClick={()=>{this.commentLike(item.id,index)}}>
                                        <img src={
                                            this.state.commentPraiseList.indexOf(item.id)==-1?
                                            isokImg:okImg
                                            } alt="点赞"/>
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
                    src={this.props.home.userdata.imgUrl} 
                    alt="头像"/>

                    <input onBlur={this.scroll} type="text" value={this.state.value} className="input" onChange={e=>this.setState({value:e.target.value})}/>
                    <button className={this.state.value==""?"submit":"submit submit_active"} onClick={this.submit}>发 表</button>
                </div>}
                {this.state.shareOff&&<div onClick={this.closeShare} className="share_box">

                </div>}
                <div className="tip_box" ref={div=>this.tipDom=div}>
                您的留言已发布成功,后台审核通过后即可显示                     
                </div>
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
