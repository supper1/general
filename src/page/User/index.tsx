import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import Issue from '../../compontents/Issue/index'
import user4 from '../../img/user4.jpg';
import crad_gray from '../../img/crad_gray.png';
import cameraImg from '../../img/camera.png';
import './index.styl'

interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home:any
}
interface State  { // state 类型审查
}


class User extends React.Component<Props,State> {
  readonly state: State = {

  }
  public async componentWillMount() {
 
  }
  public back=():void=>{
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
             <img src={user4} alt="海报"/>

           </div>
           <div className="text_box">
                <div className="name">
                    齐路通 少将
                </div>
                <div className="position">
                    中国人民解放军原南京军区空军副参谋长
                </div>
                <div className="tag">
                    学而思特邀德育讲师
                </div>
           </div>
       </div>
        <div className="dec_box">
            <div className="title">
                <img src={crad_gray} alt="卡片"/>
                <span>详细介绍</span>
                <div></div>
            </div>
            <div className="dec_content">
            假字假字假字假字假字假字假字假字假字
            假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字
            假字假字假字假字假字假字假字假字假字假字假字假字  假字假字假字假字假字假字假字假字假字
            假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字
            假字假字假字假字假字假字假字假字假字假字假字假字  假字假字假字假字假字假字假字假字假字
            假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字假字
            假字假字假字假字假字假字假字假字假字假字假字假字
            </div>
        </div>
        <div className="About">
            <img src={cameraImg} alt="相机"/>
            <span>
                相关德育课程
            </span>
        </div>
        <div className="about_content">
            
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
