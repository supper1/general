import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import Issue from '../../compontents/Issue/index'
import './index.styl'
import {vedioArr} from '../data'
import {appIndex} from '../../api/api';


interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home:any
}
interface State  { // state 类型审查
  viewArr:any;
  viewOff:Boolean
}


class List extends React.Component<Props,State> {
  readonly state: State = {
    viewArr:{},
    viewOff:false
  }
  public async componentWillMount() {
    let data:any = await appIndex()
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
  public back=():void=>{
    this.props.history.goBack()
  }
  render() {
    return (
      <div id="List">
       <div className="tip" onClick={this.back}>
        {"< 选集"}
       </div>
       <div className="box">
{  this.state.viewOff&& <div className="box">
      { vedioArr.map(item=><Issue
            key={item.id} 
            data={item} 
            push={this.props.history.push}
            type={true}
            viewNum={this.state.viewArr[item.id]}
            />) 
            }
            
      </div>}
                  
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
export default connect(mapState, mapDispatchToProps)(List);
