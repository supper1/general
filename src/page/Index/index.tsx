import React from 'react';
import { connect } from 'react-redux'
import { History, Location } from "history"
import { match } from "react-router-dom"
import * as homeActions from '../../redux/actions/home'
import { bindActionCreators } from 'redux';
import Anthology from '../../compontents/Anthology/index'
import Poster from '../../compontents/Poster/index'
import './index.styl'

interface Props extends React.Props<any> {  // 参数类型审查
  match: match;
  history: History;
  Location: Location;
  home: any
}
interface State { // state 类型审查
  off: Boolean,
  vedioBtnOff: Boolean
}


class Index extends React.Component<Props, State> {
  div: any
  readonly state: State = {
    off: true,
    vedioBtnOff: true
  }
  public async componentWillMount() {

  }
  componentDidMount(){
    this.div.onplaying=()=>{
      this.setState({
        vedioBtnOff: false
      })
    }
    this.div.onended=()=>{
      this.setState({
        vedioBtnOff: true
      })
    }
    this.div.onpause=()=>{
      this.setState({
        vedioBtnOff: true
      })
    }

  }
  public start = (): void => {

  }
  viewMore = (): void => {
    this.props.history.push("/list")
  }
  stopPlay = (): void => {
    this.div.pause()
  }
  render() {
    return (
      <div id="Index">
        <div className="preview">
          <video width="100%" onClick={this.stopPlay} 
          ref={div => { this.div = div }} 
          height="100%" 
          src="http://www.raziel.site/general/v222.mp4"
          poster="http://www.raziel.site/general/pre.jpg"
          >
         
          </video>
          {this.state.vedioBtnOff && <div className="playbtn" onClick={() => {
            this.div.play()
            this.setState({
              vedioBtnOff: false
            })
          }}>

          </div>}
          {this.state.vedioBtnOff && <div className="tip">
            《将军爷爷讲故事》官方宣传片
          </div>}
        </div>

        <Anthology
          push={this.props.history.push} />
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
export default connect(mapState, mapDispatchToProps)(Index);
