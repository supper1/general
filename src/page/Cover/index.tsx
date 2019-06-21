import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import {islogin,checkTodayLock,configShare} from '../../api/api';
 
import './index.styl'

interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home:any
}
interface State  { // state 类型审查
  off: Boolean
}


class Cover extends React.Component<Props,State> {
  
  readonly state: State = {
    off:true
  }
  public async componentWillMount() {
 
  }
  public start=():void=>{
    
  }
  render() {
    return (
      <div id="Cover">
        <div className="comein" onClick={this.start}>
          <>
          <div>
            
          </div>
          </>
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
export default connect(mapState, mapDispatchToProps)(Cover);
