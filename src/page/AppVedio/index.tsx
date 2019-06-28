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

class AppVedio extends React.Component<Props, State> {
    isokDom:any
    LikeDom:any
    readonly state: State = {
        inputOff:true,
        shareOff:false,
        data:null,
        id:0
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
    }
    public back = (): void => {
        this.props.history.goBack()
    }
     
    isok = ():void => {
        TweenMax.to(this.isokDom, 0, { scale:1 })
        TweenMax.killAll();
        TweenMax.from(this.isokDom, 1.2, { scale:1.8 })
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
                                    195123312
                                </span>
                            </div>
                            <div className="icon_item">
                                <img src={viewImg} alt="播放量"/>
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
                {/* <Anthology push={this.props.history.push} /> */}
                <Poster push={this.props.history.push}/>
         
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
