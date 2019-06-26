import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import Issue from '../../compontents/Issue/index'
import './index.styl'

interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home:any
}
interface State  { // state 类型审查
}


class List extends React.Component<Props,State> {
  readonly state: State = {

  }
  public async componentWillMount() {
 
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
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             <Issue push={this.props.history.push}/>
             
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
