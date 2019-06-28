import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import Issue from '../../compontents/Issue/index'
import crad_gray from '../../img/crad_gray.png';
import cameraImg from '../../img/camera.png';
import qs from 'querystring'
import './index.styl'
import {userArr,userData,vedioArr} from '../data';
import {islogin,indexIndex} from '../../api/api';

interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home: any
}
interface State { // state 类型审查
  id:number;
  data:userData;
  viewArr:any;
  viewOff:Boolean
}


class User extends React.Component<Props, State> {
  readonly state: State = {
    id:0,
    data:null,
    viewArr:{},
    viewOff:false
  }
  public async componentWillMount() {
    let url: string = window.location.search.replace('?', '')
    let id: number = Number(qs.parse(url).id)   // 获取url里面参数
    if(!id){
      this.props.history.goBack()
    }else{
      
      let arr:Array<userData> = userArr.filter(item=>item.id===id)
      this.setState({
        data:arr[0],
        id
      })
    }
    await islogin()
    let data:any = await indexIndex()
    if(!data)return
    if(data.code===1){
      let viewArr:any = {}
      data.data.map((item:any)=>viewArr[item.id]=item.play)
      this.setState({
        viewArr,
        viewOff:true
      })
       
    }

  }
  public back = (): void => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div id="User">
        <div className="tip" onClick={this.back}>
          {"< "}&nbsp;&nbsp;&nbsp;返 回
       </div>
        <div className="user_box">
          <div className="img_box">
            <img src={this.state.data.imgUrl} alt="海报" />

          </div>
          <div className="text_box">
            <div className="name">
              {this.state.data.name} {this.state.data.position}
                </div>
            <div className="position">
              {this.state.data.langPosition}
                </div>
            <div className="tag">
              学而思特邀德育讲师
                </div>
          </div>
        </div>
        <div className="dec_box">
          <div className="title">
            <img src={crad_gray} alt="卡片" />
            <span>详细介绍</span>
            <div></div>
          </div>
          <div className="dec_content">
            {
              this.state.data.dec
            }
            </div>
        </div>
        <div className="About">
          <img src={cameraImg} alt="相机" />
          <span>
            相关德育课程
            </span>
        </div>
        <div className="about_content">
        {vedioArr.map(item=>(item.userId===this.state.id&&<Issue key={item.id} data={item} push={this.props.history.push}/>))}
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
export default connect(mapState, mapDispatchToProps)(User);
