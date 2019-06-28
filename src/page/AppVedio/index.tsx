import React from 'react';
import { connect } from 'react-redux'
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import okImg from '../../img/ok.png'
import viewImg from '../../img/view.png'
import Anthology from '../../compontents/Anthology/index'
import Poster from '../../compontents/Poster/index'
import './index.styl'
import TweenMax from 'gsap';
import {Props,State} from './index.d'
import {vedioArr,videoData} from '../data'
import qs from 'querystring';
import {appGeneralInfo,appAddGeneralPraise} from '../../api/api'

class AppVedio extends React.Component<Props, State> {
    isokDom:any
    LikeDom:any
    readonly state: State = {
        inputOff:true,
        shareOff:false,
        data:null,
        id:0,
        viewOff:false,
        myGeneral:{
            id: 0,
            play: 0,
            praise: 0
        },
        viewArr:[]
    }
    public async componentWillMount() {
        
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
        let res = await appGeneralInfo(id)
        if(!res)return
        if(res.code===1){
            this.setState({
                viewArr:res.data.generals,
                myGeneral:res.data.myGeneral,
                viewOff:true
            })
        }
    }
    public back = (): void => {
        this.props.history.goBack()
    }
     
    isok = ():void => {
        TweenMax.to(this.isokDom, 0, { scale:1 })
        TweenMax.killAll();
        TweenMax.from(this.isokDom, 1.2, { scale:1.8 })
        appAddGeneralPraise(this.state.id)
        let myGeneral = this.state.myGeneral 
        myGeneral.praise++
        this.setState({
            myGeneral
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
                                <img src={okImg} alt="点赞" ref={div=>this.isokDom=div} onClick={this.isok}/>
                                <span>
                                    {this.state.myGeneral.praise}
                                </span>
                            </div>
                            <div className="icon_item">
                                <img src={viewImg} alt="播放量"/>
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
                {this.state.viewOff&& <Anthology
                    push={this.props.history.push}
                    viewArr={this.state.viewArr}
                    type={true}
                    />}
                <Poster push={this.props.history.push} type={true}/>
         
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
export default connect(mapState, mapDispatchToProps)(AppVedio);
